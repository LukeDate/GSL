import React, { useState } from 'react';
import { StyledButton }from '../styles/styles';
import PropTypes from 'prop-types';

const Button = ({handleClick, remove, children}) => {
    const [saved, setSaved] = useState(false);

    const handleClickEvent = () => {
        setSaved(true);
        return handleClick()
    }
    return (
        <StyledButton remove={remove} save={saved} onClick={() => handleClickEvent()}>
            {children}
        </StyledButton>
    )
}

//typing check which helps with debugging
Button.propTypes = {
    handleClick: PropTypes.func,
    remove: PropTypes.bool,
    children: PropTypes.string
}

export default Button;