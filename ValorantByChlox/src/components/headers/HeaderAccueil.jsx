
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