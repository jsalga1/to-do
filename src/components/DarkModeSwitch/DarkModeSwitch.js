import React from 'react';
import Switch from 'react-switch';
import { FaMoon, FaSun } from 'react-icons/fa';
import './DarkModeSwitch.css';

const DarkModeSwitch = ({ checked, onChange }) => {
    return (
        <div style={{ position: 'absolute', top: '50px', right: '50px' }}>
        <Switch 
            onChange={onChange} 
            checked={checked} 
            offColor="#fba91d" 
            onColor="#353c51"
            checkedIcon={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <FaMoon color="white" />
            </div>
            }
            uncheckedIcon={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <FaSun color="white" />
            </div>
            }
        />
        </div>
    );
    };

export default DarkModeSwitch;