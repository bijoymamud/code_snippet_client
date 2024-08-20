import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function componentName() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default componentName
