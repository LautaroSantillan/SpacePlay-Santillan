import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
	const [articles, setArticles] = useState([]);

	console.log('Productos:', articles);

	useEffect(() => {
		fetch('https://62aa950c371180affbd78121.mockapi.io/api/prod-ps5/articulos')
			.then((response) => response.json())
			.then((json) => setArticles(json));
	}, []);

	return (
		<ItemList articles={articles}/>
	);
};

export default ItemListContainer;