import React from 'react';
import Com2 from './Com2';
const Com1 = ({count}) => {
    return (
        <div>
            com1
            
            <Com2 count={count}/>
        </div>
    );
}

export default Com1;
