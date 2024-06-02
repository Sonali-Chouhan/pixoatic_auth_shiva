import { useNavigate } from "react-router-dom";

const Dashboad = () =>{
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem("token");
        navigate("/")
    }
    return(
        <>
        <h2>Welcome to Dashboad</h2>
        <button className="login-btn" onClick={logout}>Logout</button>
        </>
    )
}

export default Dashboad;