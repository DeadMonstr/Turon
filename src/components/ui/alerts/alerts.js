import cls from "./alerts.module.sass"
import  CloseModal from "assets/icons/X.png"
import clsAlert from "components/ui/alerts/alerts.module.sass";
import Warning from "assets/icons/Warning.svg";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {disableAlertActive} from "slices/alertSlice";




const Alerts = ({children}) =>{
    return(
        <div className={clsAlert.alert}>
            {children}
        </div>
    )
}

export default Alerts


// const Alerts = () => {
//     const {alert} = useSelector(state => state.layout)
//
//
//     const dispatch  = useDispatch()
//
//     useEffect(() => {
//         if (alert.length > 0 ) {
//             let interval
//             for (let i  = 0; i < alert.length ; i++){
//                 interval.setTimeout(() =>{
//                     handleClose(i)
//                 } , 5000)
//             }
//             return() =>{
//                 clearTimeout(interval)
//             }
//         }
//     }, [alert])
//
//     const handleClose = (index) => {
//         dispatch(disableAlertActive({index}))
//     };
//   return(
//       <div className={cls.alert}>
//           {alert.map((item , index) =>{
//               if (index < 5){
//                   return(
//                       <div className={ clsAlert.danger }>
//                           <div className={clsAlert.danger__main}>
//                               <div className={clsAlert.danger__main_img}>
//                                   <img src={Warning} alt=""/>
//                               </div>
//                               <div className={clsAlert.danger__main_info}>
//                                   <div className={clsAlert.danger__main_title}>
//                                       Modal Status
//                                   </div>
//                                   <div className={clsAlert.danger__main_descr}>
//                                       It has survived not only five centuries, but also the leap into electronic typesetting,
//                                       remaining essentially unchanged.
//                                   </div>
//                               </div>
//                               <div  className={clsAlert.danger__main_close}>
//                                   <img src={CloseModal} alt=""/>
//                               </div>
//                           </div>
//                       </div>
//                   )
//               }
//           })}
//       </div>
//   )
// }
// export default Alerts





// const Alerts = ({descr , alertImg, title}) => {
//     return(
//         <div className={clsAlert.alert}>
//             <div className={clsAlert.warning}>
//                 <div className={clsAlert.warning__main}>
//                     <div className={clsAlert.warning__main_img}>
//                         <img src={Warning} alt=""/>
//                     </div>
//                     <div className={clsAlert.warning__main_info}>
//                         <div className={clsAlert.warning__main_title}>
//                             Modal Status
//                         </div>
//                         <div className={clsAlert.warning__main_descr}>
//                             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                         </div>
//                     </div>
//                     <div onClick={onClick}  className={clsAlert.warning__main_close}>
//                         <img src={CloseModal} alt=""/>
//                     </div>
//                 </div>
//             </div>
//
//
//
//
//             <div className={clsAlert.success}>
//                 <div className={clsAlert.success__main}>
//                     <div className={clsAlert.success__main_img}>
//                         <img src={alertImg} alt=""/>
//                     </div>
//                     <div className={clsAlert.success__main_info}>
//                         <div className={clsAlert.success__main_title}>
//                             {title}
//                         </div>
//                         <div className={clsAlert.success__main_descr}>
//                             {descr}
//                         </div>
//                     </div>
//                     <div className={clsAlert.success__main_close}>
//                         <img src={CloseModal} alt=""/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Alerts