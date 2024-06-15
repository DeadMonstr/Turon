import cls from "./register.module.sass"
import registerImg from "assets/img/register.png"
import turonLogo from "assets/img/turon-logo.png"
import Radio from "components/ui/radio/radio";
import {useState} from "react";
import Select from "components/ui/form/select/select";
import Input from "components/ui/form/inputs/input";
import Calendar from "assets/icons/CalendarDots.svg"
const Register = () => {

    const workers = ["worker" ,  "teacher" , "student"]
    const registerType =[
        {   name: "userName"  ,
            type:"text",
            label: "User Name"
        },
        {   name: "name",
            type: "text",
            label: "Name"
        },
        {
            name: "sureName",
            type: "text",
            label: "Sure Name"
        },
        {
            name: "fatherName",
            type: "text",
            label: "Father Name",

        },
        {
            name: "password",
            type: "password",
            label: "password"
        }
    ]
    const [selected, setSelected] = useState('');
    const [style, setStyle] = useState('');

    const handleChange = (event) => {
        setSelected(event.target.id);
    };
    console.log(workers)
 return(
     <>
         <div className={cls.register}>
             <div className={cls.register__main}>
                 <div className={cls.register__main_form}>
                     <div className={cls.register__main_header}>
                         <div className={cls.register__logo}>
                             <img src={turonLogo} alt=""/>
                         </div>
                         <div className={cls.register__as}>
                             {workers.map((item , id)=>{
                                 return(
                                     <Radio onChange={handleChange} label={item} checked={selected === item }/>
                                 )
                             })}
                         </div>
                     </div>
                     <div className={cls.register__main_body}>
                         <div className={cls.register__form}>
                             <span>Register</span>
                             <Select>
                                 <option value="">English</option>
                                 <option value="">Rus</option>
                                 <option value="">Uzbek</option>
                             </Select>
                         </div>
                         <form action="">
                             {registerType.map((item) =>{
                                 return(
                                     <Input style={style} name={item.name} extraClass={cls.input__warning} type={item.type} icon={item.img} />
                                 )
                             })}
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </>
 )
}
export default Register