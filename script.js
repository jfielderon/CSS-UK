const cssLogo='https://raw.githubusercontent.com/jfielderon/CSS-UK/main/public/css-logo.png';
document.querySelectorAll('.brand img').forEach(img=>{img.src=cssLogo;img.alt='Corporate Saving Solutions';});
document.querySelectorAll('.footer-brand img').forEach(img=>img.remove());
const toggle=document.querySelector('.nav-toggle');
if(toggle){toggle.addEventListener('click',()=>{document.body.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',document.body.classList.contains('menu-open')?'true':'false');});}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in-view');}),{threshold:.12});
document.querySelectorAll('.service-tile,.service-card,.section-intro-row,.statement-grid,.image-story-copy,.conversion-grid').forEach(el=>observer.observe(el));