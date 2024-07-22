// ModalContext.js
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext({
    isOpen: false,
    modalContent: null,
    openModal: () => {},
    closeModal: () => {},
    setModalContent: () => {},
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalContent, setModalContent }}>
            {children}
        </ModalContext.Provider>
    );
};
