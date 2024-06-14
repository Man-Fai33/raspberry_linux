import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SkillProgress from '../progress/skillprogress';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SkillSwitchTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable">
                    <Tab label="語言" {...a11yProps(4)} />
                    <Tab label="前端技能" {...a11yProps(0)} />
                    <Tab label="後端技能" {...a11yProps(1)} />
                    <Tab label="資料庫" {...a11yProps(2)} />
                    <Tab label="資料庫" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}  >
                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                    <SkillProgress name={'hi'} num={10} />
                </div>
            </CustomTabPanel>
        </Box>
    );
}
