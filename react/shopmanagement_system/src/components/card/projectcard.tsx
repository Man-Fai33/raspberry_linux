import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import icons from '../image/12.jpg'
class CardInfo {
    photo: string = '';
    info: string = '';
    link: string = '';
}

export default function ProjectCard(cards: CardInfo) {
    return (

        <Card sx={{ maxWidth: 500 }} className='flex-none'>
            <CardActionArea>
                <div className='w-full p-2 text-xl '>

                    title

                </div>
                <div className="bg-cover  bg-center w-full  " style={{ backgroundImage: `url(${icons})`, height: '600px' }}  >
                </div>
                <CardContent>

                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea >
            <div className='p-2 text-right'>
                <Button size="small" color="primary">
                    Share
                </Button>
            </div>
        </Card >

    );
}