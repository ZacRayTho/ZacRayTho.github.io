import { Navbar } from "flowbite-react";
function Nav() {

  return (
    <>
      <Navbar className="!bg-transparent sticky top-0 !z-10 lg:max-w-7xl mx-auto"
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand >
          <img
            src="./img/zt-logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Zachary Thomas Logo"
          />
        </Navbar.Brand>
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
      </Navbar>
    </>
  )
}

export default Nav;