




    window.addEventListener("load", () => {
          const loader = document.getElementById("loading");
          loader.style.opacity = "0";
          setTimeout(() => {
              loader.style.display = "none";
          }, 5000);
      });


//.........................nav

const sections = document.querySelectorAll('section'); // all sections
const navLinks = document.querySelectorAll('#navMenu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});



//.........................darkmode.........................

document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const image = document.getElementById('change-photo');

  //.........................Functions to toggle dark mode.........................
  const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    image.src = "./pictures/JohnMar.png";
  };

  const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    image.src = "./pictures/1.png";
  };

  //.........................Apply dark mode if previously active.........................
  if (localStorage.getItem('darkmode') === "active") enableDarkmode();

  //.........................Toggle on click.........................
  themeSwitch.addEventListener("click", () => {
    if (document.body.classList.contains('darkmode')) {
      disableDarkmode();
    } else {
      enableDarkmode();
    }
  });

  //.........................Hover effect — ONLY in light mode.........................
  image.addEventListener('mouseover', () => {
    if (!document.body.classList.contains('darkmode')) {
      image.src = "./pictures/2.png"; // hover only in light mode
    }
  });

  image.addEventListener('mouseout', () => {
    if (!document.body.classList.contains('darkmode')) {
      image.src = "./pictures/1.png"; // revert in light mode
    }
    // if darkmode, do nothing
  });
});


//.........................type writer.........................

  document.addEventListener("DOMContentLoaded", function() {
    const typedItems = document.querySelector(".hero-type").getAttribute("data-typed-items");
    new Typed(".hero-type", {
      strings: typedItems.split(","), // split by comma
      typeSpeed: 80,                 // typing speed in ms
      backSpeed: 20,                  // backspace speed
      backDelay: 1500,                // delay before backspacing
      loop: true                       // loop forever
    });
  });


  //.........................Portfolio.........................

 document.addEventListener('DOMContentLoaded', () => {
  const filterContainer = document.querySelector('.proj-links');
  const galleryItems = document.querySelectorAll('.gallery-proj .project-img');

  if (!filterContainer) return;

  filterContainer.addEventListener('click', (e) => {
    // find the clicked element that has data-name (your .item-link spans)
    const btn = e.target.closest('.item-link');
    if (!btn) return;

    // update active class
    const prev = filterContainer.querySelector('.menu-active');
    if (prev) prev.classList.remove('menu-active');
    btn.classList.add('menu-active');

    // get filter name (use lowercase for case-insensitive match)
    const filterName = (btn.getAttribute('data-name') || '').toLowerCase();

    // show/hide gallery items
    galleryItems.forEach(item => {
      const name = (item.getAttribute('data-name') || '').toLowerCase();
      if (filterName === 'all' || name === filterName) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

//.........................footer dynamic year.........................

const year = document.getElementById("year");
const today = new Date();

year.textContent = today.getFullYear();



//

const body = document.getElementsByTagName("main");




