'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);



/**
 * close navbar when click on any navbar links
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

// const closeNavbar = function () {
//   navbar.classList.remove("active");
//   overlay.classList.remove("active");
// }

// addEventOnElem(navLinks, "click", closeNavbar);

// Toggle dropdown for mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const mobileArrow = dropdown.querySelector('.mobile-arrow');
  
  mobileArrow.addEventListener('click', function (e) {
    e.preventDefault();

    // Close any open dropdown
    dropdowns.forEach(item => {
      if (item !== dropdown) {
        item.classList.remove('active');
      }
    });

    // Toggle current dropdown
    dropdown.classList.toggle('active');
  });
});



/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 20 ? header.classList.add("active")
    : header.classList.remove("active");
}

addEventOnElem(window, "scroll", headerActive);



/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);



