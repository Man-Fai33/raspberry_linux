import React, { ChangeEvent, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Modal from '@mui/material/Modal';
import { IconButton, TextField, Tooltip } from '@mui/material';

export default function CreateBlogModal(props: {
    open: boolean
    setOpen: () => void
}) {
    const [title, setTitle] = useState('');
    const contentRef = useRef<HTMLDivElement>(null);
    const handleImageInsert = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target?.result as string;
                if (contentRef.current) {
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    imgElement.alt = 'Uploaded Image';
                    imgElement.style.maxWidth = '100%';
                    contentRef.current.appendChild(imgElement);
                    // const selection = window.getSelection();
                    // if (selection && selection.rangeCount > 0) {
                    //     const range = selection.getRangeAt(0);
                    //     range.deleteContents();
                    //     range.insertNode(imgElement);
                    //     range.collapse(false);
                    // }
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const HandleSubmit = async () => {
        console.log(contentRef.current)

    }


    return (
        <div className='max-lg:hidden bg-red-200 pt-5 text-center'>
            <Modal
                open={props.open}
                onClose={props.setOpen}
            >
                <div className=' absolute w-1/2 top-20  right-1/4 h-4/5 bg-white rounded-md  p-4 '>
                    <div className=' relative h-full space-y-5'>
                        <TextField fullWidth id="outlined-basic" label="標題" variant="outlined" value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                        <div className=' overflow-y-scroll   h-2/3 p-1 pr-3 border'>
                            <div
                                ref={contentRef}
                                contentEditable
                                className="h-full content-display"
                                style={{
                                    whiteSpace: 'pre-wrap',
                                    wordWrap: 'break-word',
                                    outline: 'none',
                                    padding: '8px',
                                }}
                            ></div>
                        </div>
                        <div className='flex-row'>
                            <Tooltip title="插入圖片">
                                <IconButton component="label" >
                                    <ImageOutlinedIcon />
                                    <input

                                        hidden
                                        type="file"
                                        accept="image/jpg,image/jpeg,image/png,image/gif"
                                        onChange={handleImageInsert}
                                    />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='absolute bottom-4 justify-center flex w-full'>
                        <Button variant='outlined' onClick={HandleSubmit}>發布</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}