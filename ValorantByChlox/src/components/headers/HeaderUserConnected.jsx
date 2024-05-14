import { Link } from "react-router-dom";
import Logout from "../Logout";

function HeaderUserConnected() {
  return (
    <>
      <section className="header">
        <div className="headerPart">
          <Link to={"/agents"} className="linkHeader">
            AGENTS
          </Link>
          <Link to={"/armes"} className="linkHeader">
            ARSENAL
          </Link>
        </div>
        <Link to={"/accueilusco"}>
          <img
            className="logo"
            src="src/assets/images/logo/logoValo.png"
            alt="logo du jeu Valorant de Riot games"
          />
        </Link>
        <div className="headerPart">
          <Link to={"/profil"} className="linkHeader">
            PROFIL
          </Link>
          <Logout />
        </div>
      </section>
    </>
  );
}

export default HeaderUserConnected;