import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ img, name, description }) => {
    const agregarAlCarrito = (cant) => {
        console.log(`Se agregaron ${cant} unidades al carrito`)
    }

    return (
        <div className="detailContainer">
            <h2>{name}</h2>
            <h3>{description}</h3>
            <img src={img} alt={description} />
            <br />
            <div className='count-container'>
	            <ItemCount stock={5} initial={1} onAdd={agregarAlCarrito} />
            </div>
            <hr />
        </div>
    )
}

export default ItemDetail;