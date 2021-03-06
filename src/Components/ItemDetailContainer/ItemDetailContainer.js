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

const ItemDetailContainer = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [albumData, setAlbumData] = useState([]);
    
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
                    return (
                        <div key={data.id}>
                            <ItemDetail product={data} />
                        </div>
                    ); 
                })
            )
            }
        </div>
    );
};

export default ItemDetailContainer;