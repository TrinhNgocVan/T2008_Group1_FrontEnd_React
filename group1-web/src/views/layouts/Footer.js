import React from "react";
import {Link} from "react-router-dom";


 class Footer extends React.Component{


    render() {
        return(


        <div className="navbar navbar-expand-lg navbar-light">
            <div className="text-center d-lg-none w-100">
                <button type="button" className="navbar-toggler dropdown-toggle" data-toggle="collapse"
                        data-target="#navbar-footer">
                    <i className="icon-unfold mr-2" />
                    Footer
                </button>
            </div>

            <div className="navbar-collapse collapse" id="navbar-footer">
					<span className="navbar-text">
						&copy; 2020. <Link to="http://keysoft.vn/" target="_blank">Created By Group1</Link>
					</span>

            </div>
        </div>
        )
    }
}
export default  Footer ;