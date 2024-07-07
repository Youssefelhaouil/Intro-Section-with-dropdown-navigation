import React, { useState } from 'react';
import Header from './compenent/Header.jsx';
import Content from './compenent/Content.jsx'


export default function All() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className='grid gap-y-16 ' >
                <div>
                    <Header isOpen={isOpen} toggleMenu={toggleMenu} ></Header>


                </div>
                <div className=''>
                    <Content isOpen={isOpen}></Content>

                </div>
            </div>
        </>
    )



}
