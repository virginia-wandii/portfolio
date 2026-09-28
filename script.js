 //store skills in a simple array of strings
const skills = [
    "HTML & CSS",
    "JavaScript" ,
    "git",
    "Git hub"
];
// store projects as an array of object
const projects = [
    {
        title: "html-travel-blog-lab",
        description: "A fully travel experience in national park created using HTML.",
        githubUrl: "https://github.com/virginia-wandii/html-travel-blog-lab"
    },
    {
      title:"Wig-installation website" ,
      description:"A Wig-installation website created using HTML and CSS.",
      githubUrl: "https://github.com/virginia-wandii/wig---installation"
    },  
     {
      title:"portfolio website",
      description:"This portfolio website built using HTML, CSS, and Javascript to show case my work.", 
      githubUrl:"https://github.com/virginia-wandii/portfolio.git" 
    },
];
// render skills onto the page
function renderSkills() {
const skillsContainer = document.getElementById('skills-container');
if (!skillsContainer) return;
skillsContainer.innerHTML ="";
skills.forEach((skillName) => {
    const skillCard =document.createElement('div');
    skillCard.className ='card skill-card';
    //generates the layout cards
    skillCard.innerHTML = `<h3>${skillName}</h3>`;
    //Append to the section grid
    skillsContainer.appendChild(skillCard);
});
}
//projects rendering function
function renderProjects() {
const projectContainer = document.getElementById('projects-container');
if (!projectContainer) return;
projectContainer.innerHTML ='';

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'card project-card';

projectCard.innerHTML =`
<h3>${project.title}</h3>
<p>${project.description}</p>
<a href="${project.githubUrl}" target="_blank" class="btn btn-solid" style="text-decoration:none;displa:inline-block;margin-top: 10px;">
<button class="btn-primary" >View on GitHub</button>
</a>
`;
projectContainer.appendChild(projectCard);
});
}
//wait for the webpage layout to load
document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderProjects();
});