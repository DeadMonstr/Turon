import cls from "./checkbox.module.sass"
const Checkbox = ({children}) => {
  return(
      <div className={cls.checkbox} >
          {children}
      </div>
  )
}
export default Checkbox