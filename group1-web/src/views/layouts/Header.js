import {Link} from "react-router-dom";
import logo from '../pages/image/keysoft-logo.png';
import placeHolder from '../pages/image/placeholder.jpg';

function Header(){
    return(
    <div className="navbar navbar-expand-md navbar-light">
        <div className="navbar1 navbar-brand" >

                <img src={logo} width="100px" height="500px" alt="No image"/>

        </div>
        <div className="d-md-none">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile"><i
                className="icon-tree5" /></button>
            <button className="navbar-toggler sidebar-mobile-main-toggle" type="button"><i className="icon-paragraph-justify3" /></button>
        </div>
        <div className="collapse navbar-collapse" id="navbar-mobile">


            <span className="navbar-text ml-md-3 mr-md-auto">
				<span className="badge bg-success">Online</span>
			</span>



            <ul className="navbar-nav">



                <li className="nav-item dropdown dropdown-user">
                    <Link href=""  className="navbar-nav-link dropdown-toggle" data-toggle="dropdown"><img src={placeHolder} className="rounded-circle" alt="" /><span>cust@keysoft.vn</span></Link>
                    <div className="dropdown-menu dropdown-menu-right">


                        <div className="dropdown-divider" />

                        <Link  className="dropdown-item"><i className="icon-rotate-ccw2" />Thay đổi mật khẩu</Link>
                        <Link to="#"  className="dropdown-item"><i className="icon-switch2" />Đăng xuất</Link>
                    </div>
                </li>
            </ul>



        </div>
    </div>

);
}
export default Header ;