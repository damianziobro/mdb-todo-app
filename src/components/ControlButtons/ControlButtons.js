import React from 'react';

import ControlButton from '../ControlButton/ControlButton';

function ControlButtons({ onAddBtnClick, onRemoveBtnClick, onClearBtnClick }) {
    return (
        <div>
            <ControlButton label="Add" click={onAddBtnClick} />
            <ControlButton label="Remove" click={onRemoveBtnClick} />
            <ControlButton label="Clear" click={onClearBtnClick} />
        </div>
    );
}

export default ControlButtons;