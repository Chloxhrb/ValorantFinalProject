import React from "react";
import { useNavigate} from "react-router-dom"

const Logout = () => {

const navigate = useNavigate();


  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/")
    
  };

  return (
    <button className="LogoutButton" onClick={handleLogout}>
      DECONNEXION
    </button>
 
  );
};

export default Logout;
