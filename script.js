// for nav bar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle('active');
    

}
menuIcon.classList.remove("bx-x");
navbar.classList.remove('active');
   
// typing effect
var typed = new Typed(".typing-text", {
    strings: ["Frontend Development", "Web Designing", "Web Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});


//skills
async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("projects.json")
    const data = await response.json();
    return data;
}
function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}
fetchData().then(data => {
    showSkills(data);
});

/* ----------------------------- */
// scroll
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 250 
    });

    ScrollReveal().reveal('.home-content, .heading', { origin:"top" });


/* ----------------------------- */    
    // fetch projects start
    function getProjects() {
        return fetch("projects.json")
            .then(response => response.json())
            .then(data => {
                return data
            });
    }
    function showProjects(projects) {
        let projectsContainer = document.querySelector(".work .box-container");
        let projectsHTML = "";
        projects.forEach(project => {
            projectsHTML += `
            <div class="box tilt" style="width: 100%; margin: 1rem">
          <img draggable="false" src="/images/${project.image}.png" alt="project" />
          <div class="content">
            <div class="tag">
            <h3>${project.name}</h3>
            </div>
            <div class="desc">
              <p>${project.desc}</p>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>  
              </div>
            </div>
          </div>
        </div>
        </div>`
        });
        projectsContainer.innerHTML = projectsHTML;
    
    
    
        // isotope filter products
        var $grid = $('.box-container').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            masonry: {
                columnWidth: 200
            }
        });
    
        // filter items on button click
        $('.button-group').on('click', 'button', function () {
            $('.button-group').find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    }
    
    getProjects().then(data => {
        showProjects(data);
    })
    // fetch projects end