import "../css/landing.css"
import { HashLink as Link } from 'react-router-hash-link';

function Landing() {
  return (
    <>   
      
      <div id="start" className="row align-items-end m-auto">
        <div className="col-12">
          <div className="ms-5 ">
            <h1>Zachary Thomas</h1>
            <hr className="w-50" />
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
      </div>
      <div id="chevron" className="d-flex justify-content-center align-items-end ">
        <Link to="/#about">
          <img src={"../img/chevron.svg"} alt="Chevron Down" />
        </Link>
      </div>
    </>

  )
}

export default Landing
