import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router';
import { getProducts } from "../../productos"

const ItemListContainer = () => {
	const [articles, setArticles] = useState([]);

	let { category } = useParams();

	useEffect(() => {
		getProducts(category)
		fetch('https://62aa950c371180affbd78121.mockapi.io/api/prod-ps5/articulos')
			.then((response) => response.json())
			.then((json) => setArticles(json));
	}, [category]);

	console.log('Productos:', articles);

	return (
		<ItemList categoria={articles.category} articles={articles}/>
	);
};

export default ItemListContainer;