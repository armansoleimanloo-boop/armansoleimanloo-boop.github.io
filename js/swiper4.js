document.addEventListener('DOMContentLoaded', function() {
  function initDropdowns() {
    // موبایل و تبلت
    if (window.innerWidth < 992) {
      document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
          e.preventDefault();
          const parent = this.parentElement;

          // بستن سایر زیرمنوها
          document.querySelectorAll('.nav-item.dropdown').forEach(item => {
            if(item !== parent) item.classList.remove('show');
          });

          parent.classList.toggle('show');
        });
      });
    } else {
      // دسکتاپ: hover فعال، کلاس show حذف شود
      document.querySelectorAll('.nav-item.dropdown').forEach(item => {
        item.classList.remove('show');
      });
    }
  }

  initDropdowns();
  window.addEventListener('resize', initDropdowns);
});
