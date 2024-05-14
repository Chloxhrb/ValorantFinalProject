import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext';
import HeaderHome2 from '../../components/headers/HeaderHome2';

const ConnexionPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:1804/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userEmail,
                    password,
                }),
            });
            const data = await response.json();

            console.log("Login Response:", data);

            if (response.ok) {
                localStorage.setItem("token", data.token);
                login(data.isAdmin);
                console.log(data.isAdmin)
                navigate(data.isAdmin ? "/accueiladco" : "/accueilusco"); // Redirection conditionnelle
            } else {
                throw new Error(data.message || "Failed to login");
            }
        } catch (error) {
            console.error("Error logging in: ", error);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <HeaderHome2 />
            <section className="AuthSection">
                <form className="FormAuth" onSubmit={handleSubmit}>
                    <div className="Inputform">
                        <h5>Email :</h5>
                        <input
                            required
                            type="text"
                            className="prompt"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </div>
                    <div className="Inputform">
                        <h5>Mot de Passe :</h5>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            className="prompt"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="hidepsw"
                            type="button"
                            onClick={toggleShowPassword}>
                            {showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                        </button>
                    </div>
                    <div className="ButtonAuth">
                        <button type="submit" className="Submit">
                            Envoyez
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default ConnexionPage;
