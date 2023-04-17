import ProjectCard from "../../components/ProjectCard"
import { projects } from "../../components/Data"
import Modal from "../../components/Modal"
import { useState } from "react"
import Nav2 from "../../components/Nav2"

function Projects() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)
  // const content = [
  //   { title: "Weather app", id: "weatherapp", img: "./img/project-teasers/weather-app-teaser.png", imgAlt: "Teaser of Weather App", modal: "Our first time using axios and pulling data from an outside source AKA an API. This is a rather simple app, simply displaying the temp of whatever zip code you put in,or if you allow it, can use your browsers geolocation to find your zip out automatically. As an extra challenge, we had to generate html elements using javascript.", projectLink: "https://zacraytho.github.io/weather-app/", githubLink: "https://github.com/ZacRayTho/weather-app" },
  //   { title: "Tic-Tac-Toe", id: "tictactoe", img: "./img/project-teasers/tic-tac-toe-teaser.png", imgAlt: "Teaser of Tic Tac Toe", modal: "Our second big project, maybe not super advanced for a human, but getting the human logic into code that the computer will understand was the real challenge of this project. It really made me stop and think and pseudocode before hopping straight into coding, sadly I still had a couple hiccups along the way because of bad logic on my part.", projectLink: "https://zacraytho.github.io/tic-tac-toe/", githubLink: "https://github.com/ZacRayTho/tic-tac-toe" },
  //   { title: "To-Do List", id: "todolist", img: "./img/project-teasers/to-do-list-teaser.png", imgAlt: "Teaser of To Do List", modal: "Our first project after React's introduction, meant for us to get use to it's form of state and the way it renders HTML elements as components in Javascript. Definitely the hardest project up to this point, but i'll probably say that every coming week as we travel away from the VanillaJS which I had experience with prior to the bootcamp.", projectLink: "https://zacraytho.github.io/To-do-list/", githubLink: "https://github.com/ZacRayTho/To-do-list" },
  //   { title: "Restaurant Menu", id: "restaurant", img: "./img/project-teasers/restaurant-teaser.png", imgAlt: "Teaser of Restaurant Menu", modal: "Our Second project with React, this time we were tasked with pulling info from an API and displaying it with React components. This was a more open ended project, and definitely was harder to start because of that but after looking at a few real restaurant website I had my target in site. I really tried to replicate a functioning restaurant frontend.", projectLink: "https://zacraytho.github.io/react-restaurants/#/", githubLink: "https://github.com/ZacRayTho/react-restaurants" },
  //   { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
  //   { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
  //   { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
  //   { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
  //   { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
  //   { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
  //   { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
  //   { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
  //   { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" },
  //   { title: "Coming soon", id: "Coming soon", img: "Coming soon", imgAlt: "Coming soon", modal: "Coming soon", projectLink: "Coming soon", githubLink: "Coming soon" }
  // ]


  return (
    <div className="flex mx-auto justify-center">
      <Nav2 page="project"/>
      <div className="grid lg:grid-cols-3 max-w-7xl mt-14 w-3/4">
        {
          projects.map((project) =>
            <ProjectCard project={project} setShowModal={setShowModal} showModal={showModal} setModalData={setModalData} />
          )
        }
      </div>
      <Modal isVisible={showModal} setShowModal={setShowModal} modalData={modalData} />
    </div>

  )
}
export default Projects
