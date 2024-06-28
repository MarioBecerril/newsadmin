import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import MenuComplete from './MenuComplete';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import GetCurrentToken from '../app/GetCurrentToken';

export function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const userToken = GetCurrentToken();
  const userName = "User: " + userToken.userTokenData.username;

  const [addModules, setModules] = useState(false);
  const userPermits = userToken.userTokenData.permissions;
  const [SidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    if (!addModules) {
      MenuComplete.map((item) => {
        const filtered = userPermits.filter(validItem => validItem.includes(item.permission)); 
        if(item.permission === '' ){
          setSidebarData(SidebarData => [...SidebarData, item])
        } else if(filtered.length > 0) {
          setSidebarData(SidebarData => [...SidebarData, item]);
        }
        return item;
      })
      setModules(true);
    }
  }, [addModules, userPermits, SidebarData]);

  const handleChange = event => {
    if(event.target.value == 3){
      localStorage.clear();
      window.location.href='/'
      return null;
    }
  };

  return (<>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div> 
          <Row className="g-1">
            <Col md>
                <Form.Select onChange={handleChange}>
                  <option >{userName}</option>
                  <option value="1">Configuracion</option>
                  <option value="2">Mi Cuenta</option>
                  <option value="3">Cerrar Sesion</option>
                </Form.Select>
            </Col>
          </Row>
          </div>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>)
}