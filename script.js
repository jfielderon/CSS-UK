document.querySelectorAll('.brand').forEach(brand=>{
  brand.setAttribute('aria-label','Corporate Saving Solutions');
});

document.querySelectorAll('.footer-brand img').forEach(img=>img.remove());
const toggle=document.querySelector('.nav-toggle');
if(toggle){toggle.addEventListener('click',()=>{document.body.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',document.body.classList.contains('menu-open')?'true':'false');});}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in-view');}),{threshold:.12});
document.querySelectorAll('.service-tile,.service-card,.section-intro-row,.statement-grid,.experience-grid,.conversion-grid').forEach(el=>observer.observe(el));
