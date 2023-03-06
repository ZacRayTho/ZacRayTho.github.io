import ProjectCard from "./ProjectCard"

function Projects() {
  const content = [
    { title: "Weather app", id: "weatherapp", img: "./img/project-teasers/weather-app-teaser.png", imgAlt: "Teaser of Weather App", modal: "Our first time using axios and pulling data from an outside source AKA an API. This is a rather simple app, simply displaying the temp of whatever zip code you put in,or if you allow it, can use your browsers geolocation to find your zip out automatically. As an extra challenge, we had to generate html elements using javascript.", projectLink: "https://zacraytho.github.io/weather-app/", githubLink: "https://github.com/ZacRayTho/weather-app" },
    { title: "Tic-Tac-Toe", id: "tictactoe", img: "./img/project-teasers/tic-tac-toe-teaser.png", imgAlt: "Teaser of Tic Tac Toe", modal: "Our second big project, maybe not super advanced for a human, but getting the human logic into code that the computer will understand was the real challenge of this project. It really made me stop and think and pseudocode before hopping straight into coding, sadly I still had a couple hiccups along the way because of bad logic on my part.", projectLink: "https://zacraytho.github.io/tic-tac-toe/", githubLink: "https://github.com/ZacRayTho/tic-tac-toe" },
    { title: "To-Do List", id: "todolist", img: "./img/project-teasers/to-do-list-teaser.png", imgAlt: "Teaser of To Do List", modal: "Our first project after React's introduction, meant for us to get use to it's form of state and the way it renders HTML elements as components in Javascript. Definitely the hardest project up to this point, but i'll probably say that every coming week as we travel away from the VanillaJS which I had experience with prior to the bootcamp.", projectLink: "https://zacraytho.github.io/To-do-list/", githubLink: "https://github.com/ZacRayTho/To-do-list" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
    { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" }
  ]


  return (
    <div className="d-flex justify-content-center bg-transparent">
      <div className="container-sm ">
        <div className="row">

          {content.map((pro, index) => <ProjectCard
            title={content[index].title}
            id={content[index].id}
            img={content[index].img}
            modal={content[index].modal}
            projectLink={content[index].projectLink}
            githubLink={content[index].githubLink} />)}

        </div>
      </div>
    </div>

  )
}
export default Projects
