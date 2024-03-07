import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useSelectorType from "../Types";

function Header()
{
    const Pontos = useSelector((state: useSelectorType) => state.Jogos.pontos);
    return(
        <header>
            <div>logo</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="jogos">Jogos</Link>
                <Link to="/sobre">Sobre</Link>
            </div>
            <div>{Pontos}</div>
        </header>
    );
}

export default Header;
