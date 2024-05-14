
import HeaderAdmin from "../../components/headers/HeaderAdmin";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <HeaderAdmin />
      <section className="AllCrud">
        <div className="Cardcontainer">
          <div className="Card-crud">
            <div className="CrudLink">
            <Link to={"/toute-les-armes"} className="linkCrud">
              ¤ Voir toutes les Armes
            </Link>
            <br></br>
            <Link to={"/creer"} className="linkCrud">
            ¤ Créer une arme
            </Link>
            <br></br>
            <Link to={"/modifierarmes"} className="linkCrud">
            ¤ Modifier une arme
            </Link>
            </div>
             <div className="ImageCrud">
             <img className="picture-of-crud" src="../src/assets/images/crud/armesr.png" alt="Image d'arme" />
          </div>

          </div>
          <div className="Card-crud">
            <div className="CrudLink">
            <Link to={"/tout-les-user"} className="linkCrud">
            ¤ Voir tout les utilisateurs
            </Link>
            </div>
            <div className="ImageCrud">
              <img className="picture-of-crud" src="../src/assets/images/crud/userr.png" alt="Image d'utilisateur " />
            </div>

          </div>
        </div>
        <div className="Cardcontainer">
          <div className="Card-crud">
            <div className="CrudLink">
            <Link to={"/tout-les-agents"} className="linkCrud">
             ¤ Voir tout les agents
             </Link>
             <br></br>
             <Link to={"/creer"} className="linkCrud">
             ¤ Créer un agent
             </Link>
             <br></br>
             <Link to={"/modifieragent"} className="linkCrud">
             ¤ Modifier un agent
             </Link>
            </div>
            <div className="ImageCrud">
            <img className="picture-of-crud" src="../src/assets/images/crud/agentsr.png" alt="Image d'agent" />
            </div>

          </div>
          <div className="Card-crud">
            <div className="CrudLink">
            <Link to={"/toutes-les-abilites"} className="linkCrud">
            ¤ Voir toutes les abilités
            </Link>
            <br></br>
            <Link to={"/creer"} className="linkCrud">
            ¤ Créer une abilité
            </Link>
            <br></br>
            <Link to={"/modifierabilites"} className="linkCrud">
            ¤ Modifier une abilité
            </Link>
            </div>
            <div className="ImageCrud">
            <img className="picture-of-crud" src="../src/assets/images/crud/abiliter.png" alt="Image d'abilité " />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default AdminPage;
