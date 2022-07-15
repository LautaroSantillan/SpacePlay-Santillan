//IMPORTS
import { useContext, useState } from "react";
//Estilos
import "./Shop.css";
//Componente
import ShopMessage from "../../Components/ShopMessage/ShopMessage";
//Context
import { CartContext } from "../../Context/CartContext";
// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
//DEVELOPING
const Shop = () => {
    const { items } = useContext(CartContext);

    //Sacar el precio total
    const handlePrice = () => { 
        let total = 0;
        items.map((item) => (total += item.qty * item.price));
        return total;
    };

    //Inicializar el estado de Comprador
    const initialBuyer = {
        name: '',
        lastName: '',
        number: '',
        email: '',
    };

    const [values, setValues] = useState(initialBuyer);

    const [buyer, setBuyer] = useState(initialBuyer);

    const [purchaseID, setPurchaseID] = useState("");

    //Tomar los datos del formulario y setearlos en el estado
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    //Mandar los datos a Firebase y que este devuelva el ID del documento
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(values);

        //Creación del objeto con los items comprados
        let itemsObj = items.map((item) => {
            return {
                id: item.id,
                title: item.name,
                quantity: item.qty,
                price: item.price,
            };
        });

        //Creación del objeto que se va a mandar a Firebase
        const newShopping = {
            buyer: values,
            items: itemsObj,
            date: new Date(),
            total: handlePrice(),
        }

        //Mandar los datos contra Firebase
        const docRef = await addDoc(collection(db,'shopping'), {
            newShopping,
        });
        console.log("Documento escrito con ID:", docRef.id); //Id de orden autogenerada
        setPurchaseID(docRef.id);//Guardar el ID de la orden
        setBuyer(values);//Guardar los datos del funcionario para mostrarlos en el ShopMessage
        setValues(initialBuyer);//Inicializar nuevamente el formulario
    };

    //Resetear el formulario
    const onReset = () => {
        setValues(initialBuyer);
    };

    //Estilo en linea
    const styles = {
        div:{
            paddingTop: 130
        }
    };

    return(
        <div style={styles.div}>
            <h2 className="title-shop"><span>PARA FINALIZAR SU COMPRA:</span> Ingrese sus datos personales en el formulario</h2>
            <hr></hr>
            <article className="d-flex justify-content-center">
                <div className="card col-sm-6 p-3 formulario">
                    <div className="mb-3">
                        <h2>Formulario de Pago</h2>
                    </div>
                    <form action="" onSubmit={onSubmit} onReset={onReset}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" 
                                className="form-control" 
                                name="name" 
                                placeholder="Ejemplo: Lautaro" 
                                aria-label="First name" 
                                value={values.name} 
                                onChange={handleOnChange} 
                                required/>
                            </div>
                            <div className="col">
                                <label htmlFor="apellido" className="form-label">Apellido</label>
                                <input type="text" 
                                className="form-control" 
                                name="lastName" 
                                placeholder="Ejemplo: Santillan" 
                                aria-label="Last name" 
                                value={values.lastName} 
                                onChange={handleOnChange} 
                                required/>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="numero" className="form-label">Numero Telefonico</label>
                            <input type="number" 
                            className="form-control" 
                            name="number" placeholder="" 
                            value={values.number} 
                            onChange={handleOnChange} 
                            required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="correo" className="form-label">Correo electronico</label>
                            <input type="text" 
                            className="form-control" 
                            name="email" 
                            placeholder="ejemplo@mail.com" 
                            value={values.email} 
                            onChange={handleOnChange} 
                            required />
                        </div>
                        <div className="mb-2 btns-form">
                            <input type="submit" value="REALIZAR COMPRA" className="btn-form" />
                            <input type="reset" value="BORRAR" className="btn-form"/>
                        </div>
                    </form>
                    {purchaseID && <ShopMessage purchaseID={purchaseID} buyer={{...buyer}} /*nameBuyer={values.name} lastNameBuyer={values.lastName} emailBuyer={values.email}*/ />}
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
    );
};

export default Shop;