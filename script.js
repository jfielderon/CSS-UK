const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: .12 });
document.querySelectorAll('.service-card,.section-head,.founder-grid,.review-grid').forEach(el => observer.observe(el));
