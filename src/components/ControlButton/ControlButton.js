import React from 'react';

import './ControlButton.css';

function ControlButton({ label, click }) {
    return (
        <button className="control-button" type="button" onClick={click}>
            {label}
        </button>
    );
}

export default ControlButton;