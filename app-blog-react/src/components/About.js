import Contact from "./Contact"


function About() {
    
    return (
        <div id="about">
  <div className="row " style={{ paddingTop: "2vh", margin: 0 }}>
    <div className="col text-center align-items-center d-flex  "><Contact /></div>
    <div className="zig col-lg-8 col-12 d-flex justify-content-center align-items-center h-auto">
      <div className="text-center">
        <h2>About Me</h2>
        <p>
          Hey! I'm Zach, and this is my wonderful blog.
          <br />
          I've always had a passion for learning and after searching for a
          career that I know I wouldn't get tired of after a few years,
          <br />
          I decided on Web Developer. <br />
          This has been an amazing decision for me and the satisfaction i get
          from creating something from nothing and solving the problems that
          come along is worth the career change alone , not to mention the never
          ending journey of learning.
          <br />
          In my free time I enjoy:
        </p>
        <ul>
          <li>Fixing up old vehicles</li>
          <li>Playing video games</li>
          <li>playing with my dog</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="row" style={{ paddingTop: "2vh", margin: 0, paddingBottom: "2vh" }}>
    <div className="zag col-lg-8 col-12 d-flex justify-content-center align-items-center h-auto">
      <div className="text-center">
        <h2>Toolbelt</h2>
        <p> I'm currently proficient with:</p>
        <dl>
          <dt>HTML</dt>
          <dl>The Skeleton of a webpage</dl>
          <dt>CSS</dt>
          <dl>The Makeup of the Skeleton</dl>
          <dt>Javascript</dt>
          <dl>The Brains of the Skeleton</dl>
          <dt>React</dt>
          <dl>A Javascript Library for building user interfaces</dl>
        </dl>
      </div>
    </div>
    <div className="d-flex col justify-content-center align-items-center"><img className="h-50" src="./img/zt-logo.png" alt="ZT Logo" /></div>
  </div>
</div>

    )
}

export default About