/**
 * creating sections dynamically
 * by using createSection function and add them to the main tag
 * ES6
 */
// counter to specify attributes and number of section
let counter = 0;
const createSection = () => {
  counter++;
  const content = `<section id="section${counter}" data-nav="Section ${counter}">
    <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
};
/**
 * make list items equal to the number of sections by iterate on them
 * but I need to remove all items to avoid the duplicating
 */
const navBar = document.getElementById("navbar__list");
const createNavItems = () => {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};

///////// using Element.getBoundingClientRect() instead of Intersection Observer API ///////////////////
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -300 && active.getBoundingClientRect().top <= 180){

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}

navBar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 300);
  }
});

/**
 * create four-section dynamically by javascript instead of HTML
 * create them links
 * ability to observe sections
 */
for (let i = 1; i < 5; i++) createSection();
createNavItems();
// observingSections();

// creating more sections by click on the button
document.getElementById("btn").addEventListener("click", () => {
  createSection();
  createNavItems();
  // observingSections();
});
// save the icon used to go to the top and the header in variables
const toTop = document.getElementById("to-top");
const header = document.querySelector(".page__header");

// Clicking on the icon the document will scroll to the top smoothly
toTop.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});
/**
 * disappear the header after 8 seconds and appear again when scrolling.
 * appearing the icon(to-top) after 600px to down
 */
let isScrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(isScrolling)
   isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 5000);

  window.scrollY > 600
    ? (toTop.style.display = "block")
    : (toTop.style.display = "none");
};




