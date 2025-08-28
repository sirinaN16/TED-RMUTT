<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
  });
  // Sticky Navbar
  const navbar = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Back to Top
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "flex" : "none";
  });
  btn.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:'smooth'});
  });

</script>
