import { Link } from "react-router-dom";
import Logout from "../Logout";

function HeaderAccueilAdmin() {
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

export default HeaderAccueilAdmin;
