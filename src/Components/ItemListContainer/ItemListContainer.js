//IMPORTS
import React, { useState, useEffect } from 'react';
import axios from "axios";
//Componente
import ItemList from "../ItemList/ItemList"; 

const ItemListContainer = () => {
	const [articles, setArticles] = useState([]);

	// useEffect(() => {
	// 	fetch('https://62aa950c371180affbd78121.mockapi.io/api/prod-ps5/articulos')
	// 		.then((response) => response.json())
	// 		.then((json) => setArticles(json));
	// }, []);

	useEffect(() => {
        axios(`https://62aa950c371180affbd78121.mockapi.io/api/prod-ps5/articulos`).then((res) =>
            setArticles(res.data),
        );
    }, []);

	console.log('Productos:', articles);

	return (
		<ItemList articles={articles}/>
	);
};

export default ItemListContainer;