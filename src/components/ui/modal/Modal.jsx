

import React from "react";
import classes from './Modal.module.css';


const Modal = ({ children, visible, SetVisible, color }) => {
   // Modal.defaultStyles = {} // Flushes all of react-modal's styles
    const rootClasses = [classes.modal];

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>SetVisible(false)}>
            <div className={classes.modalContent} style={{backgroundColor:color}} onClick={event=>event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;