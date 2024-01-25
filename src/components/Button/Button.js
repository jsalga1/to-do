// Button.js
import React from "react";
import './Button.css';

const Button = ({ handleClick, children, className }) => {
    return <button onClick={handleClick} className={className}>{children}</button>;
};

export default Button;