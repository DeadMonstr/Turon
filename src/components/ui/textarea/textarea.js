import cls from "./textarea.module.sass"

const Textarea = ({children}) => {
  return(
      <div className={cls.textarea}>
          {children}
      </div>
  )
}
export default Textarea