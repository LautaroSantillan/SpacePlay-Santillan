import { useEffect, useState } from "react"
import { getProductById } from "../../productos"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)

    const id = 2

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setItem(res)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [])

    console.log("item:", item)

    return (
        <>
            <h2> DETALLE DEL PRODUCTO </h2>
            <hr />
            {loading ? <div> Cargando... </div>
                : <ItemDetail {...item} />
            }
        </>
    )
}

export default ItemDetailContainer;