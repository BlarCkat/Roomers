'use client';

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose?: ()=> void;
    onSubmit?: ()=> void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: ()=> void;
    secondaryLabel?: ()=> void;
}

const Modal:React.FC<ModalProps> = ({isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled, secondaryAction, secondaryLabel,}) => {
    
    const [showModal, setShowModal] = useState(isOpen);

    const handleClose = useCallback(()=> {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose;
        }, 300);

    }, [disabled, onClose])


    const handleSubmit = useCallback(()=>{
        if (disabled) {
            return;
        }
        onSubmit;
    },[disabled, onSubmit])

    const handleSecondaryAction = useCallback(()=> {
        if (disabled && !secondaryAction) {
            return;
        }

        secondaryAction;
    },[disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }

    useEffect(()=> {
        setShowModal(isOpen); 
    },[isOpen])

    return ( 
        <>

        </>
     );
}
 
export default Modal;