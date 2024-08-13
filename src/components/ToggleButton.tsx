import { useState } from "react";




export function ToggleButton(){
    const[toggle, setToggle] = useState(false)
    return <>
    <input  type="checkbox" checked={toggle} onClick={(event: any)=>setToggle(event.target.toggle)}/>
    </>
}