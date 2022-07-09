//IMPORTS
import React, { useState, useEffect } from 'react';
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

    //Estilos en linea
    const styles = {
        div:{
            paddingTop: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }

	return (
		<div style={styles.div}>
			{isLoading ? (
				<div className='Spinner'>
					<Spinner />
				</div>
			) : (
				albumData.map((data) => {
					return <Item data={data} />;
				})
			)}
		</div>
	);
};

export default CategoryType;
