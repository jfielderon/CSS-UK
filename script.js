const brandStyles = document.createElement('link');
brandStyles.rel = 'stylesheet';
brandStyles.href = 'brand.css';
document.head.appendChild(brandStyles);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: .12 });
document.querySelectorAll('.service-card,.section-head,.founder-grid,.review-grid').forEach(el => observer.observe(el));

// Keep the top of the site focused on selling CSS first. Conversion actions appear later in-page.
document.querySelectorAll('.site-header nav a').forEach(link => {
  const text = link.textContent.trim().toLowerCase();
  if (text === 'upload' || text === 'talk to css') link.remove();
});
document.querySelectorAll('.hero .hero-actions').forEach(actions => actions.remove());

// Keep navigation consistent across the static site while the CRM/backend is still separate.
document.querySelectorAll('.site-header nav a, footer a').forEach(link => {
  const text = link.textContent.trim().toLowerCase();
  if (text === 'what we do') link.setAttribute('href','what-we-do.html');
  if (text === 'about css') link.setAttribute('href','about.html');
  if (text === 'contact') link.setAttribute('href','contact.html');
});

const serviceRoutes = {
  'energy & utilities':'energy-utilities.html',
  'technology & payments':'technology-payments.html',
  'finance & currency':'finance-currency.html',
  'property & tax':'property-tax.html',
  'business operations':'business-operations.html'
};
document.querySelectorAll('.service-card').forEach(card => {
  const title = card.querySelector('h3')?.textContent.trim().toLowerCase();
  const target = serviceRoutes[title];
  const link = card.querySelector('a');
  if (target && link) link.setAttribute('href',target);
});
