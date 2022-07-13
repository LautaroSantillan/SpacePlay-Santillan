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
            <article className="d-flex justify-content-center">
                <div className="card col-sm-6 p-3 formulario">
                    <div className="mb-3">
                        <h2>Formulario de Pago</h2>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col">
                                <label for="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" placeholder="Ejemplo: Lautaro" aria-label="First name" required/>
                            </div>
                            <div className="col">
                                <label for="apellido" className="form-label">Apellido</label>
                                <input type="text" className="form-control" placeholder="Ejemplo: Santillan" aria-label="Last name" required/>
                            </div>
                        </div>
                        <div classNameName="mb-2">
                            <label for="numero" className="form-label">Numero Telefonico</label>
                            <input type="number" className="form-control" name="numero" placeholder="" required />
                        </div>
                        <div classNameName="mb-2">
                            <label for="correo" className="form-label">Correo electronico</label>
                            <input type="text" className="form-control" name="correo" placeholder="ejemplo@mail.com" required />
                        </div>
                        <div classNameName="mb-2">
                            <label for="correo" className="form-label">Repita su Correo electronico</label>
                            <input type="text" className="form-control" name="correo" placeholder="ejemplo@mail.com" required />
                        </div>
                        <div className="mb-2 btns-form">
                            <input type="submit" value="REALIZAR COMPRA" className="btn-form" />
                            <input type="reset" value="BORRAR" className="btn-form" />
                        </div>
                    </form>
                </div>
            </article>
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