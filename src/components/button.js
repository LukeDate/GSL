import React, { useState } from 'react';
import { StyledButton }from '../styles/styles';


const Button = ({handleClick, remove, children}) => {
    const [saved, setSaved] = useState(false);

    const handleClickEvent = () => {
        setSaved(true);
        return handleClick()
    }
    console.log('remove', remove);
    return (
        <StyledButton remove={remove} save={saved} onClick={() => handleClickEvent()}>
            {children}
        </StyledButton>
    )
}

export default Button;