import Link from 'next/link'
import React from 'react'

function SideContact() {
    return (

        <div className='hidden  px-5  flex-col fixed bottom-0 lg:flex left-0 2xl:left-32'>
            <Link
                className='hover-grow'
                href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=zacraytho@gmail.com&tf=1">
                <img className="h-10 w-10 mx-auto my-3" src='./img/contactStuff/email.svg' alt='stuff' />
            </Link>
            <Link
                className='hover-grow'
                href="https://github.com/ZacRayTho">
                <img className="h-10 w-10 mx-auto my-3" src='./img/contactStuff/github.svg' alt='stuff' />
            </Link>
            <Link
                className='hover-grow'
                href="">
                <img className="h-10 w-10 mx-auto my-3" src='./img/contactStuff/phone.svg' alt='stuff' />
            </Link>
            <Link
                className='hover-grow'
                href="https://www.linkedin.com/in/zachary-thomas-33b430264/">
                <img className="h-10 w-10 mx-auto my-3" src='./img/contactStuff/linkedin.svg' alt='stuff' />
            </Link>
        </div>

    )
}

export default SideContact