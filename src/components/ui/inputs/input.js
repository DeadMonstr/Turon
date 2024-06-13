import cls from "./input.module.sass"

import Button from "../button/button";

const Input = ({children}) => {
  return(
      <div className={cls.input_disabled}>
          {children}
      </div>
  )
}
export default Input