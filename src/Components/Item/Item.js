import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./Item.css";
import { NavLink } from "react-router-dom";

export default function Item ({ data }) {
	const styles = {
		img: {
			padding: 10
		}
	}

	return (
		<Card className='container' sx={{ maxWidth: 345, margin: 10 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					style={styles.img}
					image={data.pictureUrl}
					alt='imagenProducto'
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{data.title}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{ justifyContent: "center" }}>
				<Button size="small" color="primary" className='btn'>
					<NavLink to={'/item/${data.id}'}>Ver producto</NavLink> 
				</Button>
			</CardActions>
		</Card>
	)
}
