import { Navbar } from "flowbite-react";
function Nav() {

  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
      >

        <img className="h-10 w-10" src="./img/zt-logo.png" />

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/BlogTease">
            Blog
          </Navbar.Link>
          <Navbar.Link href="/Projects">
            Projects
          </Navbar.Link>
          <Navbar.Link href="/">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
}

export default Nav;