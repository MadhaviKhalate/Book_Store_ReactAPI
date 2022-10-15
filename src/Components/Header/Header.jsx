import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WhiteBookImage from '../../Assets/WhiteBookImage.png'
import CartImage from '../../Assets/CartImage.png'
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate3 = useNavigate();

    const openCart = () =>
{
     navigate3('/MyCart')
}    


return (
        <div class='mainOfHeader'>
            <div class='headerOfMainPage'>
                <div className='BookImagePart'>
                    <img className='imageOfBookStore' src={WhiteBookImage} /* width='30' */ />
                    <p className='paraOfBookStore'>Bookstore</p>
                </div>
                <div className='HomePageSearch'>
                    <div class='search-icon'><SearchIcon /></div>
                    <input placeholder="Search" class='searchBar'></input>
                </div>
                <div className="HomePageProfileAndCartIcon">
                    <div className='pAndC'>
                        <PersonOutlineOutlinedIcon style={{ color: "white" }} />
                        <p style={{ color: "white", fontSize:"small" }}>Profile</p>
                    </div>
                    <div className='pAndC'>
                        <img className='cartImage' src={CartImage} width='20' />
                        <p style={{ color: "white",fontSize:"small" }} onClick={openCart}>Cart</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header