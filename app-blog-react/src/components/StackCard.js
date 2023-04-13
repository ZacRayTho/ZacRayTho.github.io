import React from 'react'

function StackCard() {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-mediumnavy lg:mx-3 mx-auto">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Front End</div>
                    <p className="">
                        The client side of the website, what the is greeted by and interacts with.
                        The combination of the graphic design and user interface.
                    </p>
                </div>
                <div className="px-6 pt-16 space-x-3 items-center justify-center flex">
                    <img src="./img/icons/javascript.svg" alt="Javascript" title="Javascript" className="h-20 " />
                    <img src="./img/icons/react.svg" alt="React" title="React" className="h-20 " />
                    <img src="./img/icons/bootstrap.svg" alt="Bootstrap" title="Bootstrap" className="h-20 " />
                </div>
            </div>
        </div>
    )
}

export default StackCard