import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';
class Skillinfo {
    name: string = '';
    num: number = 0;
}

export default function SkillProgress(skillinfo: Skillinfo) {
    return (
        <div className=' shadow-xl p-2  rounded-lg bg-slate-300'>

            <Grid container width={"100%"}  >
                <Grid item xs={3}   >
                    {skillinfo.name}
                </Grid>
                <Grid item xs={7} >
                    <LinearProgress className='p-1 m-2 rounded-sm' variant="determinate" value={skillinfo.num} />

                </Grid>
                <Grid item xs={2}  >
                    {skillinfo.num}%
                </Grid>

            </Grid>
        </div>


    )
}