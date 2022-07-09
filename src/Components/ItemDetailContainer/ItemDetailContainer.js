//IMPORTS
import { useEffect, useState } from "react";
//Componentes
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
//React-Router-DOM
import { useParams } from 'react-router-dom';
//Firebase-Firestone
import { db } from "../../Firebase/firebaseConfig";
import { collection, query, getDocs, documentId, where } from "firebase/firestore";
//DEVELOPING
const ItemDetailContainer = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [albumData, setAlbumData] = useState([]);
    //Obtener el id de X producto 
    let { id } = useParams();

    useEffect(() => {
        const getAlbums = async () => {
            const q = query(collection(db, "playstation"), where(documentId(), "==", id));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setAlbumData(docs);
        };
        getAlbums();
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [id]);

    console.log("Product:", albumData);

    //Estilos en linea
    const styles = {
        div:{
            paddingTop: 130
        }
    }

    return (
        <div className='ItemDetail-Container' style={styles.div}>
            {isLoading ? (
                <div className='Spinner'>
                    <Spinner />
                </div>
            ) : (
                albumData.map((data) => {
                    return <ItemDetail product={data} />;
                })
            )
            }
        </div>
    )
}

export default ItemDetailContainer;