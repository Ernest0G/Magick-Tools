import React from 'react'


import './Modal.css'

const Modal = ({ closeModal, title, description, body }) => {
    return (
        <div className='modal-background' >
            <div className='modal-container'>
                <div className='modal-close__button'>
                    <button onClick={() => closeModal(false)}>X</button>
                </div>

                <div className='modal-title'>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                </div>
                <div className='modal-body'>
                    {body}
                </div>
                <div className='modal-footer'>

                </div>
            </div>
        </div>
    )
}

export default Modal;