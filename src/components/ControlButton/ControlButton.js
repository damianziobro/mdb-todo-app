import React from 'react';

function ControlButton({ label, click }) {
    return (
        <button type="button" onClick={click}>
            {label}
        </button>
    );
}

export default ControlButton;