import { useContext } from "react"
import AuthContext from "../shared/AuthContex/AuthContext"

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}

export default useAuth;