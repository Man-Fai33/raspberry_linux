import Index from "../pages/index"
import Personal_Profile from "../pages/personal_profile"
const routers = [
    { path: '/', element: <Index /> },
    // eslint-disable-next-line react/jsx-pascal-case
    { path: '/personal_profile', element: <Personal_Profile /> },
    // { path: 'sa_add', element: <SCAdd /> },
    // { path: 'sa_edit', element: <SCEdit /> },
    // { path: 'sa_delete', element: <SCDelete /> },
    // { path: 'profile', element: <Profile /> },
    // { path: 'sm_ac', element: <AcManagement /> },
    // { path: 'sm_storage', element: <AcManagement /> },
    // { path: 'sm_vcenter', element: <AcManagement /> },
]

export default routers