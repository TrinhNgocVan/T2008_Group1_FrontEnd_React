import React from "react";
import './Header.css';
import {connect} from "react-redux";

 class Header extends React.Component{
    constructor(props) {
        super(props);
    }

     render() {
         const username = this.props.username
        console.log('username in header',username);

        return <div className="header">
            <div className="header-right">
                <a href="#">Account : </a>
            </div>
        </div>
    }

}
const mapStateToProps = (state,ownProps) =>{

     return {
        username:  state.username
    }

}
export default connect(mapStateToProps,null)(Header);