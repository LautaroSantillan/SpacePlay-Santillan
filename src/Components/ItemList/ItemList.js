import React, { useState, useEffect } from 'react';

import Item from '../Item/Item';

const ItemList = () => {
	const [articles, setArticles] = useState([]);

	console.log('Productos:', articles);

	useEffect(() => {
		fetch('https://62aa950c371180affbd78121.mockapi.io/api/prod-ps5/articulos')
			.then((response) => response.json())
			.then((json) => setArticles(json));
	}, []);

	const styles = {
		cards: {
			padding: 10,
			margin: 10,
			display: "flex",
			flexWrap: "wrap",
			marginRight: "-15px",
			marginLeft: "-15px",
			justifyContent: "center"
		}
	}

	return (
		<div className='ArticleSection' style={styles.cards}>
			{articles.map((article) => (
				<Item key={article.id} data={article} />
			))}
		</div>
	);
};

export default ItemList;
