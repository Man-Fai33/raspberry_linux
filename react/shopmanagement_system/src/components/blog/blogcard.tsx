import React, { useEffect, useState } from 'react'
import Icon from '../image/12.jpg'
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import { red, blue, grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Menu, MenuItem } from '@mui/material';
import { Blog } from '../../models/blogModels';
export default function BlogCard(props: {
    data: Blog;
    userid: string;
}) {
    const [btnMore, setBtnMore] = React.useState<null | HTMLElement>(null);

    console.log(props.data)
    return (<div className='grid grid-rows-4 grid-flow-col gap bg-slate-200 p-4 rounded-md'>
        <div className='icon col-span-5 h-fit '>
            <div className=' relative w-full flex flex-row  items-center space-x-2 '>
                <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
                <div> - {props.data.ownerId}</div>
                <div className=' absolute right-0 '>
                    <Tooltip title="摸多">
                        <IconButton onClick={(event: React.MouseEvent<HTMLElement>) => { setBtnMore(event.currentTarget) }}>
                            <MoreVertRoundedIcon />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={btnMore}
                        id=''
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        keepMounted
                        open={Boolean(btnMore)}
                        onClose={() => { setBtnMore(null) }}
                    >
                        <MenuItem onClick={() => { setBtnMore(null) }}>
                            12312312
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
        <div className='title col-span-4  text-xl font-bold   '>
            {props.data.title}
        </div>
        <div className='content col-span-4 truncate '>
            <>{props.data.content.map((content) => { if (content.type === "text") { return content.value } })}</>
        </div>
        <div className='col-span-4  w-8/12'>
            <div className='grid grid-flow-col '>
                {/* like button */}
                <div className='grid-cols-1'>
                    <IconButton onClick={() => { alert(props.userid) }} >
                        <FavoriteRoundedIcon fontSize='medium' sx={{
                            color: props.data.like.some((value) => value._id === props.userid) ? red[400] : grey[500]
                        }} />
                    </IconButton>
                    {props.data.like.length}
                </div>
                {/* comment button  */}
                <div className='grid-cols-1'>
                    <IconButton onClick={() => { }}>
                        <ChatRoundedIcon fontSize='medium' sx={{
                            color: props.data.comments.some((value) => value === props.userid) ? blue[600] : grey[500]
                        }} />   </IconButton>
                    {props.data.comments.length}
                </div>


                {/* keep button */}
                <div className='grid-cols-1'>
                    <IconButton onClick={() => { }}>
                        <BookmarkRoundedIcon fontSize='medium' sx={{
                            color: props.data.keeper.some((value) => value._id === props.userid) ? blue[600] : grey[500]
                        }} />
                    </IconButton>
                    {props.data.keeper.length}
                </div>
            </div>
        </div>
        <div className={` relative row-span-3  col-span-1 flex justify-end `}>
            <img className='bg-cover rounded-md' style={{ width: '109px', height: '110px' }} src={Icon} alt="img" />
        </div>

    </div>)
}