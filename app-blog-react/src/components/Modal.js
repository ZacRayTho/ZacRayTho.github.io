import React from 'react'

function Modal({isVisible, setShowModal, children, project }) {
    if ( !isVisible ) return null;

    function handleClose(e) {
        if (e.target.id == 'wrapper') {
            setShowModal(false)
        }
    }

  return (
    <div 
    className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
    onClick={handleClose}
    id='wrapper'
    >
        <div className='w-[600px] flex flex-col'>
            <button 
            className='text-white text-xl place-self-end'
            onClick={() => setShowModal(false)}
            >
                X
            </button>
            <div className='bg-white p-2 rounded text-black'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal