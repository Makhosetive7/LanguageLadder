// Modal.js
import React from 'react';
import styled from 'styled-components';
import { useModal } from '../../ContextAPI/ModalsContext';
import { MdClose } from "react-icons/md";
import { useSpeech } from '../../ContextAPI/SpeechContext';

const Modal = () => {
    const { isOpen, closeModal, modalContent } = useModal();
    const { speak } = useSpeech()

    const handleSpeak = () => {
        speak(modalContent.content)
    }

    if (!isOpen) return null;

    return (
        <React.Fragment>
            <Overlay onClick={closeModal}>
                <button onClick={closeModal}><MdClose /></button>
            </Overlay>
            <ModalContainer>
                {modalContent && (
                    <div>
                        <Heading>
                            <h2>{modalContent.title}</h2>
                            <h2 onClick={() => handleSpeak(modalContent.content)}>read</h2>
                        </Heading>
                        <img src={modalContent.image} alt={modalContent.title} />
                        <p>{modalContent.content}</p>
                    </div>
                )}
            </ModalContainer>
        </React.Fragment>
    );
};

export default Modal;

const Overlay = styled.div`
    width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.909);
  z-index: 1000;
`;

const ModalContainer = styled.div`
   width: 70%;
   height: 70vh;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;
  border-radius: 8px;
  overflow-y: auto;
  ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: #4942e4;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #ffffff;
        border-radius: 10px;
        border: 3px solid #4942e4;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #ffffff;
    }


    button {
        display: flex;
        justify-content: flex-end;
        margin: 16px;
        border: none;
        background-color: transparent;
    }

    img {
        width: 100%;
        height: 30vh;
    }
`;

const Heading = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;

`
