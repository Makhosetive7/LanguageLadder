import React, { createContext, useContext, useState } from 'react';

const modalContext = createContext({
    isOpen: false,
    openModal: () => { },
    closeModal: () => { },
})

export const useModal = () => useContext(modalContext)

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)


    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
        <modalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </modalContext.Provider>
    )



}

