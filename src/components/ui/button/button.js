import cls from "./button.module.sass"


const Button = ({children}) => {
  return(
      <>
        <button className={cls.btn}>
            {children}
        </button>
      </>
  )
}
export default Button