import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = ({authenticate,setAuthenticate}) => {
    const menuList=['여성','Divided',"남성","신생아/유아","H&M Home","Sale","지속가능성",];
    const navigate=useNavigate()
    
    const goToLogin=()=>{
        navigate("/login");
    }
  
  return (
  <div>
    <div>
        {authenticate ? (
            <div class="logout-button" onClick={()=>setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser}/>
            <div>로그아웃</div>
        </div>
        ):(
        <div class="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser}/>
            <div>로그인</div>
        </div>
        )}
        
    </div>
    <div className="nav-section">
        <img alt=""
            width={100}
            src="https://thumbs.dreamstime.com/z/hm-h-m-logo-editorial-illustrative-white-background-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-210442760.jpg"/>
    </div>
    <div className="menu-area">
        
        <ul className="menu-list">
            {menuList.map((menu)=>(
                <li>{menu}</li>
            ))}
        </ul>
        
        <div className="search-box">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text"/>
        </div>
    </div>

    </div>
  )
}

export default Navbar