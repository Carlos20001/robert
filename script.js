const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');
const toTop = document.querySelector(".to-top");

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

