const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1 });
 
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 
    
    function filterTools(cat) {
      
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-blue-500', 'text-white', 'border-blue-400');
        btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
      });
      const active = document.getElementById('tab-' + cat);
      active.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
      active.classList.add('bg-blue-500', 'text-white', 'border-blue-400');
 
      
      document.querySelectorAll('#tools-grid a').forEach(card => {
        const match = cat === 'all' || card.dataset.cat === cat;
        card.style.display = match ? '' : 'none';
      });
    }