//IMPORTS
import React, { useState, useEffect } from 'react';
//Componente
import ItemList from "../ItemList/ItemList"; 
//Firebase-Firestone
import { db } from "../../Firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const [albumsData, setAlbumsData] = useState([]);

	const getAlbums = async () => {
		const q = query(collection(db, "playstation"));
		const querySnapshot = await getDocs(q);
		const docs = [];
		querySnapshot.forEach((doc) => {
			docs.push({...doc.data(), id: doc.id})
		});
		setAlbumsData(docs);
	};
    
	useEffect(() => {
		getAlbums();
	}, []);

	return (
        <div key={albumsData.id}>
            <ItemList articles={albumsData}/>
        </div>
	);

};

export default ItemListContainer;