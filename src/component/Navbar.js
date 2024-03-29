import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({authenticate,setAuthenticate}) => {
    const menuList=['여성','Divided',"남성","신생아/유아","H&M Home","Sale","지속가능성",];
    const navigate=useNavigate();
    const [width, setWidth]=useState(0);
    
    const goToLogin=()=>{
        navigate("/login");
    }
    const search=(event)=>{
        if(event.key==="Enter") {
            //입력한 검색어를 읽어와서
            let keyword=event.target.value;
            
            //url을 바꿔준다
            navigate(`/?q=${keyword}`)
        }
    }
  
  return (
  <div>
    <button onClick={() => setWidth("250px")}>Category</button>

    <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </div>
    </div>

    <div>
        {authenticate ? (
            <div className="logout-button" onClick={()=>setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser}/>
            <div>로그아웃</div>
        </div>
        ):(
        <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser}/>
            <div>로그인</div>
        </div>
        )}
        
    </div>
    <div className="nav-section">
        <Link to="/">
        <img alt=""
            width={100}
            src="https://thumbs.dreamstime.com/z/hm-h-m-logo-editorial-illustrative-white-background-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-210442760.jpg"/>
        </Link>
    </div>
    <div className="menu-area">
        
        <ul className="menu-list">
            {menuList.map((menu,index)=>(
                <li key={index}>{menu}</li>
            ))}
        </ul>
        
        <div className="search-box">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" onKeyPress={(event)=> search(event)}/>
        </div>
    </div>

    </div>
  )
}

export default Navbar;