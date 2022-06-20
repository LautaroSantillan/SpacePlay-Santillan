import Item from '../Item/Item';

const ItemList = ({articles}) => {
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
