"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 9279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Contact.js

function Contact() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: " pt-1 bg-mediumnavy border-8  border-[#D4AF37] h-full lg:w-1/5 lg:rounded-r-xl",
        id: "contact",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "../img/Melol.jpg ",
                                className: "rounded-full w-32 max-h-fit h-50 mx-auto",
                                alt: "..."
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-lg font-medium",
                                    children: "Zachary Thomas"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "",
                                    children: "Full Stack Web Developer"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-2 w-36 mx-auto",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://mail.google.com/mail/u/1/?view=cm&fs=1&to=zacraytho@gmail.com&tf=1",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "hover-grow h-10 w-10 mb-4",
                                                    src: "../img/contactStuff/email.svg",
                                                    alt: "Email Icon"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://github.com/ZacRayTho",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "hover-grow h-10 w-10 mb-4",
                                                    src: "../img/contactStuff/github.svg",
                                                    alt: "Github Logo"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:8593190903",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "hover-grow h-10 w-10",
                                                    src: "../img/contactStuff/phone.svg",
                                                    alt: "Phone Icon"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.linkedin.com/in/zachary-thomas-33b430264/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "hover-grow h-10 w-10",
                                                    src: "../img/contactStuff/linkedin.svg",
                                                    alt: "LinkedIn Logo"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const components_Contact = (Contact);

// EXTERNAL MODULE: ./src/components/ProjectCard.js
var ProjectCard = __webpack_require__(3077);
// EXTERNAL MODULE: ./src/components/BlogTeaseCard.js
var BlogTeaseCard = __webpack_require__(8213);
;// CONCATENATED MODULE: ./src/components/StackCard.js


function StackCard({ stack  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-sm rounded overflow-hidden shadow-lg mt-5 lg:mt-0 bg-mediumnavy lg:mx-3 mx-auto",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-6 py-4 min-h-[61%]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "font-bold text-xl mb-2",
                        children: stack.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "",
                        children: stack.text
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-6 pt-10 space-x-3 items-center justify-center flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: stack.iconOne,
                        alt: stack.iconOneText,
                        title: stack.iconOneText,
                        className: "h-20"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: stack.iconTwo,
                        alt: stack.iconTwoText,
                        title: stack.iconTwoText,
                        className: "h-20"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: stack.iconThree,
                        alt: stack.iconThreeText,
                        title: stack.iconThreeText,
                        className: "h-20"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_StackCard = (StackCard);

// EXTERNAL MODULE: ./src/components/Data.js
var Data = __webpack_require__(5187);
// EXTERNAL MODULE: ./src/components/Modal.js
var Modal = __webpack_require__(9301);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/About.js









function About() {
    const projectFold = (0,external_react_.useRef)(null);
    const projectBtn = (0,external_react_.useRef)(null);
    const blogFold = (0,external_react_.useRef)(null);
    const blogBtn = (0,external_react_.useRef)(null);
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const [modalData, setModalData] = (0,external_react_.useState)(null);
    function ProjectShow() {
        console.log(projectBtn.current.innerHTML);
        let hidden = projectFold.current.className;
        if (hidden == "hidden") {
            projectFold.current.className = "";
            projectBtn.current.innerHTML = "Less";
        } else {
            projectFold.current.className = "hidden";
            projectBtn.current.innerHTML = "More";
        }
    }
    function BlogShow() {
        console.log(blogBtn.current.innerHTML);
        let hidden = blogFold.current.className;
        if (hidden == "hidden") {
            blogFold.current.className = "";
            blogBtn.current.innerHTML = "Less";
        } else {
            blogFold.current.className = "hidden";
            blogBtn.current.innerHTML = "More";
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "About",
        className: "bg-gradient-to-b from-navy to-lightnavy p-5 flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-7xl mx-auto lg:h-[22rem] items-stretch lg:flex",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-gradient-to-b  from-transparent to-gold lg:bg-gradient-to-r lg:w-[81%] min-h-full text-center ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "",
                                children: "About Me"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "",
                                children: [
                                    "Hey! You stumbled onto my wonderful portfolio, have a great stay!",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "I have always loved learning and problem solving but I wasn't sure if software development was right for me. I decided to give it a try and I'm glad I did! I enjoy working with code and I'm always learning new things.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "One reason why I wasn't sure if software development was for me was because I enjoy working with my hands. But, after working on several projects through the bootcamp and learning Javascript, Python, and several libraries/frameworks for both, I'm hooked!",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "In my free time I enjoy:"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Fixing up old vehicles"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Get together's with friends and family"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Playing Video games (badly) "
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Contact, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-gradient-to-b  from-transparent to-gold lg:bg-gradient-to-l lg:rounded-l-xl max-w-7xl mx-auto lg:h-[24rem] mt-5 text-center pb-3 items-stretch",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "My Current Stack"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "lg:flex",
                        children: Data/* stacks.map */.Ux.map((stack)=>/*#__PURE__*/ jsx_runtime_.jsx(components_StackCard, {
                                stack: stack
                            }))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-center",
                id: "Projects",
                children: "Projects"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid lg:grid-cols-3 max-w-7xl mx-auto mt-5",
                children: Data/* projects.slice */.q.slice(0, 3).map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(ProjectCard/* default */.Z, {
                        project: project,
                        setShowModal: setShowModal,
                        showModal: showModal,
                        setModalData: setModalData
                    }))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden",
                ref: projectFold,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid lg:grid-cols-3 max-w-7xl mx-auto ",
                        children: Data/* projects.slice */.q.slice(3, 6).map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(ProjectCard/* default */.Z, {
                                project: project,
                                setShowModal: setShowModal,
                                showModal: showModal,
                                setModalData: setModalData
                            }))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/project/",
                        className: "py-2 px-4 bg-white border-2 border-gold text-black rounded-lg mx-auto flex w-fit mb-3 font-bold text-xl",
                        children: "Check out all my awesome projects!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-7xl w-full flex mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/project/",
                        className: " lg:hidden w-full text-lg font-bold border-t rounded-t-lg text-center",
                        children: "All Projects"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "hidden lg:inline w-full text-lg font-bold border-t rounded-t-lg text-center",
                        onClick: ProjectShow,
                        ref: projectBtn,
                        children: "More"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                id: "Blogs",
                className: "text-center",
                children: "Blogs"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid lg:grid-cols-3 max-w-7xl mx-auto mt-5",
                children: Data/* blogs.slice */.ZF.slice(0, 3).map((blog)=>/*#__PURE__*/ jsx_runtime_.jsx(BlogTeaseCard/* default */.Z, {
                        blog: blog
                    }))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden",
                ref: blogFold,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid lg:grid-cols-3 max-w-7xl mx-auto ",
                        children: Data/* blogs.slice */.ZF.slice(3, 6).map((blog)=>/*#__PURE__*/ jsx_runtime_.jsx(BlogTeaseCard/* default */.Z, {
                                blog: blog
                            }))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/blog",
                        className: "py-2 px-4 bg-white border-2 border-gold text-black rounded-lg mx-auto flex w-fit mb-3 font-bold text-xl",
                        children: "Check out all my awesome blogs!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-7xl w-full flex mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/blog",
                        className: " lg:hidden w-full text-lg font-bold border-t rounded-t-lg text-center",
                        children: "All Blogs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "hidden lg:inline w-full text-lg font-bold border-t rounded-t-lg text-center",
                        onClick: BlogShow,
                        ref: blogBtn,
                        children: "More"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
                isVisible: showModal,
                setShowModal: setShowModal,
                modalData: modalData
            })
        ]
    });
}
/* harmony default export */ const components_About = (About);


/***/ })

};
;