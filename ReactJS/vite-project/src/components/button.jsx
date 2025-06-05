import { useContext, useState } from "react"
import { displayContext } from "./context"
function AppButton({ value, color, width }) {
    const display = useContext(displayContext)
    return (
        <button onClick={() => {
            display.display ? display.setDisplay([...display.display, value])
                :
                display.setDisplay([value])
            // console.log(display.display)
            value == "AC" && display.setDisplay([])
            value == "+" && display.setDisplay(display.display.slice(0,display.display.indexOf("+")))
            // ,display.display.slice(display.display.indexOf("+")))
            // value == "+" && console.log(display.display[display.display.indexOf("+")])
        }} className={`text-xl btn-number ${width && "zero-btn"} ${color ? color : "greycustom"}`}>{value}
        </button>
    )
}
export default AppButton