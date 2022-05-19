import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate();

    const changeRoute = (location) => {
        navigate(`/${location}`)
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link to={`/`} className="navbar-brand mb-0 h1" onClick={() => changeRoute('')}>CarTrawler</Link>
                    <div className="d-flex">
                        <div className='menu-item' onClick={(e) => e.preventDefault()}>CONTACT US</div>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar
