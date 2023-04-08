import { Navbar } from "flowbite-react";
function Nav() {

  return (
    <>
      <Navbar className="!bg-transparent fixed top-0 flex justify-end left-2/3"
        fluid={true}
        rounded={true}
      >
        <div className="flex justify-end" >
          {/* <Navbar.Brand >
            <img
              src="./img/zt-logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Zachary Thomas Logo"
            />
          </Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link className="text-white text-lg" href="/navbars">
              About
            </Navbar.Link>
            <Navbar.Link className="text-white text-lg" href="/navbars">
              Blog
            </Navbar.Link>
            <Navbar.Link className="text-white text-lg" href="/navbars">
              Projects
            </Navbar.Link>
            <Navbar.Link className="text-white text-lg" href="/navbars">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export default Nav;