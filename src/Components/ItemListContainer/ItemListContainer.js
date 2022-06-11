import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react';

const CardComponent = ({ img, name, price, description }) => {
    // cont [add, setAdd] = useState()
	
	// const onAdd = (qty) => {
	// 	setAdd(add)
    // } 

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' image={img} alt='green iguana' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{price}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
				{/* <div className='count-container'>
					<ItemCount stock={5} initial={1} onAdd={onAdd} />
				</div> */}
			</CardActionArea>
		</Card>
	);
};

export default CardComponent;