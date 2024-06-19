import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, CardActionArea, CardActions } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import icons from '../image/12.jpg'
import bgi from '../image/background.jpeg'


export default function ProjectCard(props: {
    photo: string,
    info: string,
    link: string,
    onclick: () => void
}) {
    return (

        <Card sx={{ maxWidth: 500 }} className='flex-none '>
            <CardActionArea>
                <div className='w-full p-2 text-xl '>

                    title

                </div>
                <div className="bg-cover  bg-center w-full  " style={{ backgroundImage: `url(https://picsum.photos/1920/1080)`, height: '450px' }}  >
                </div>
                <CardContent>

                    <Typography className=' truncate' variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica   Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica   Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica   Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica   Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea >
            <div className='p-2 text-right'>
                <Button size="small" color="primary" onClick={props.onclick}>
                    Share
                </Button>
            </div>
        </Card >

    );
}