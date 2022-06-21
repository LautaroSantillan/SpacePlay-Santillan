import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css";

const ItemDetail = ({ name, description, descriptionPlus, descriptionPlus2, descriptionPlus3, price, img, img2, img3, category }) => {
    const agregarAlCarrito = (cant) => {
        console.log(`Se agregaron ${cant} unidades al carrito`)
    }

    return (
        <div className="detailContainer">
            <div className="detailContainer-images">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={img} class="d-block w-100" alt={name} />
                        </div>
                        <div class="carousel-item">
                        <img src={img2}  class="d-block w-100" alt={name} />
                        </div>
                        <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt={name} />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="detailContainer-descriptions">
                <h2>{name}</h2>
                <p>Categoria: {category}</p>
                <p>Precio Unitario: ${price}</p>
                <p>{description}</p>
                <ul>
                    <li>{descriptionPlus}</li>
                    <li>{descriptionPlus2}</li>
                    <li>{descriptionPlus3}</li>
                </ul>
                <hr />
                <div className='count-container'>
                    <ItemCount stock={5} initial={1} onAdd={agregarAlCarrito} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;