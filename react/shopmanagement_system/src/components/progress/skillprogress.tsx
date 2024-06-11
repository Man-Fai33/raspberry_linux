import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';
class Skillinfo {
    name: string = '';
    num: number = 0;
}

export default function SkillProgress(skillinfo: Skillinfo) {
    return (
        <>

            <Grid container width={"80%"}>
                <Grid item xs={2}>
                    {skillinfo.name}
                </Grid>
                <Grid item xs={9}>
                    <LinearProgress className='p-1 m-2 rounded-sm' variant="determinate" value={skillinfo.num} />

                </Grid>
                <Grid item xs={1}>
                    {skillinfo.num}
                </Grid>

            </Grid>
        </>


    )
}