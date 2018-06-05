import React from 'react';

import ControlButton from '../ControlButton/ControlButton';

import './ControlButtons.css';

function ControlButtons({ onAddBtnClick, onRemoveBtnClick, onClearBtnClick }) {
    return (
        <div className="control-buttons">
            <ControlButton label="Add" click={onAddBtnClick} />
            <ControlButton label="Remove" click={onRemoveBtnClick} />
            <ControlButton label="Clear" click={onClearBtnClick} />
        </div>
    );
}

export default ControlButtons;