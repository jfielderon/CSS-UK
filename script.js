document.querySelectorAll('.brand').forEach(brand=>{
  brand.innerHTML='<img class="brand-logo" alt="Corporate Saving Solutions" loading="eager" decoding="sync">';
  brand.setAttribute('aria-label','Corporate Saving Solutions');
});

const transparentPixel='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
document.querySelectorAll('.brand-logo').forEach(img=>{img.src=transparentPixel;});

fetch('/public/css-logo-final.b64?brand=20260914',{cache:'no-store'})
  .then(r=>{
    if(!r.ok) throw new Error('Logo source unavailable');
    return r.text();
  })
  .then(raw=>{
    const clean=raw.replace(/\s+/g,'');
    const src='data:image/png;base64,'+clean;
    const test=new Image();
    test.onload=()=>{
      document.querySelectorAll('.brand-logo').forEach(img=>{img.src=src;});
    };
    test.onerror=()=>{
      document.querySelectorAll('.brand-logo').forEach(img=>{img.style.display='none';});
    };
    test.src=src;
  })
  .catch(()=>{
    document.querySelectorAll('.brand-logo').forEach(img=>{img.style.display='none';});
  });

document.querySelectorAll('.footer-brand img').forEach(img=>img.remove());
const toggle=document.querySelector('.nav-toggle');
if(toggle){toggle.addEventListener('click',()=>{document.body.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',document.body.classList.contains('menu-open')?'true':'false');});}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in-view');}),{threshold:.12});
document.querySelectorAll('.service-tile,.service-card,.section-intro-row,.statement-grid,.experience-grid,.conversion-grid').forEach(el=>observer.observe(el));
