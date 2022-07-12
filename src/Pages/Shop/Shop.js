//IMPORTS
import { useContext } from "react";
//Estilos
import "./Shop.css";
//Context
import { CartContext } from "../../Context/CartContext";
//DEVELOPING
const Shop = () => {
    const { items } = useContext(CartContext);

    //Sacar el precio total
    const handlePrice = () => { 
        let total = 0;
        items.map((item) => (total += item.qty * item.price));
        return total;
    };

    //Estilo en linea
    const styles = {
        div:{
            paddingTop: 130
        }
    }
    return(
        <div style={styles.div}>
            <h2 className="title-shop"><span>PARA FINALIZAR SU COMPRA:</span> Ingrese sus datos personales en el formulario</h2>
            <hr></hr>
            <div className="form-shop">
                <h3>Formulario - Shop</h3>
            </div>
            <div className="items-shop">
                <h4>Items del Carrito:</h4>
                <div className="item-shop-header">
                    <p className="item-shop--product borderHeader">ID</p>
                    <p className="item-shop--product borderHeader">PRODUCTO</p>
                    <p className="item-shop--product borderHeader">CANTIDAD</p>
                    <p className="item-shop--product borderHeader">PRECIO</p>
                    <p className="item-shop--product borderHeader">TOTAL POR PRODUCTO</p>
                </div>
                {
                    items.map((item) => {
                        return(
                        <div className="items-shop-item" key={item.id}>
                            <p className="item-shop--product"># {item.id}</p>
                            <p className="item-shop--product">{item.name}</p>
                            <p className="item-shop--product">{item.qty}</p>
                            <p className="item-shop--product">${item.price}</p>
                            <p className="item-shop--product">${item.price * item.qty}</p>
                        </div>
                    )})
                }
                <h4>Importe Total de la Compra: ${handlePrice()}</h4>
            </div>
        </div>
    )
}

export default Shop;