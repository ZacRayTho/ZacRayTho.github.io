import { Navbar } from "flowbite-react";
function Nav() {

  return (
    <>
      <Navbar className="!bg-transparent fixed top-0 flex lg:inset-x-0"
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
          <Navbar.Toggle />
          <Navbar.Collapse >
            <div className="flex space-x-11">
              <div>
                <Navbar.Link className="text-white text-2xl lg:hidden" href="#About">
                  Contact
                </Navbar.Link>
              </div>
              <div>
                <Navbar.Link className="text-white text-2xl" href="#About">
                  About
                </Navbar.Link>
              </div>
              <div>
                <Navbar.Link className="text-white text-2xl" href="#Projects">
                  Projects
                </Navbar.Link>
              </div>
              <div>
                <Navbar.Link className="text-white text-2xl" href="#Blogs">
                  Blog
                </Navbar.Link>
              </div>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export default Nav;