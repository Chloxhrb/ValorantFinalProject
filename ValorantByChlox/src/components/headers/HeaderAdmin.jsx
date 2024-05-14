import { Link } from "react-router-dom";
import Logout from "../Logout";

function HeaderAdmin() {
  return (
    <>
      <section className="header">
        <div className="headerPart">
          <Link to={"/agentsAd"} className="linkHeader">
            AGENTS
          </Link>
          <Link to={"/armesAd"} className="linkHeader">
            ARSENAL
          </Link>
        </div>
        <Link to={"/accueiladco"}>
          <img
            className="logo"
            src="src/assets/images/logo/logoValo.png"
            alt="logo du jeu Valorant de Riot games"
          />
        </Link>
        <div className="headerPart">
          <Link to={"/admin"} className="linkHeader">
            ADMIN
          </Link>
          <Logout />
        </div>
      </section>
    </>
  );
}

export default HeaderAdmin;
