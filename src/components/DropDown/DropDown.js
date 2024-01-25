import React from 'react';
import { Dropdown } from 'react-bootstrap';

function DropDown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Seleccionar
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/diario">Diario</Dropdown.Item>
                <Dropdown.Item href="#/semanal">Semanal</Dropdown.Item>
                <Dropdown.Item href="#/mensual">Mensual</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDown;