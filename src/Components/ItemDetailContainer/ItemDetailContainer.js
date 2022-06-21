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
            <br />
            <h2> DETALLE DEL PRODUCTO </h2>
            <hr />
            {loading ? <div> Cargando... </div>
                : <ItemDetail name={item.title} description={item.description} descriptionPlus={item.descriptionPlus} descriptionPlus2={item.descriptionPlus2} descriptionPlus3={item.descriptionPlus3} price={item.price} img={item.pictureUrl} img2={item.pictureUrl2} img3={item.pictureUrl3} category={item.category}/>
            }
        </>
    )
}

export default ItemDetailContainer;