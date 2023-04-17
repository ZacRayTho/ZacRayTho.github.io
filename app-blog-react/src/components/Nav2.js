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
            <div className="bg-navy border-2 border-gold rounded-lg md:flex">
              <div>
                <a className="text-white text-2xl mx-auto px-3" href="/#About">
                  Contact
                </a>
              </div>
              <div>
                <a className="text-white text-2xl mx-auto px-3" href="/#About">
                  About
                </a>
              </div>
              <div>
                <a className={page=="project" ? "text-white text-2xl opacity-50 mx-auto px-3" : "text-white text-2xl mx-auto px-3"} href="/project/" disabled={ page=="project" ? true : false}>
                  Projects
                </a>
              </div>
              <div>
                <a className={page=="blog" ? "text-white text-2xl opacity-50 mx-auto px-3" : "text-white text-2xl mx-auto px-3"} href="/blog/" disabled={ page=="blog" ? true : false}>
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

export default Nav2;