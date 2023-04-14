import React from 'react'

function StackCard({ stack }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 lg:mt-0 bg-mediumnavy lg:mx-3 mx-auto">
            <div className="px-6 py-4 min-h-[61%]">
                <div className="font-bold text-xl mb-2">{stack.title}</div>
                <p className="">
                    {stack.text}
                </p>
            </div>
            <div className="px-6 pt-10 space-x-3 items-center justify-center flex">
                <img src={stack.iconOne} alt={stack.iconOneText} title={stack.iconOneText} className="h-20" />
                <img src={stack.iconTwo} alt={stack.iconTwoText} title={stack.iconTwoText} className="h-20" />
                <img src={stack.iconThree} alt={stack.iconThreeText} title={stack.iconThreeText} className="h-20" />
            </div>
        </div>
    )
}

export default StackCard