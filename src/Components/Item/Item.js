import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../../Components/ItemCount/ItemCount';

export default function Item ({ data }) {
	const agregarAlCarrito = (cant) => {
		console.log(`Se agregaron ${cant} unidades al carrito`)
	}

	const styles = {
		img: {
			padding: 10
		}
	}

	return (
		<Card sx={{ maxWidth: 345, margin: 10, border: "1px solid black" }}>
			<CardActionArea>
				<CardMedia
					component='img'
					style={styles.img}
					image={data.pictureUrl}
					alt='imagenProducto'
				/>
				<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
						{data.title}
					</Typography>
					<Typography variant='body2' color='text.secondary' marginBottom={1} fontWeight="bolder" fontSize={20}>
						${data.price}
					</Typography>
					<Typography variant='body3' color='text.secondary' fontSize={15}>
						{data.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<hr></hr>
			<div className='count-container'>
				<ItemCount stock={5} initial={1} onAdd={agregarAlCarrito} />
			</div>
		</Card>
	);
}
