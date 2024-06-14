import cls from "./button.module.sass"


const Button = ({children}) => {
  return(
        <>
            <button className={cls.default}>
                {children}
            </button>
            <button className={cls.warning}>
                {children}
            </button>
            <button className={cls.disabled}>
                {children}
            </button>
            <button className={cls.allowed}>
                {children}
            </button>

        </>

  )
}
export default Button