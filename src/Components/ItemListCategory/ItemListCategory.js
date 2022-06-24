//IMPORTS
import { useEffect, useState } from "react"
//Componentes - Función
import { getProducts } from "../../productos"
import Item from "../Item/Item"
//React-Router-DOM
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productCat, setProductCat] = useState([]);

    let { category } = useParams();

    useEffect(() => {
        getProducts(category)
            .then(res => {
                setProductCat(res)
            }
            )
    }, [category])

    console.log("Products-Category:", productCat)

    const styles = {
        div:{
            paddingTop: 130
        }
    }

    return (
        <div className='ItemListCategory' style={styles.div}>
            <h2> PRODUCTO </h2>
            <br></br>
            <div key={productCat.category}>
                <Link to={`/category/${productCat.category}`}>
                    <Item {...productCat} />
                </Link>
            </div>
        </div>
    )
}

export default ItemDetailContainer;