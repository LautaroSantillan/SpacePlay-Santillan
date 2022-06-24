// //IMPORTS
// import { useEffect, useState } from "react"
// import axios from "axios";
// //Componente
// import ItemDetail from "../ItemDetail/ItemDetail"
// // import { getProductById } from "../../productos"
// //React-Router-DOM
// import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';

// const ItemDetailContainer = () => {
//     const [item, setItem] = useState([]);

//     // const id = 3
//     let { id } = useParams();

//     useEffect(() => {
//         axios(`https://62aa950c371180affbd78121.mockapi.io/api/prod-ps5/articulos/${id}`).then((res) =>
//             setItem(res.data)
//         );
//     }, [id]);

//     console.log("Item:", item)

        // const styles = {
        //     div:{
        //         paddingTop: 130
        //     }
        // }

//     return (
//         <>
//             <div className='ItemDetail-Container' style={styles.div}>
//                 <h2> DETALLE DEL PRODUCTO </h2>
//                 <hr />
//                 {/* <ItemDetail {...item} /> */}
//                 {item.map((prod) => {
//                     return(
//                         <div key={prod.id}>
//                             <Link to={`/item/${prod.id}`}>
//                                 <ItemDetail {...prod} />
//                             </Link>
//                         </div>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// export default ItemDetailContainer;

import { useEffect, useState } from "react"
import { getProductById } from "../../productos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setProduct(res)
            }
            )
    }, [id])

    console.log("Product:", product)

    const styles = {
        div:{
            paddingTop: 130
        }
    }

    return (
        <div className='ItemDetail-Container' style={styles.div}>
            <h2> DETALLE DEL PRODUCTO </h2>
            <hr />
            <div key={product.id}>
                <Link to={`/item/${product.id}`}>
                    <ItemDetail {...product} />
                </Link>
            </div>
            {/* {product.map((item) => {
                return(
                    <div key={item.id}>
                        <Link to={`/item/${item.id}`}>
                            <ItemDetail {...item} />
                        </Link>
                    </div>
                )
            })} */}
        </div>
    )
}

export default ItemDetailContainer;