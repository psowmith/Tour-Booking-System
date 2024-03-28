import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar1'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <div className="sidebarList">
                <Link to='/admin/' className='link'>
                    <div className="sidebarListItem active1">
                        <LineStyleIcon className='icon'/>
                        <p>Home</p>
                    </div>
                </Link>
                <div className="sidebarListItem">
                    <TimelineIcon className='icon'/>
                    <p className='an'>Analysis</p>
                </div>
                <div className="sidebarListItem">
                    <TrendingUpIcon className='icon'/>
                    <p>Sales</p>
                </div>
            </div>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <div className="sidebarList">
                <Link to='/admin/users' className='link'>
                    <div className="sidebarListItem">
                        <PermIdentityOutlinedIcon className='icon'/>
                        <p>Users</p>
                    </div>
                </Link>
                <Link to='/admin/products' className='link'>
                    <div className="sidebarListItem">
                        <Inventory2OutlinedIcon className='icon'/>
                        <p >Products</p>
                    </div>
                </Link>
                <div className="sidebarListItem">
                    <AttachMoneyOutlinedIcon className='icon'/>
                    <p className='an'>Transactions</p>
                </div>
                <div className="sidebarListItem">
                    <BarChartIcon className='icon'/>
                    <p className='an'>Reports</p>
                </div>
            </div>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <div className="sidebarList">
                <div className="sidebarListItem">
                    <EmailOutlinedIcon className='icon'/>
                    <p>Mail</p>
                </div>
                <div className="sidebarListItem">
                    <ModeCommentIcon className='icon'/>
                    <p className='an'>Feedback</p>
                </div>
                <div className="sidebarListItem">
                    <MessageOutlinedIcon className='icon'/>
                    <p className='an'>Messages</p>
                </div>
            </div>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <div className="sidebarList">
                <div className="sidebarListItem">
                    <WorkOutlineOutlinedIcon className='icon'/>
                    <p>Manage</p>
                </div>
                <div className="sidebarListItem">
                    <TimelineIcon className='icon'/>
                    <p className='an'>Analytics</p>
                </div>
                <div className="sidebarListItem">
                    <ReportIcon className='icon'/>
                    <p>Reports</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
