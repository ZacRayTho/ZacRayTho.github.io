import { Navbar } from "flowbite-react";
function Nav2({ page }) {

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
                <Navbar.Link className="text-white text-2xl" href="/#About">
                  Contact
                </Navbar.Link>
              </div>
              <div>
                <Navbar.Link className="text-white text-2xl" href="/#About">
                  About
                </Navbar.Link>
              </div>
              <div>
                <Navbar.Link className={page=="project" ? "text-white text-2xl opacity-50" : "text-white text-2xl"} href="/project/" disabled={ page=="project" ? true : false}>
                  Projects
                </Navbar.Link>
              </div>
              <div>
                <Navbar.Link className={page=="blog" ? "text-white text-2xl opacity-50" : "text-white text-2xl"} href="/blog/" disabled={ page=="blog" ? true : false}>
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

export default Nav2;