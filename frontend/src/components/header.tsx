import { useLocation } from 'react-router-dom';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CropFreeIcon from '@material-ui/icons/CropFree';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import "./header.scss";

function Header() {

  const location = useLocation();

  const header = location.pathname === "/" ? <></> : 
  (
    <header className="header">
      <div className="logo-wrapper"></div>
      <div className="header-content">
        <div className="menu">
          <a href='/scanner' className={location.pathname === '/scanner' ? 'selected' : ''}>
            <CropFreeIcon style={{ color: location.pathname === '/scanner' ? '#FBA320' : 'grey' }}/>
          </a>
          <a href='/inventory' className={location.pathname === '/inventory' ? 'selected' : ''}>
            <BarChartIcon style={{ color: location.pathname === '/inventory' ? '#FBA320' : 'grey' }}/>
          </a>

        </div>
        <div>

          <span className="user-name">Firstname Lastname</span>
          <AccountCircleIcon className="user-icon" />
          <a href="/"><ExitToAppIcon style={{color: 'grey', cursor: 'pointer'}}/></a>
        </div>
      </div>
    </header> 
  )
  return (header);
}

export default Header;