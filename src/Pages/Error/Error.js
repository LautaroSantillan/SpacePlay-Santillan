//IMPORTS
//Estilos
import "./Error.css";
//React-Router-DOM
import { Link } from 'react-router-dom';
//DEVELOPING
const Error = () => { 
    return (
    <div className="containerError">
        <h2>PÁGINA NO ENCONTRADA:</h2>
        <img src="https://lobosuelto.com/wp-content/uploads/2018/04/error-404.png" alt="error404" />
        <br></br>
        <Link className="btnError" to="/">
            Volver al Home
        </Link>
    </div>
    );
};

export default Error;