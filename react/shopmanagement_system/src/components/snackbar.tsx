import { Snackbar, SnackbarOrigin } from '@mui/material'
import React from 'react'
interface SnackBarProps {
    vertical: 'top' | 'bottom';
    horizontal: 'center' | 'left' | 'right';
    open: boolean;
}
export default function SnackBar(props: SnackBarProps) {

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }}
                open={props.open}

                message="I love snacks"
                autoHideDuration={1200}

                key={props.vertical + props.horizontal}
            />
        </>
    )
}