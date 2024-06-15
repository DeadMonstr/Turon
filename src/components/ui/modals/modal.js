import React, {useState} from 'react';
<<<<<<< HEAD

import closeIcon from 'assets/icons/X.png'
import errorIcon from 'assets/icons/Warning.svg'
import successIcon from 'assets/icons/CheckCircle.png'
import warningIcon from 'assets/icons/Warning.svg'
import cls from "./modal.module.sass"
=======
import cls from './modal.module.sass';
import closeIcon from '../../../assets/icons/cancel.svg'
import errorIcon from '../../../assets/icons/error.svg'
import successIcon from '../../../assets/icons/success.svg'
import warningIcon from '../../../assets/icons/warning.svg'

>>>>>>> 6e7a3cdccf4511db559aa9e1189e02534e2454d2
function Modal() {
    const [modalType, setModalType] = useState(null);

    const openModal = (type) => {
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };

    const closeModalAnthButton = () => {
        setModalType(null)
    }

    return (
        <div className={cls.Modal}>
            <button onClick={() => openModal('standard')}>Open Standard Modal</button>
            <button onClick={() => openModal('delete')}>Open Delete Confirmation Modal</button>
            <button onClick={() => openModal('success')}>Open Success Modal</button>
            <button onClick={() => openModal('warning')}>Open Warning Modal</button>

            {modalType && <div className={cls.overlay} onClick={closeModal}>
                <div className={cls.modal} onClick={(e) => e.stopPropagation()}>
<<<<<<< HEAD
                     {modalType === 'standard' && (
=======
                    {modalType === 'standard' && (
>>>>>>> 6e7a3cdccf4511db559aa9e1189e02534e2454d2
                        <div className={cls.modalHandler}>
                            <div className={cls.articleBox}>
                                <h1 className={cls.Standart}>Modal Window</h1>
                                <button className={cls.CloseModal} onClick={closeModal}>
                                    <img src={closeIcon} alt=""/>
                                </button>
                            </div>
                            <div className={cls.paragraphBox}>
                                <h4 className={cls.paragraph}>
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                </h4>
                            </div>
                            <div className={cls.buttonPanel}>
                                <div className={cls.buttonHandler}>
                                    <button className={cls.okButton}>Okay</button>
                                    <button className={cls.cancelButton} onClick={closeModalAnthButton}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {modalType === 'delete' && (
                        <div className={cls.modalHandler}>
                            <div className={cls.articleBox}>
                                <h1 className={cls.Standart}>
                                    <img src={errorIcon} alt=""/>
                                    Modal Window
                                </h1>
                            </div>
                            <div className={cls.paragraphBox}>
                                <h4 className={cls.errorParagraph}>
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                </h4>
                            </div>
                            <div className={cls.buttonPanel}>
                                <div className={cls.buttonHandler}>
                                    <button className={cls.delButton}>Okay</button>
                                    <button className={cls.cancelDelButton} onClick={closeModalAnthButton}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {modalType === 'success' && (
                        <div className={cls.modalHandler}>
                            <div className={cls.articleBox}>
                                <h1 className={cls.Standart}>
                                    <img src={successIcon} alt=""/>
                                    Modal Window
                                </h1>
                            </div>
                            <div className={cls.paragraphBox}>
                                <h4 className={cls.errorParagraph}>
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                </h4>
                            </div>
                            <div className={cls.buttonPanel}>
                                <div className={cls.buttonHandler}>
                                    <button className={cls.successButton}>Okay</button>
                                    <button className={cls.cancelSuccessButton} onClick={closeModalAnthButton}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {modalType === 'warning' && (
                        <div className={cls.modalHandler}>
                            <div className={cls.articleBox}>
                                <h1 className={cls.Standart}>
                                    <img src={warningIcon} alt=""/>
                                    Modal Window
                                </h1>
                            </div>
                            <div className={cls.paragraphBox}>
                                <h4 className={cls.errorParagraph}>
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                </h4>
                            </div>
                            <div className={cls.buttonPanel}>
                                <div className={cls.buttonHandler}>
                                    <button className={cls.warningButton}>Okay</button>
                                    <button className={cls.cancelWarningButton} onClick={closeModalAnthButton}>Cancel</button>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>}
        </div>
    );
}

<<<<<<< HEAD
export default Modal;
=======
export default Modal;
>>>>>>> 6e7a3cdccf4511db559aa9e1189e02534e2454d2
