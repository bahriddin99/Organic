import clsx from "clsx"
import {VektorIcon} from "../../imgss/icons/vektor-icon"

export const Button =({children,variant,className})=>{
    return <button className={clsx   ({
        "bg-texts":variant === "primary",
        "bg-bg_secondary":variant = "secondary",
       
       
    },className,)}>
    {children}  </button>
}