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