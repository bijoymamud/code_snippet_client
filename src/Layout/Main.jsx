import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function componentName() {
    return (
        <div className='mt-2'>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default componentName
