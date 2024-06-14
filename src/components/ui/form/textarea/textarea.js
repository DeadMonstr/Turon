import cls from "components/ui/form/textarea/textarea.module.sass"

const Textarea = ({children}) => {
  return(
      <>
          <div className={cls.textarea}>
              {children}
          </div>
          <div className={cls.textarea_disabled}>
              {children}
          </div>
      </>
  )
}
export default Textarea