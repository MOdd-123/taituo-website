(() => {
  const saved=localStorage.getItem('taituo-lang')||'zh';
  let lang=saved;
  const applyLanguage=()=>{
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    document.querySelectorAll('[data-zh]').forEach(el=>{if(el.dataset[lang]!==undefined)el.innerHTML=el.dataset[lang]});
    document.querySelectorAll('[data-lang-button]').forEach(el=>el.textContent=lang==='zh'?'EN':'中文');
    localStorage.setItem('taituo-lang',lang);
  };
  document.querySelectorAll('[data-lang-button]').forEach(el=>el.addEventListener('click',()=>{lang=lang==='zh'?'en':'zh';applyLanguage()}));
  const menu=document.querySelector('.mobile-menu'),links=document.querySelector('.navlinks');
  if(menu&&links)menu.addEventListener('click',()=>links.classList.toggle('open'));
  document.querySelectorAll('.series-thumbs button').forEach(btn=>btn.addEventListener('click',()=>{const img=btn.closest('.series-visual').querySelector('.series-main');img.src=btn.dataset.src;img.dataset.full=btn.dataset.src;btn.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('active'));btn.classList.add('active')}));
  const viewer=document.createElement('dialog');viewer.className='image-viewer';viewer.innerHTML='<button type="button" aria-label="Close image">×</button><img alt="Full-size tractor view">';document.body.appendChild(viewer);const viewerImg=viewer.querySelector('img');const closeViewer=()=>viewer.close();viewer.querySelector('button').addEventListener('click',closeViewer);viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer()});document.querySelectorAll('[data-lightbox]').forEach(img=>{img.addEventListener('click',()=>{viewerImg.src=img.src;viewerImg.alt=img.alt||'Tractor product photo';viewer.showModal()});img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();img.click()}})});
  document.querySelectorAll('.series-tab').forEach(tab=>tab.addEventListener('click',()=>{
    document.querySelectorAll('.series-tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.series-panel').forEach(x=>x.classList.remove('active'));
    tab.classList.add('active');document.getElementById(tab.dataset.target)?.classList.add('active');
  }));
  applyLanguage();
})();
