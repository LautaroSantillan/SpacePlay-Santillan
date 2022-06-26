//IMPORTS
//Componentes
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
//Estilos
import "./ItemDetail.css";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ title, description, descriptionPlus, descriptionPlus2, descriptionPlus3, price, pictureUrl, pictureUrl2, pictureUrl3, category, stock, initial }) => {
    const[add, setAdd] = useState();

    const addToCart = (qty) => {    
        setAdd(qty);
        console.log(`Se agregaron ${qty} unidades al carrito`)
    }

    return (
        <div className="detailContainer">
            <div className="detailContainer-images">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={pictureUrl} className="d-block w-100" alt={title} />
                        </div>
                        <div className="carousel-item">
                        <img src={pictureUrl2}  className="d-block w-100" alt={title} />
                        </div>
                        <div className="carousel-item">
                        <img src={pictureUrl3} className="d-block w-100" alt={title} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="detailContainer-descriptions">
                <h2>{title}</h2>
                <p>Categoria: {category}</p>
                <p>Precio Unitario: ${price}</p>
                <p>{description}</p>
                <ul>
                    <li>{descriptionPlus}</li>
                    <li>{descriptionPlus2}</li>
                    <li>{descriptionPlus3}</li>
                </ul>
                <div className='count-container'>
                    {
                        add ?
                            ""
                            :
                            <ItemCount stock={stock} initial={initial} onAdd={addToCart} />
                    }
                    {
                        add > 0 && <div className="btn-cart">
                                        <NavLink to="/cart">
                                            <button>Finalizar Compra</button>
                                        </NavLink>
                                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;