const menuToggle  =document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const navLinks = document.querySelectorAll(".nav-link");
menuToggle.addEventListener("click", () =>{
    const isOpen = navigation.classList.toggle("open");

    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", "isOpen");

});
navLinks.forEach((link) =>{
    link.addEventListener("click", ()=>{
        navigation.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");


    });
});
const projectCards = document.querySelectorAll(".project-card");
const projectModal= document.getElementById("ProjectModal");
const modalClose= document.getElementById("modalClose");
const modalBackdrop= document.getElementById("modalBackdrop");
const modalTitle= document.getElementById("modalTitle");
const modalCategory= document.getElementById("modalCategory");
const modalRole= document.getElementById("modalRole");
const modalYear= document.getElementById("modalYear");
let lastFocusedElement  =null;
function openProject(card){
    lastFocusedElement=document.activeElement;
    modalTitle.textContent = card.dataset.title;
    modalCategory.textContent=card.datasset.category;
    modalDescription./textContent=card.dataset.description;
    modalRole.textContent=card.dataset.role;
    modalYear.textContent=card.dataset.Year;
    
    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
    
    document.body.style.overflow= "hidden";
    modalClose.focus();
}

function closeProject(){
    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow="";
    if (lastFocusedElement){
        lastFocusedElement.focus();
    }
}

 projectCards.forEach((card) = > {
        const button = card.querySelector(".project-open");
        button.addEventListener("click", () =>{
            openProject(card);
        });
    });
modalClose.addEventListener("click", closeProject);
modalBackdrop.addEventListener("click", closeProject);
document.addEventListener("keydown", (event) =>{
    if (event.key=== "Escape" && projectModal.classList.contains("open")){
        closeProject();
    }
});

const revealElement= document.querySelectorAll(".section-heading, .subsection-heading, .project-card, .illustration-card, .about-layout, .contact-section >p "
revealElement.forEach(element) => {
    element.classList.add("reveal");
});
const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);

        }
    });

},{
    threshold: 0.12
});
revealElement.forEach((element) => {
    revealObserver.observe(element);
})_;

const sections = document.querySelectorAll("mainsection[id]");
const sectionObserver=new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            const currentId= entry.target.id;
            navLinks.forEach((link) =>{
                const isActive = link.getAttribute("href")=== `#${currentId}`;
                link.classList.toggle("active", isActive);
            });
        }
    });
}, {
    rootMargin: "-35% 0px -55% 0px"
});
sections.forEach((section)=>{
    sectionObserver.observe(section);
});

console.log("Portfolio is running")