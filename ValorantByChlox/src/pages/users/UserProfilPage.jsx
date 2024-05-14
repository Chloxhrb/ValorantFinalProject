import React, { useState, useEffect } from "react";
import HeaderUserConnected from "../../components/headers/HeaderUserConnected";

function UserProfilPage() {
  const [user, setUser] = useState({ userName: '', userEmail: '', userRank: '' });

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:1804/auth/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Unable to fetch user data");
        }
        setUser({
          userName: data.userName,
          userEmail: data.userEmail,
          userRank: data.userRank
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUser();
  }, []);
  

  return (
    <>
      <section className="ProfilPagebcg">
        <HeaderUserConnected />
        <section className="UserProfil">
          <h6 className="UserNameData">Nom: {user.userName}</h6>
          <h6 className="UserEmailData">Email: {user.userEmail}</h6>
          <h6 className="UserRankData">Rang: {user.userRank}</h6>
        </section>
      </section>
    </>
  );
}

export default UserProfilPage;
