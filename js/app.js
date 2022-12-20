/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const Ul = document.querySelector('ul');
const fragment = document.createDocumentFragment();
const goTop = document.getElementById('topScroll');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//bulid the navbar
sections.forEach(section => {
//Extract the data-nav value from the section and store it in variable
    const navData = section.getAttribute("data-nav");
//Extract IdAttribute value from the section and store it in variable
    const IdAttribute = section.getAttribute('id');
//create new li
    const newli = document.createElement("li");
//create new link
    const links = document.createElement("a");
// add navbar style   
    links.classList.add("menu__link");
// get the href from the sections id
    links.setAttribute('href',IdAttribute);
// scroll between the sections 
// Scroll to section on link click
    links.addEventListener('click', e => {
        e.preventDefault();
        section.scrollIntoView({behavior : "smooth"})
    });
// add the name of sections from the data-nav
    const text = document.createTextNode(navData);

    links.appendChild(text);
    newli.appendChild(links);
    fragment.appendChild(newli);
    });
//append in fragment to make performance improvements  
    Ul.appendChild(fragment);

        window.addEventListener('scroll',()=>{

//  For Chek What Is Section On Screen Now and remove the active class
        const activesec = document.getElementsByClassName('your-active-class')[0];

        if(activesec !== undefined){
            activesec.classList.remove('your-active-class')
        }
//  For Chek What Is Section On Screen Now and remove the nav-class from the nav-bar
        const ActiveNav = document.getElementsByClassName('navactive')[0];

        if(ActiveNav !== undefined){
            ActiveNav.classList.remove('navactive')
        }

// Set sections as active
        sections.forEach(section => {

        const react = section.getBoundingClientRect();

        if(react.top >=-50 && react.top<394){
                               
                section.classList.add('your-active-class');
// Set nav-bar as active
                
         const listactive = document.querySelectorAll(`a[href='${section.id}']`)[0].parentElement;

         listactive.classList.add("navactive");
                
// Go To Top g
        if (section.id == "section1"){   
                   
             goTop.style.display = 'none';
        }else {

             goTop.style.display ='block';
           }
        }
    })
})
    

 