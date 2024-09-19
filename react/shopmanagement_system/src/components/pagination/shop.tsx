import { Pagination, Stack } from "@mui/material";
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function ShopPagination(props: {
    currentItem: number,
    totalItems: number,
    setCurrentItem: React.Dispatch<React.SetStateAction<number>>
}) {

    return <>

        <Stack spacing={2}>
            <Pagination count={props.totalItems} 
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
                page={props.currentItem}
                onChange={(event: React.ChangeEvent<unknown>, value: number) => { props.setCurrentItem(value) }}
            />
        </Stack>
    </>
}