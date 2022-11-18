import React, { useState } from 'react'

import { Modal } from '../index'
import { ComingSoon } from '../index'

import './Navigation.css'

const Navigation = () => {
    const [openComingSoogModal, setOpenComingSoonModal] = useState(false);

    return (
        <header className='navigation-container__main'>
            {openComingSoogModal && <Modal closeModal={setOpenComingSoonModal} title='Coming Soon' description=' ' body={<ComingSoon />} />}
            <div className='nagivation-logo'>

            </div>
            <div className='navigation-container__nav-main'>
                <h1>       </h1>
                <div className='navigation-links'>
                    <ul>
                        <li>
                            {/*<button onClick={() => { setOpenComingSoonModal(true) }}>Coming Soon</button> */}
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Navigation