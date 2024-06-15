import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DescriptionIcon from '@mui/icons-material/Description';
import AdminHome from './AdminHome';
import CommonSetting from './CommonSetting';
import ArticleIcon from '@mui/icons-material/Article';
import LayersIcon from '@mui/icons-material/Layers';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Tooltip from '@mui/material/Tooltip';

export default function AdminDashboard() {
    const [side, setSide] = useState(false);
    const [activeMenu, setActiveMenu] = useState("dashboard");

    const handleClick = () => {
        setSide(!side);
        console.log("side", side) // Toggles the state between true and false
    };


    return (

        <div className='container-fluid'>

            {/* <!-- SIDEBAR --> */}
            <section id="sidebar" className={side ? 'hide' : ''}>
                <a href="/" className="brand tptp">
                    <img src='Avatar1.png' alt='' className='dash-avt' />
                </a>
                <ul className="side-menu top">
                    <li className={activeMenu === 'dashboard' ? 'active' : ''}>
                        <Tooltip title="Dashboard" placement="right">
                            <Link to="" className='tptp' onClick={() => setActiveMenu('dashboard')}>
                                <DashboardIcon />
                                <span className="text mx-2">{side ? '' : 'Dashboard'}</span>
                            </Link>
                        </Tooltip>
                    </li>
                    <li className={activeMenu === 'home' ? 'active' : ''}>
                        <Tooltip title="Home" placement="right">
                            <Link to="" className='tptp' onClick={() => setActiveMenu('home')}>
                                <HomeIcon />
                                <span className="text mx-2 ">{side ? '' : 'Home '}</span>
                            </Link>
                        </Tooltip>
                    </li>
                    <li className={activeMenu === 'commonsetting' ? 'active' : ''}>
                        <Tooltip title="CommonSetting" placement="right">
                            <Link to="" className='tptp' onClick={() => setActiveMenu('commonsetting')}>
                                <SettingsIcon />
                                <span className="text mx-2">{side ? '' : 'CommonSetting'}</span>
                            </Link>
                        </Tooltip>
                    </li>
                    <li className={activeMenu === 'banner' ? 'active' : ''}>
                        <Tooltip title="Banner" placement="right">
                            <Link to="" className='tptp' onClick={() => setActiveMenu('banner')}>
                                <ArticleIcon />
                                <span className="text mx-2">{side ? '' : 'Banner'}</span>
                            </Link>
                        </Tooltip>
                    </li>
                    <li className={activeMenu === 'pages' ? 'active' : ''}>
                        <Tooltip title="Pages" placement="right">
                            <Link to="" className='tptp' onClick={() => setActiveMenu('pages')}>
                                <LayersIcon />
                                <span className="text mx-2">{side ? '' : 'Pages'}</span>
                            </Link>
                        </Tooltip>
                    </li>
                    <li className={activeMenu === 'blogs' ? 'active' : ''}>
                        <Tooltip title="Blogs" placement="right">
                            <Link to="" className='tptp' onClick={() => setActiveMenu('blogs')}>
                                <DescriptionIcon />
                                <span className="text mx-2">{side ? '' : 'Blogs'}</span>
                            </Link>
                        </Tooltip>
                    </li>
                    <li className={activeMenu === 'leads' ? 'active' : ''}>
                        <Tooltip title="Leads" placement="right">
                            <Link to="" className='tptp' onClick={() => setActiveMenu('leads')}>
                                <LocalLibraryIcon />
                                <span className="text mx-2">{side ? '' : 'LeadsEnquiry'}</span>
                            </Link>
                        </Tooltip>
                    </li>
                    <li className={activeMenu === 'logout' ? 'active' : ''} >
                        <Tooltip title="Logout" placement="right">
                            <Link to="" className="logout tptp" onClick={() => setActiveMenu('logout')}>
                                <LogoutIcon />
                                <span className="text mx-2">{side ? '' : 'Logout'}</span>
                            </Link>
                        </Tooltip>
                    </li>

                </ul>
            </section>
            {/* <!-- SIDEBAR --> */}


            {/* <!-- CONTENT --> */}
            <section id="content">

                {/* <!-- NAVBAR --> */}
                <nav className='nav-nav'>
                    <DensityMediumIcon onClick={handleClick} />
                    <h5 className='pt-2 mx-3'>Welcome Aditya</h5>
                    <Link to="" className="profile">
                        <img src="Avatar1.png" alt='' />
                    </Link>
                </nav>
                {/* <!-- NAVBAR --> */}

                {/* <!-- MAIN --> */}
                <main>
                    {activeMenu === "dashboard" && (
                        <div className='dimdom my-2 '>
                            <div className="left">
                                <h1>Dashboard</h1>

                            </div>

                            <ul className="box-info">
                                <li onClick={() => setActiveMenu('dashboard')}>
                                    <DashboardIcon className='bx bxs-calendar-check' />
                                    <span className="text">
                                        <h5>Dashboard</h5>
                                    </span>
                                </li>
                                <li onClick={() => setActiveMenu('home')}>
                                    <HomeIcon className='bx bxs-group' />
                                    <span className="text">
                                        <h5>Home</h5>
                                    </span>
                                </li>
                                <li onClick={() => setActiveMenu('commonsetting')}>
                                    <SettingsIcon className='bx bxs-dollar-circle' />
                                    <span className="text">
                                        <h5>CommonSetting</h5>
                                        <p>Not Verified Users </p>
                                    </span>
                                </li>
                                <li onClick={() => setActiveMenu('banner')}>
                                    <ArticleIcon className='bx bxs-dollar-circle' />
                                    <span className="text">
                                        <h5>Banner</h5>
                                        <p>Manages Banner </p>
                                    </span>
                                </li>
                                <li onClick={() => setActiveMenu('pages')}>
                                    <LayersIcon className='bx bxs-dollar-circle' />
                                    <span className="text">
                                        <h5>Pages</h5>
                                        <p>Manages Pages </p>
                                    </span>
                                </li>
                                <li onClick={() => setActiveMenu('blogs')}>
                                    <DescriptionIcon className='bx bxs-dollar-circle' />
                                    <span className="text">
                                        <h5>Blogs</h5>
                                        <p>Not Verified Users </p>
                                    </span>
                                </li>
                                <li onClick={() => setActiveMenu('leads')}>
                                    <LocalLibraryIcon className='bx bxs-dollar-circle' />
                                    <span className="text">
                                        <h5>Leads</h5>
                                        <p>Not Verified Users </p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )}
                    {activeMenu === "home" && (
                        <AdminHome />
                    )}
                    {activeMenu === "commonsetting" && (
                        <CommonSetting
                        />
                    )}
                </main>
                {/* <!-- MAIN --> */}
            </section>
            {/* <!-- CONTENT --> */}

        </div>
    )
}
