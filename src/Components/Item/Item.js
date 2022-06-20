import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Item.css";
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { CenterFocusStrong } from '@mui/icons-material';

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
				<Typography gutterBottom variant='h5' component='div'>
						{data.title}
					</Typography>
					<Typography variant='body2' color='text.secondary' marginBottom={1} fontWeight="bolder" fontSize={20}>
						<button className='btn'>Ver producto</button>
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
