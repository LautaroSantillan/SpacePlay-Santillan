//IMPORTS
import { useContext } from "react";
//Componentes
import ItemCount from "../ItemCount/ItemCount";
//Estilos
import "./ItemDetail.css";
//React-Router-Dom
import { NavLink } from "react-router-dom";
//Context
import { CartContext } from "../../Context/CartContext";
//DEVELOPING
const ItemDetail = ({ product }) => {
    const {addItem, isInCart} = useContext(CartContext)

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
                        <img src={product.pictureUrl} className="d-block w-100" alt={product.title} />
                        </div>
                        <div className="carousel-item">
                        <img src={product.pictureUrl2}  className="d-block w-100" alt={product.title} />
                        </div>
                        <div className="carousel-item">
                        <img src={product.pictureUrl3} className="d-block w-100" alt={product.title} />
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
                <h2>{product.title}</h2>
                <p>Categoria: {product.category}</p>
                <p>Precio Unitario: ${product.price}</p>
                <p>{product.description}</p>
                <ul>
                    <li>{product.descriptionPlus}</li>
                    <li>{product.descriptionPlus2}</li>
                    <li>{product.descriptionPlus3}</li>
                </ul>
                <div className='count-container'> 
                    {
                        isInCart(product.id) ?
                                            ""
                                            :
                                            <ItemCount item={product} stock={product.stock} initial={product.initial} addItem={addItem} />
                    }
                    {
                        isInCart(product.id) && <div className="btn-cart">
                                                    <NavLink to="/cart">
                                                        <button>Finalizar Compra</button>
                                                    </NavLink>
                                                </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;