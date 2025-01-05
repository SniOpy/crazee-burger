import { createContext } from "react"

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => { },
    isCollapsed: false,
    setisCollapsed: () => { },
    isEditTab: false,
    setIsEditTab: () => { },
    isAddTab: false,
    setIsAddTab: () => { },

})