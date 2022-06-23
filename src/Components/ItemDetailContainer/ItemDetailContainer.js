import { useEffect, useState } from "react"
import { getProductById } from "../../productos"
import { useParams } from 'react-router';
import ItemDetail from "../ItemDetail/ItemDetail"
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    // const id = 2

    let { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setItem(res)
            }
            )
            .catch(err => console.log(err))
    }, [id])

    console.log("item:", item)

    return (
        <div className='ItemDetail-Container'>
            <h2> DETALLE DEL PRODUCTO </h2>
            <hr />
            {item.map((prod) => {
				return (
					<div key={prod.id}>
						<Link to={`/item/${prod.id}`}>
                            <ItemDetail {...prod} />
                        </Link>
					</div>
				);
			})}
        </div>
    )
}

export default ItemDetailContainer;