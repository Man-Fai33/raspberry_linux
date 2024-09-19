import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, IconButton, InputBase, InputLabel, MenuItem, Popover, Select, Typography } from "@mui/material";
import { FilterType } from "../../models/filterModels";





export default function ShopItemFilter(props: {
    filter: FilterType
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>
    currentPage: number
    totalPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}) {

    const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: string) => {
        switch (newPage) {
            case 'prePage':
                props.setCurrentPage(props.currentPage - 1)

                break;
            case 'nextPage':
                props.setCurrentPage(props.currentPage + 1)

                break;

        }
    };

    const [searchText, setSearchText] = useState<string>('')
    useEffect(() => { console.log(props.filter.search) }, [props.filter.search])

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const open = Boolean(anchorEl);
    return (
        <div className="  bg-slate-100 pt-2 pb-2 pr-3 pl-3 rounded-md space-y-3">
            <div className=" space-x-2 relative">
                <div className="space-x-2">
                    <Button aria-describedby={open ? 'simple-popover' : undefined} variant="contained" onClick={handleClick} disabled> 分類</Button>
                    <Button aria-describedby={open ? 'simple-popover' : undefined} variant="contained" onClick={handleClick} disabled> 運送方式</Button>
                    <Button aria-describedby={open ? 'simple-popover' : undefined} variant="contained" onClick={handleClick} disabled> 價格範圍                    </Button>
                    <Popover
                        id={open ? 'simple-popover' : undefined}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={() => { setAnchorEl(null) }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                    </Popover>
                </div>
                {/* <Button variant="contained"> 評價</Button> */}
                {/* <Button variant="contained"> 價格範圍</Button> */}
                <div className=" absolute right-0 top-0 w-1/2 flex-nowrap  flex justify-end  ">
                    <InputBase
                        value={searchText || ''}
                        className=" w-4/5 bg-stone-200 rounded-md p-2 hover:bg-stone-300"
                        placeholder="查詢"
                        onChange={(e) => setSearchText(e.target.value.trim())}
                    />
                    <IconButton className=" rounded-xl  hover:bg-gray-400" type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => {
                        props.setFilter({ ...props.filter, search: searchText })
                        if (searchText !== '') {
                            props.setCurrentPage(1)
                        }
                    }}   >
                        <SearchIcon />
                    </IconButton>
                </div>
            </div>

            <div className="w-full grid  gap-4 mt-2 mb-2 ">
                <div className="col-start-1  col-end-3  items-center flex ">
                    <div className="m-1">篩選</div>
                    <ToggleButtonGroup
                        orientation="horizontal"
                        color="error"
                        value={props.filter.totalTypeChoice || ""}
                        exclusive
                        size="small"
                        onChange={(e, v) => {
                            props.setFilter({ ...props.filter, totalTypeChoice: v, price: "" })

                        }}
                    >
                        <ToggleButton value="totalRank" aria-label="list">
                            綜合排名
                        </ToggleButton>
                        <ToggleButton value="hot" aria-label="module">
                            熱銷
                        </ToggleButton>
                        {/* <ToggleButton value="price" aria-label="module">
                            價格
                        </ToggleButton> */}
                    </ToggleButtonGroup>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="shop-price-choice-label">價格</InputLabel>
                        <Select
                            labelId="shop-price-choice-label"
                            id="shop-price-choice"
                            label="Price"
                            value={props.filter.price || ""}
                            onChange={(e) => props.setFilter({ ...props.filter, price: String(e.target.value) })}
                        >
                            <MenuItem value="">
                                未選擇
                            </MenuItem>
                            <MenuItem value="lower" >價格：從低到高</MenuItem>
                            <MenuItem value="higher">價格：從高到低</MenuItem>

                        </Select>
                    </FormControl>
                </div>

                <div className=" col-start-3 col-end-6 flex justify-end items-center space-x-3">
                    <div> {props.currentPage}/{props.totalPage}</div>
                    <ToggleButtonGroup
                        orientation="horizontal"
                        exclusive
                        onChange={handlePageChange}
                        size="small"
                    >
                        <ToggleButton value="prePage" aria-label="prePage" disabled={props.currentPage === 1}>
                            <KeyboardArrowLeftIcon />
                        </ToggleButton>
                        <ToggleButton value="nextPage" aria-label="nextPage" disabled={props.currentPage === props.totalPage}>
                            <KeyboardArrowRightIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        </div>)
}

