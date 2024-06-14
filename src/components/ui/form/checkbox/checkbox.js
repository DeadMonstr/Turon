import cls from "components/ui/form/checkbox/checkbox.module.sass"
const Checkbox = ({children}) => {
  return(
      <>

          <div className={cls.checkbox} >
              {children}
          </div>
          <div className={cls.checkbox_disabled} >
              {children}
          </div>
      </>
  )
}
export default Checkbox