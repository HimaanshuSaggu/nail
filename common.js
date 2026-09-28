(function(){
  document.addEventListener('DOMContentLoaded',()=>{
    if(window.ASSETS){
      const logo=document.getElementById('logo'); if(logo) logo.src=ASSETS.logo;
      ['photo0','photo1','photo2','photo3'].forEach(id=>{const el=document.getElementById(id); if(el&&ASSETS[id]) el.src=ASSETS[id]});
    }
    const nav=document.getElementById('nav');
    addEventListener('scroll',()=>nav&&nav.classList.toggle('scrolled',scrollY>20),{passive:true});
    const drawer=document.getElementById('drawer');
    const open=document.getElementById('menuBtn'), close=document.getElementById('drawerClose');
    function shut(){drawer&&drawer.classList.remove('open');document.body.style.overflow=''}
    open?.addEventListener('click',()=>{drawer.classList.add('open');document.body.style.overflow='hidden'});
    close?.addEventListener('click',shut); drawer?.addEventListener('click',e=>{if(e.target===drawer)shut()});
    drawer?.querySelectorAll('a').forEach(a=>a.addEventListener('click',shut));
    const modal=document.getElementById('bookingModal');
    document.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',()=>modal?.classList.add('open')));
    document.getElementById('closeModal')?.addEventListener('click',()=>modal.classList.remove('open'));
    modal?.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
    const light=document.getElementById('lightbox'), img=document.getElementById('lightboxImg');
    document.querySelectorAll('.photo img').forEach(x=>x.addEventListener('click',()=>{if(!light)return;img.src=x.src;img.alt=x.alt;light.classList.add('open')}));
    document.getElementById('closeLightbox')?.addEventListener('click',()=>light.classList.remove('open'));
    light?.addEventListener('click',e=>{if(e.target===light)light.classList.remove('open')});
  });
})();
