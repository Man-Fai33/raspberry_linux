import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SkillProgress from '../progress/skillprogress';
type Technology = {
    frontend: Skill[],
    backend: Skill[],
    language: Skill[],
    database: Skill[],
    other: Skill[]
};

type Skill = {
    name: string,
    num: number
};

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
            {value === index && <div className='p-3 max-md:p-1'>{children}</div>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function SkillSwitchTabs(props: { data: Technology | undefined }) {
    const [value, setValue] = React.useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const Panel = (value: number, num: number, skill: Skill[] | undefined) => {


        return <CustomTabPanel value={value} index={num}  >
            <div className='grid grid-cols-2 grid-flow-row gap-6 max-lg:grid-cols-1 max-lg:gap-4 max-md:gap-3  '>
                {skill?.map((s, index) => (
                    <SkillProgress key={index} name={s.name} num={s.num} />
                ))}

            </div>
        </CustomTabPanel>
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'   }}>
                <Tabs value={value} onChange={handleChange}   variant="scrollable"  className=' w-3/4'  >
                    <Tab label="語言" {...a11yProps(0)} />
                    <Tab label="前端技能" {...a11yProps(1)} />
                    <Tab label="後端技能" {...a11yProps(2)} />
                    <Tab label="資料庫" {...a11yProps(3)} />
                    <Tab label="其他" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <div className='p-4 max-lg:p-2  max-md:p-0'>
                {Panel(value, 0, props.data?.language)}
                {Panel(value, 1, props.data?.frontend)}
                {Panel(value, 2, props.data?.backend)}
                {Panel(value, 3, props.data?.database)}
                {Panel(value, 4, props.data?.other)}
            </div>
        </Box>
    );
}
