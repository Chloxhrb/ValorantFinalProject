import axios from "axios";
import HeaderAdmin from "../../components/headers/HeaderAdmin";
import React, { useState, useEffect } from "react";

function AllUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fonction pour récupérer les utilisateurs
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:1804/auth/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  // Fonction pour supprimer un utilisateur
  const deleteUser = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:1804/auth/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Rafraîchir la liste des utilisateurs après la suppression
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <>
      <HeaderAdmin />
      <section className="AllUserPage">
        <div className="TableauGrand">
          <div className="Line1">
            <div className="case1">
              <h5 className="Userinfo1"> Pseudo : </h5>
              <h5 className="Userinfo1"> Email :</h5>
            </div>
            <div className="case2">
              <h5 className="Userinfo1"> Rank :</h5>
              <h5 className="Userinfo1"> Gerer : </h5>
            </div>
          </div>
          {users.map((user) => (
            <div className="Line" key={user._id}>
              <div className="case">
                <h5 className="Userinfo">{user.userName}</h5>
              </div>
              <div className="case">
                <h5 className="Userinfo">{user.userEmail}</h5>
              </div>
              <div className="case">
                <p className="Userinfo">{user.userRank}</p>
              </div>
              <div className="buttCrud">
                <button
                  className="deleteModifierCrud"
                  onClick={() => deleteUser(user._id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="ImageCruduser2"></div>
      </section>
    </>
  );
}

export default AllUser;
