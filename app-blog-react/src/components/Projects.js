function Projects() {
  return (
    <div className="d-flex justify-content-center">
      <div className="container-sm ">
        <div className="row">
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Weather app</h5>
              <div className="card-text ">
                <img
                  alt="weather app teaser"
                  className="border"
                  id="project-teaser"
                  src="./img/project-teasers/weather-app-teaser.png"
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#weatherapp"
                >
                  More info
                </button>
                <div
                  className="modal fade"
                  id="weatherapp"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="weatherapp">
                          Weather app
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        Our first time using axios and pulling data from an outside
                        source AKA an API. This is a rather simple app, simply
                        displaying the temp of whatever zip code you put in,or if
                        you allow it, can use your browsers geolocation to find your
                        zip out automatically. As an extra challenge, we had to
                        generate html elements using javascript.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <a href="https://zacraytho.github.io/weather-app/">
                          <button type="button" className="btn btn-primary">
                            Check it out!
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://zacraytho.github.io/weather-app/"
                className="btn btn-primary card-link"
              >
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Tic-Tac-Toe</h5>
              <div className="card-text ">
                <img
                alt="tic tac toe teaser"
                  className="border"
                  id="project-teaser"
                  src="./img/project-teasers/tic-tac-toe-teaser.png"
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#ticTacToe"
                >
                  More info
                </button>
                <div
                  className="modal fade"
                  id="ticTacToe"
                  tabIndex={-1}
                  aria-labelledby="ticTacToe"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="ticTacToe">
                          Tic-Tac-Toe
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        Our second big project, maybe not super advanced for a
                        human, but getting the human logic into code that the
                        computer will understand was the real challenge of this
                        project. It really made me stop and think and pseudocode
                        before hopping straight into coding, sadly I still had a
                        couple hiccups along the way because of bad logic on my
                        part.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <a href="https://zacraytho.github.io/tic-tac-toe/">
                          <button type="button" className="btn btn-primary">
                            Check it out!
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://zacraytho.github.io/tic-tac-toe/"
                className="btn btn-primary card-link"
              >
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">To-Do List</h5>
              <div className="card-text ">
                <img
                alt="to do list teaser"
                  className="border"
                  id="project-teaser"
                  src="./img/project-teasers/to-do-list-teaser.png"
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#toDoList"
                >
                  More info
                </button>
                <div
                  className="modal fade"
                  id="toDoList"
                  tabIndex={-1}
                  aria-labelledby="toDoList"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="toDoList">
                          To-Do List
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        Our first project after React's introduction, meant for us
                        to get use to it's form of state and the way it renders HTML
                        elements as components in Javascript. Definitely the hardest
                        project up to this point, but i'll probably say that every
                        coming week as we travel away from the VanillaJS which I had
                        experience with prior to the bootcamp.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <a href="https://zacraytho.github.io/To-do-list">
                          <button type="button" className="btn btn-primary">
                            Check it out!
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://zacraytho.github.io/To-do-list"
                className="btn btn-primary card-link"
              >
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">VanillaJS</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Technical Article</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">React Intro</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">CLI</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Halfway!</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Python</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Django 1</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Django 2</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Finish line</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Final Project 1</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
          <div
            className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">Final Project 2</h5>
              <p className="card-text">Coming Soon to a blog near you!</p>
              <a href="https://github.com/ZacRayTho" className="btn btn-primary card-link">
                Check it out!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
export default Projects
