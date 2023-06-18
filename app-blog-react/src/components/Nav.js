import { Navbar } from "flowbite-react";
function Nav() {

  return (
    <>
      <Navbar className="!bg-transparent flex fixed top-0 lg:inset-x-0"
        fluid={true}
        rounded={true}
      >
        <div className="" >
          {/* <Navbar.Brand >
            <img
              src="./img/zt-logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Zachary Thomas Logo"
            />
          </Navbar.Brand> */}
          <Navbar.Toggle/>
          <Navbar.Collapse >
            <div className="bg-navy border-2 border-gold rounded-lg md:flex">
              <div>
                <a className="text-white text-2xl lg:hidden mx-auto px-3" href="#About">
                  Contact
                </a>
              </div>
              <div>
                <a className="text-white text-2xl mx-auto px-3" href="#About">
                  About
                </a>
              </div>
              <div>
                <a className="text-white text-2xl mx-auto px-3" href="#Projects">
                  Projects
                </a>
              </div>
              <div>
                <a className="text-white text-2xl mx-auto px-3" href="#Blogs">
                  Blog
                </a>
              </div>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export default Nav;