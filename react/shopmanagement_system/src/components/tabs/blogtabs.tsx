import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BlogCard from '../blog/blogcard';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ApiHelper } from '../../helper/apihelper';
import { Blog } from '../../models/blogModels';
import { SignedUser } from '../../models/userModels';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
function CustomTabPanel(props: {
    children?: React.ReactNode;
    index: number;
    value: number;
}) {

    const { children, value, index, ...other } = props;
    const list_select = [{ value: 'hot', title: "熱門" }, { value: 'new', title: "最新" }]
    const [selected, setSelected] = useState<{ value: string, title: string }>(list_select[0])


    return (
        <div
            className=' pb-4'
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <div className='mt-2 mb-2' >

                <Select
                    labelId="selected-id"
                    id="demo-simple-select"
                    defaultValue={selected.value}
                    onChange={(e: SelectChangeEvent) => {
                        // eslint-disable-next-line array-callback-return
                        list_select.map((value) => {
                            if (e.target.value === value.value) {
                                setSelected(value)
                            }
                        })
                    }}
                >
                    {list_select.map((item, index) => {
                        return (<MenuItem key={index} value={item.value} title={item.title}>{item.title}</MenuItem>)
                    })}
                </Select>

            </div>
            {value === index && <div className=' space-y-1' >{children}</div>}
        </div>
    );
}
function a11yProps(index: number) { return { id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`, }; }

export default function BlogTabs() {
    const [value, setValue] = React.useState(0);
    const [blog, setBlog] = useState<Blog[]>([])
    const data: SignedUser = useSelector((state: RootState) => state.user)
    const LoadBlog = async () => {
        await ApiHelper.AsyncBlogs().then((result: Blog[]) => { setBlog(result) })
    }

    useEffect(() => {
        LoadBlog()
    }, []);



    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="全部" {...a11yProps(0)} />
                    <Tab label="追蹤" {...a11yProps(1)} />
                    {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>

                <>
                    {blog.map(blog => <BlogCard key={blog._id} data={blog} userid={data._id} />)}

                </>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                追蹤hsihi
            </CustomTabPanel>
            {/* <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel> */}
        </Box>
    )
}