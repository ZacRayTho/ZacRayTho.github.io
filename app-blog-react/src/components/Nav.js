import { Navbar } from "flowbite-react";
function Nav() {

  return (
    <>
      <Navbar className="!bg-transparent"
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
          <Navbar.Link
            href="/navbars"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Nav;