document.addEventListener('DOMContentLoaded', function () {
   const menuBtn = document.getElementById('menu-btn');
   const closeBtn = document.getElementById('close-btn');
   const mobileMenu = document.getElementById('mobile-menu');
   const menuOverlay = document.getElementById('menu-overlay');
   const menuContent = mobileMenu.querySelector('div > div');

   menuBtn.addEventListener('click', function () {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
         menuContent.classList.remove('translate-x-full');
      }, 10);
   });

   closeBtn.addEventListener('click', closeMenu);
   menuOverlay.addEventListener('click', closeMenu);

   function closeMenu() {
      menuContent.classList.add('translate-x-full');
      setTimeout(() => {
         mobileMenu.classList.add('hidden');
      }, 300);
   }
});