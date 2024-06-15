import cls from "./input.module.sass"
import classNames from "classnames";

const Input = ({children , label  , name , type , icon , disabled ,extraClass, style}) => {

    return(
          <div className={`${cls.input} ${extraClass} `}>
              <span>{label}</span>
              <div className={classNames(cls.input_form, {
                  [cls.active]:style === "active",
                  [cls.error]:style === "error"
              })}>
                  <input disabled={disabled} type={type} placeholder={name} />
                  {icon && icon.length > 1 ? <img src={icon} alt=""/> : null}
              </div>
              <span>{children}</span>
          </div>
  )
}
export default Input