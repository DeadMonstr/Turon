import cls from "./input.module.sass"


const Input = ({children}) => {
  return(
      <div className={cls.input}>
          {children}
      </div>
  )
}
export default Input