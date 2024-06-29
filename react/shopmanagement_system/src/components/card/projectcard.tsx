import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, CardActionArea, CardActions } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/no-unused-vars



export default function ProjectCard(props: {
    title: string,
    year: string,
    photo: string[],
    description: string,
    link: string,
    onclick: () => void
}) {
    return (

        <div className='flex-none  w-2/5 max-lg:w-full bg-white rounded-lg '>
            <CardActionArea>
                <div className='w-full p-2 text-xl '>

                    {props.title} - {props.year}

                </div>
                <div className="bg-cover  bg-center w-full" style={{ backgroundImage: `url( ` + props.photo[0] + `)`, height: '450px' }}  >
                </div>
                <CardContent>

                    <Typography className=' truncate' variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea >
            <div className='p-2 text-right'>
                <Button size="small" variant='outlined' color="primary" onClick={props.onclick}>
                    資訊
                </Button>
            </div>
        </div >

    );
}