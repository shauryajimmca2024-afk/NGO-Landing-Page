const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 15));

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.target);
    const duration = 1100;
    const started = performance.now();
    const tick = now => {
      const progress = Math.min((now - started) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    obs.unobserve(el);
  });
}, { threshold: .5 });
document.querySelectorAll('.counter').forEach(counter => observer.observe(counter));

document.querySelectorAll('.donation').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.donation.active').classList.remove('active');
  button.classList.add('active');
}));

const toast = document.getElementById('toastMessage');
document.getElementById('giveButton').addEventListener('click', () => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3600);
});

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
  link.classList.add('active');
}));
