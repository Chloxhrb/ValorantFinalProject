import { Link } from "react-router-dom";
import React, { useState } from "react";
import HeaderHome2 from "../../components/headers/HeaderHome2";

const AuthPage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRank, setUserRank] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(""); // Ajout de l'état pour gérer le message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1804/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          userEmail,
          password,
          userRank,
        }),
      });
      const data = await response.json();
      console.log(data);

      setMessage("✔✔✔ Vous êtes bien inscrit sur le site ! ✔✔✔");
      // Réinitialisation des champs après inscription réussie
      setUserName("");
      setUserEmail("");
      setPassword("");
      setUserRank("");
    } catch (error) {
      console.log("Error registering user:", error);
      setMessage("Une erreur est survenue lors de l'inscription.");
    }
  };


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="AuthSection">
        <HeaderHome2 />
        <form className="FormAuth" onSubmit={handleSubmit}>
          {message && <div className="messageCrud">{message}</div>}
          <div className="Inputform">
            <h5>Pseudo :</h5>
            <input
              required
              type="text"
              className="prompt"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="Inputform">
            <h5>Email :</h5>
            <input
              required
              type="text"
              className="prompt"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}/>
          </div>
          <div className="Inputform">
            <div className="Inputform">
              <h5>Rank :</h5>
              <input
                required
                type="text"
                className="prompt"
                value={userRank}
                onChange={(e) => setUserRank(e.target.value)}/>
            </div>
            <h5>Mot de Passe :</h5>
            <input
              required
              type={showPassword ? "text" : "password"}
              className="prompt"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            <button
              className="hidepsw"
              type="button"
              onClick={toggleShowPassword} >
              {showPassword
                ? "Masquer le mot de passe"
                : "Afficher le mot de passe"}
            </button>
          </div>
          <div className="ButtonAuth">
            <button type="submit" className="Submit">
              Envoyez
            </button>
          </div>
          <div className="ConnexionInscription">
            <p className="Question">Tu as déjà un compte ?</p>
            <Link to={"/connexion"} className="linkAuth">
              Cliquez ici
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthPage;
