import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react';

const ItemListContainer = ({ img, name, price, description }) => {
    const agregarAlCarrito = (cant) => {
		console.log(`Se agregaron ${cant} unidades al carrito`)
	}

	return (
		<Card sx={{ maxWidth: 345}}>
			<CardActionArea>
				<CardMedia component='img' image={img} alt='green iguana' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{name}
					</Typography>
					<Typography variant='body2' color='text.secondary' marginBottom={1} fontWeight="bolder" fontSize={20}>
						{price}
					</Typography>
					<Typography variant='body2' color='text.secondary' fontSize={15}>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<div className='count-container'>
				<ItemCount stock={5} initial={1} onAdd={agregarAlCarrito} />
			</div>
		</Card>
	);
};

export default ItemListContainer;