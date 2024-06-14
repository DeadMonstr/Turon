
import Button from "components/ui/button/button";
import Checkbox from "components/ui/form/checkbox/checkbox";
import Textarea from "components/ui/form/textarea/textarea";
import Input from "components/ui/form/inputs/input";
import cls from "components/ui/form/inputs/input.module.sass"
import Select from "components/ui/form/select/select";
import Alerts from "components/ui/alerts/alerts";
import clsAlert from "components/ui/alerts/alerts.module.sass"


import CheckCircle from "assets/icons/CheckCircle.png"
import Trash from "assets/icons/trash-2.png"
import Calendar from "assets/icons/CalendarDots.svg"
import Warning from "assets/icons/Warning.svg"
import WarningCircle from "assets/icons/WarningCircle (1).png"
import CloseModal from "assets/icons/X.png";
import {useState} from "react";

export const Home = () => {
    const [modal , setModal] = useState(true)



    const closeModal = () => {
      setModal(false)
    }

    return (<>
        <Alerts>
            {modal ?  <div className={clsAlert.danger}>
                <div className={clsAlert.danger__main}>
                    <div className={clsAlert.danger__main_img}>
                        <img src={Warning} alt=""/>
                    </div>
                    <div className={clsAlert.danger__main_info}>
                        <div className={clsAlert.danger__main_title}>
                            Modal Status
                        </div>
                        <div className={clsAlert.danger__main_descr}>
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </div>
                    </div>
                    <div onClick={closeModal} className={clsAlert.danger__main_close}>
                        <img src={CloseModal} alt=""/>
                    </div>
                </div>
            </div> : null}
        </Alerts>
        <Alerts>
            {modal ? <div className={clsAlert.success}>
                <div className={clsAlert.success__main}>
                    <div className={clsAlert.success__main_img}>
                        <img src={CheckCircle} alt=""/>
                    </div>
                    <div className={clsAlert.success__main_info}>
                        <div className={clsAlert.success__main_title}>
                            Modal Status
                        </div>
                        <div className={clsAlert.success__main_descr}>
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </div>
                    </div>
                    <div  className={clsAlert.success__main_close}>
                        <img src={CloseModal} alt=""/>
                    </div>
                </div>
            </div> : null
            }
        </Alerts>
        <Alerts>
            <div className={clsAlert.warning}>
                <div className={clsAlert.warning__main}>
                    <div className={clsAlert.warning__main_img}>
                        <img src={WarningCircle} alt=""/>
                    </div>
                    <div className={clsAlert.warning__main_info}>
                        <div className={clsAlert.success__main_title}>
                            Modal Status
                        </div>
                        <div className={clsAlert.warning__main_descr}>
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </div>
                    </div>
                    <div onClick={() => setModal(false)} className={clsAlert.warning__main_close}>
                        <img src={CloseModal} alt=""/>
                    </div>
                </div>
            </div>
        </Alerts>
        <Alerts>
            <div className={clsAlert.info}>
                <div className={clsAlert.info__main}>
                    <div className={clsAlert.info__main_img}>
                        <img src={WarningCircle} alt=""/>
                    </div>
                    <div className={clsAlert.info__main_info}>
                        <div className={clsAlert.success__main_title}>
                            Modal Status
                        </div>
                        <div className={clsAlert.info__main_descr}>
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </div>
                    </div>
                    <div onClick={() => setModal(false)} className={clsAlert.info__main_close}>
                        <img src={CloseModal} alt=""/>
                    </div>
                </div>
            </div>
        </Alerts>
        {/*<Checkbox>*/}
        {/*    label*/}
        {/*    <input type="checkbox"/>*/}
        {/*</Checkbox>*/}


        {/*<Button>*/}
        {/*    delete*/}
        {/*</Button>*/}

        {/*<Textarea>*/}
        {/*    <span>label</span>*/}
        {/*    <textarea placeholder="tuldiring" name="" id="" cols="" rows=""></textarea>*/}
        {/*    <label htmlFor="">label</label>*/}
        {/*</Textarea>*/}
        {/*<div className="inputs">*/}
        {/*    <Input>*/}
        {/*        <div className={cls.input__active}>*/}
        {/*            <span>label</span>*/}
        {/*            <div className={cls.input__active_form}>*/}
        {/*                <input type="text"/>*/}
        {/*                <img src={Calendar} alt=""/>*/}
        {/*            </div>*/}
        {/*            <span>helper text</span>*/}
        {/*        </div>*/}
        {/*    </Input>*/}
        {/*    <Input>*/}
        {/*        <div className={cls.input__disabled}>*/}
        {/*            <span>label</span>*/}
        {/*            <div className={cls.input__disabled_form}>*/}
        {/*                <input type="text"/>*/}
        {/*                <img src={WarningCircle} alt=""/>*/}
        {/*            </div>*/}
        {/*            <span>helper text</span>*/}
        {/*        </div>*/}
        {/*    </Input>*/}
        {/*    <Input>*/}
        {/*        <div className={cls.input__default}>*/}
        {/*            <span>label</span>*/}
        {/*            <div className={cls.input__default_form}>*/}
        {/*                <input type="text"/>*/}
        {/*                <img src={Calendar} alt=""/>*/}
        {/*            </div>*/}
        {/*            <span>helper text</span>*/}
        {/*        </div>*/}
        {/*    </Input>*/}
        {/*    <Input>*/}
        {/*        <div className={cls.input__warning}>*/}
        {/*            <span>label</span>*/}
        {/*            <div className={cls.input__warning_form}>*/}
        {/*                <input type="text"/>*/}
        {/*                <img src={Warning} alt=""/>*/}
        {/*            </div>*/}
        {/*            <span>helper text</span>*/}
        {/*        </div>*/}
        {/*    </Input>*/}
        {/*    <Input>*/}
        {/*        <div className={cls.input__allowed}>*/}
        {/*            <span>label</span>*/}
        {/*            <div className={cls.input__allowed_form}>*/}
        {/*                <input type="text"/>*/}
        {/*                <img src={CheckCircle} alt=""/>*/}
        {/*            </div>*/}
        {/*            <span>helper text</span>*/}
        {/*        </div>*/}
        {/*    </Input>*/}
        {/*</div>*/}
    </>);
};

