//IMPORTS
import React, { useState, useEffect } from 'react';
import axios from "axios";
//Componente
import ItemList from "../ItemList/ItemList"; 
//React-Router-DOM
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	const [articles, setArticles] = useState([]);

    const { category } = useParams();

	// useEffect(() => {
    //     axios(`https://62aa950c371180affbd78121.mockapi.io/api/prod-ps5/articulos`).then((res) =>
    //         setArticles(res.data),
    //     );
    // }, []);

    useEffect(() => {
        axios(`https://62aa950c371180affbd78121.mockapi.io/api/prod-ps5/articulos`).then((res) => {
        const productos = res.data ? res.data.filter(unItem => unItem.categoria === category) : res.data
        setArticles(productos);
        });
    }, [category]);

	console.log('Productos:', articles);


	return (
        <div key={articles.category}>
            <ItemList articles={articles}/>
        </div>
	);

};

export default ItemListContainer;