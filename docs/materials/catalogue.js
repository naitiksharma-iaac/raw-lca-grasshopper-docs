/* Read-only catalogue. No environmental calculation or unit conversion. */
const esc=s=>String(s??'Not supplied').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sourceName=p=>p==='okobaudat'?'ÖKOBAUDAT':'Danish BR18 / Table 7';
const routeName={A:'A · Matching area / volume',B:'B · Source-density route',C:'C · Evidence or explicit count needed',D:'D · Unsupported / activity route'};
function filterRecords(records,f={}){
 const q=(f.search||'').toLocaleLowerCase().trim();
 return records.filter(r=>(!q||[r.source.name,r.raw.name,r.id,r.source.provider_id].some(x=>(x||'').toLocaleLowerCase().includes(q)))
 &&(!f.source||r.source.pack===f.source)&&(!f.category||r.raw.category===f.category)
 &&(!f.unit||r.source.declared_unit===f.unit)&&(!f.module||r.raw.modules_numeric.includes(f.module))
 &&(!f.density||(f.density==='yes')===(r.raw.density!==null))
 &&(!f.route||r.analysis.geometry_route===f.route)
 &&(!f.metadata||f.metadata==='method'&&r.raw.method.status==='unknown'||f.metadata==='factor'&&!r.analysis.a1a3_numeric_complete||f.metadata==='category'&&r.analysis.category_review.length>0||f.metadata==='thickness'&&Number(r.source.fields['Schichtdicke (m)'])>0));
}
function aggregateCounts(records,key){return records.reduce((a,r)=>{const k=key(r);a[k]=(a[k]||0)+1;return a;},{});}
function detailHtml(r){
 const row=(k,v)=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`;
 const links=r.source.urls.filter(u=>u&&/^https:\/\//.test(u)).map(u=>`<a href="${esc(u)}" target="_blank" rel="noopener">Open original source ↗</a>`).join(' ');
 return `<p class="eyebrow">Source record · read only</p><h2>${esc(r.source.name)}</h2><p>${links}</p>
 <dl>${row('Source / owner',sourceName(r.source.pack)+' / '+(r.source.fields['Declaration owner']||'Not supplied'))}${row('Source ID',r.source.provider_id)}${row('RAW stable ID',r.id)}${row('Pinned revision',r.revision)}${row('Original source category',r.source.category_original)}${row('Source English category',r.source.category_en)}${row('Current RAW family (derived browsing label)',r.raw.category)}${row('RAW subcategory',r.raw.subcategory)}${row('Declared quantity (original text)',r.source.reference_quantity_text+' '+r.source.declared_unit)}${row('RAW quantity alias; not a new unit',r.raw.reference_quantity+' '+r.raw.declared_unit)}${row('Density (source kg/m³)',r.raw.density)}${row('Explicit source thickness (m)',r.source.fields['Schichtdicke (m)']||null)}${row('Region / source version',r.source.region+' / '+(r.source.version||'Not supplied'))}${row('LCIA method in current RAW record',r.raw.method.status)}${row('Source standards statement',r.source.fields.Konformitaet||null)}${row('Reference flow',r.source.fields['Referenzfluss-Name']||null)}</dl>
 <h3>Source GWP observations</h3><p>Values per declared quantity above. Missing is not zero. Aggregate A1–A3 and leaves must not be added together.</p><div class="scroll"><table><thead><tr><th>Module</th><th>Original value</th><th>Indicator / unit</th></tr></thead><tbody>${r.raw.impacts.map(i=>`<tr><td>${esc(i.module)}</td><td>${i.value===null?'Unavailable':esc(i.value)}<small>${esc(i.status)}</small></td><td>${esc(i.indicator.id)}<small>${esc(i.unit)}</small></td></tr>`).join('')}</tbody></table></div>
 <h3>Quantity opportunities — research, not conversion</h3>${r.analysis.paths.map(p=>`<article class="path"><b>${esc(p.classification+' · '+p.path)}</b><p>${esc(p.condition)}</p><small>${p.current_engine?'Existing quantity route, conditional on the stated evidence.':'Not implemented as an automatic RAW conversion.'}</small></article>`).join('')}
 <h3>Category suggestions</h3>${r.analysis.category_review.length?r.analysis.category_review.map(i=>`<p><b>${esc(i.proposed_category)}</b> — ${esc(i.reason)} <small>${esc(i.status)}</small></p>`).join(''):'<p>No automated review flag. This is not confirmation of correct classification.</p>'}
 <h3>Warnings / limitations</h3><ul>${r.analysis.warnings.map(w=>`<li>${esc(w)}</li>`).join('')}</ul><p>Unresolved method metadata remains unresolved even when source standards are listed. Factor availability is not source-scenario applicability.</p>
 <details><summary>Original metadata fields and module-row differences</summary><dl>${Object.entries(r.source.fields).map(([k,v])=>row(k,v||null)).join('')}</dl><pre>${esc(JSON.stringify(r.source.field_variations,null,2))}</pre></details>
 <details><summary>Traceability: original GWP cell text</summary><pre>${esc(JSON.stringify(r.raw.impacts.map(i=>({module:i.module,evidence:i.evidence})),null,2))}</pre></details>
 <p class="notice">Source fields are unchanged excerpts. RAW family labels, review flags and quantity opportunities are derived analysis. No proposals have changed the plugin or dataset.</p>`;
}
if(typeof module!=='undefined')module.exports={filterRecords,aggregateCounts,detailHtml};
if(typeof document!=='undefined'){
 let records=[],audit=null,filtered=[],page=0,selection=0,selectedId=null;const details=new Map();const size=40,$=id=>document.getElementById(id);
 const ids=['search','source','category','unit','module','density','route','metadata'];
 const getFilter=()=>Object.fromEntries(ids.map(id=>[id,$(id).value]));
 function options(id,values){$(id).innerHTML='<option value="">All</option>'+values.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('');}
 async function select(id){const token=++selection;selectedId=id;const r=records.find(r=>r.id===id);if(!r){$('detail').innerHTML='<h2>Record not available</h2><p>This ID is not in the licensed public export.</p>';return;}
 $('detail').innerHTML='<p role="status">Loading source detail…</p>';
 try{if(!details.has(r.detail_shard)){const response=await fetch(`data/records/${r.detail_shard}.json`);if(!response.ok)throw Error('HTTP '+response.status);details.set(r.detail_shard,(await response.json()).records);}
 const full=details.get(r.detail_shard).find(x=>x.id===id);if(!full)throw Error('Record not found in snapshot');if(token!==selection)return;$('detail').innerHTML=detailHtml(full);$('detail').focus({preventScroll:true});
 }catch(e){if(token===selection)$('detail').innerHTML='<p>Source detail unavailable. '+esc(e.message)+'</p>';}}
 function render(){
  const f=getFilter();filtered=filterRecords(records,f);page=Math.min(page,Math.max(0,Math.ceil(filtered.length/size)-1));
  if(selectedId&&!filtered.some(r=>r.id===selectedId)){selection++;selectedId=null;$('detail').innerHTML='<h2>Select a matching record</h2><p>The previous selection is outside these filters.</p>';}
  $('results-status').textContent=`${filtered.length.toLocaleString()} public records · page ${page+1} of ${Math.max(1,Math.ceil(filtered.length/size))}`;
  $('withheld').hidden=f.source!=='denmark_br18_table7';
  $('results').innerHTML=filtered.slice(page*size,(page+1)*size).map(r=>`<button class="result" data-id="${esc(r.id)}"><b>${esc(r.source.name)}</b><span>${esc(r.source.reference_quantity_text+' '+r.source.declared_unit)} · ${esc(r.raw.category)}</span><small>${esc(r.source.provider_id)} · Density ${r.raw.density===null?'not supplied':'supplied'}</small><em>${esc(routeName[r.analysis.geometry_route])}</em></button>`).join('')||'<p>No matching public records. Clear filters or inspect the source coverage note.</p>';
  $('prev').disabled=page===0;$('next').disabled=(page+1)*size>=filtered.length;
 }
 function statTable(title,rows,headers){return `<h3>${esc(title)}</h3><div class="scroll"><table><thead><tr>${headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(v=>`<td>${esc(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;}
 function reports(){
  const packs=audit.packs;const source=$('report-source').value;const selected=packs.filter(p=>!source||p.pack===source);
  $('categories').innerHTML=selected.map(p=>statTable(sourceName(p.pack)+' · RAW families',Object.entries(p.categories),['Derived RAW family','Records'])+`<p>${p.review_count} records flagged for human review. Flags are suggestions, not confirmed misclassification.</p>`+statTable('Source category → current RAW family',p.category_crosswalk.map(c=>[c.source_original,c.source,c.raw,c.count]),['Original source category','Source English category','RAW family','Records'])).join('');
  $('units').innerHTML=selected.map(p=>`<h3>${sourceName(p.pack)}</h3>`+Object.entries(p.units_original).map(([u,n])=>`<div class="unitbar"><span>${esc(u)}</span><meter min="0" max="${p.count}" value="${n}">${n}</meter><b>${n.toLocaleString()}</b></div>`).join('')+statTable('Geometry-route audit',Object.entries(p.geometry_routes).map(([k,n])=>[routeName[k],n]),['Conditional route','Records'])+`<p>${p.direct_matching} records have a conditional direct declared-quantity path, including measured mass and explicit count. ${p.density} have usable source density; ${p.explicit_thickness} have a positive explicit thickness field. These overlapping metadata counts are not conversion approvals.</p>`).join('');
 }
 async function start(){try{
  const responses=await Promise.all(['data/catalogue-v1.json','data/audit-v1.json'].map(url=>fetch(url).then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json();})));
  records=responses[0].records.sort((a,b)=>a.source.name.localeCompare(b.source.name));audit=responses[1];options('category',[...new Set(records.map(r=>r.raw.category))].sort());options('unit',[...new Set(records.map(r=>r.source.declared_unit))].sort());options('module',[...new Set(records.flatMap(r=>r.raw.modules_numeric))].sort());
  $('loading').hidden=true;render();reports();
  ids.forEach(id=>$(id).addEventListener(id==='search'?'input':'change',()=>{page=0;render();}));
  $('reset').onclick=()=>{ids.forEach(id=>$(id).value='');page=0;render();};$('prev').onclick=()=>{page--;render();};$('next').onclick=()=>{page++;render();};
  $('results').onclick=e=>{const b=e.target.closest('[data-id]');if(b){const h='#record='+encodeURIComponent(b.dataset.id);if(location.hash===h)select(b.dataset.id);else location.hash=h;}};
  const hash=()=>{if(location.hash.startsWith('#record='))select(decodeURIComponent(location.hash.slice(8)));};window.addEventListener('hashchange',hash);hash();
  document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-view]').forEach(t=>t.setAttribute('aria-pressed',String(t===b)));document.querySelectorAll('.view').forEach(v=>v.hidden=v.id!==b.dataset.view);});
  $('report-source').onchange=reports;
 }catch(e){$('loading').textContent='Catalogue could not load. '+e.message+' Retry this page over HTTPS.';}}
 start();
}
