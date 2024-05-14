import { Link } from "react-router-dom";

function HeaderHome() {
  return (
    <>
      <section className="HeadersansConnexion">
        <Link to={"/connexion"} className="linkHeadersansConnexion">
          CONNEXION
        </Link>
        <Link to={"/inscription"} className="linkHeadersansConnexion">
          INSCRIPTION
        </Link>
      </section>
    </>
  );
}

export default HeaderHome;
