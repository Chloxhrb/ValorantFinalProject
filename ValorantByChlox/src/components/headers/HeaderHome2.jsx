import { Link } from "react-router-dom";

function HeaderHome2() {
  return (
    <>
      <section className="HeadersansConnexion">
        <Link to={"/connexion"} className="linkHeadersansConnexion">
          CONNEXION
        </Link>
        <Link to={"/"} >
            <img
            className="logo"
            src="src/assets/images/logo/logoValo.png"
            alt="logo du jeu Valorant de Riot games"
            />
        </Link>
        <Link to={"/inscription"} className="linkHeadersansConnexion">
          INSCRIPTION
        </Link>
      </section>
    </>
  );
}

export default HeaderHome2;
