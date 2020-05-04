/**
 * Created by southpaw on 9/12/19.
 */
import React from 'react';
import peacock from '../peacock.gif';

const SideColumn = () => {
    return(
        <aside>
            <h1>Aside Title</h1>
            <p>A webgl or three js thing will go here</p>
            <img src={peacock} alt="Peacock"/>
        </aside>
    )
}

export default SideColumn;