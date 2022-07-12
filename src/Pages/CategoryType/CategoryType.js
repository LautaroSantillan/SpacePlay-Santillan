//IMPORTS
import React, { useState, useEffect } from 'react';
//Estilos
import "./CategoryType.css";
//React-Router-DOM
import { useParams } from 'react-router-dom';
//Componentes
import Item from "../../Components/Item/Item";
import Spinner from "../../Components/Spinner/Spinner";
// Firebase-Firestone
import { db } from "../../Firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
//DEVELOPING
const CategoryType = () => {
	const [albumData, setAlbumData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	console.log(albumData);

	const { category } = useParams();
	//Obtener los category de Firebase
	useEffect(() => {
		const getAlbums = async () => {
			const q = query(collection(db, 'playstation'), where('category', '==', category));
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setAlbumData(docs);
		};
		getAlbums();
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, [category]);

	return (
		<div className='categorytype-container'>
			{isLoading ? (
				<div className='Spinner'>
					<Spinner />
				</div>
			) : (
				albumData.map((data) => {
					return (
						<div key={albumData.id}>
                            <Item data={data} />
                        </div>
					);
				})
			)}
		</div>
	);
};

export default CategoryType;
