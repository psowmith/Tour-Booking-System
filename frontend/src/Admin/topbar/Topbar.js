import './topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <div className="topLeft">
                    <span className="logo">Iamadmin</span>
                </div>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon style={{margin:'0%',bottom:'140%'}}/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon style={{margin:'0%',bottom:'140%'}}/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon style={{margin:'0%',bottom:'140%'}}/>
                </div>
                <div className="topbarIconContainer">
                    <PersonIcon style={{margin:'0%',bottom:'140%'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
