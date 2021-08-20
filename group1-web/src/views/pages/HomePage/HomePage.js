import {Link} from "react-router-dom";


function HomePage(){
    return (
        <div className="card">
            <div className="card-header header-elements-inline">
                <h5 className="card-title">Trang chủ</h5>
                <div className="header-elements">
                    <div className="list-icons">

                        <Link className="list-icons-item" data-action="remove"/>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6 col-xl-4">
                        <div className="item1 card card-body bg-teal-700 has-bg-image" >
                            <div className="media">
                                <div className="media-body">
                                    <h3 className="mb-0" id="customerTotalQuantity" />
                                    <div className="text-light"><span className="text-uppercase font-size-xs">Tổng số khách hàng</span>
                                    </div>
                                    <div className="text-light"><span className="text-uppercase font-size-xs">Hoạt động : <span id="customerActiveQuantity"></span></span></div>
                                    <div className="text-light"><span className="text-uppercase font-size-xs">Không hoạt động  : <span
                                        id="customerInactiveQuantity"></span></span></div>


                                </div>
                                <div className="mr-3 align-self-center">
                                    <i className="icon-newspaper icon-3x opacity-75"></i>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-xl-4">
                        <div className="item1 card card-body bg-teal-400 has-bg-image" >
                            <div className="media">
                                <div className="media-body">
                                    <h3 className="mb-0" id="stationTotalQuantity"></h3>
                                    <div className="text-light"><span className="text-uppercase font-size-xs">Tổng số trạm quan trắc  </span>
                                    </div>
                                    <div className="text-light"><span className="text-uppercase font-size-xs"> Hoạt động : <span
                                        id="stationActiveQuantity"></span></span></div>
                                    <div className="text-light"><span className="text-uppercase font-size-xs">	Không hoạt động: <span
                                        id="stationInactiveQuantity"></span> </span></div>
                                </div>
                                <div className="ml-3 align-self-center">
                                    <i className="icon-bag icon-3x opacity-75"></i>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-xl-4">
                        <div className="item1 card card-body bg-info-600 has-bg-image" >
                            <div className="media">
                                <div className="media-body">
                                    <h3 className="mb-0" id="assetTotalQuantity"></h3>
                                    <div className="text-light"><span className="text-uppercase font-size-xs">Tổng số thiết bị</span>
                                    </div>
                                    <div className="text-light"><span className="text-uppercase font-size-xs">Đang sử dụng : <span
                                        id="assetActiveQuantity"></span> </span></div>
                                    <div className="text-light"><span className="text-uppercase font-size-xs">Có sẵn trong kho : <span
                                        id="assetAvailableQuantity"></span></span></div>
                                    <div className="text-light"><span className="text-uppercase font-size-xs">Thanh lý   : <span
                                        id="assetLiquidationQuantity"></span> </span></div>
                                    <div className="text-light"><span
                                        className="text-uppercase font-size-xs"> Đã bán  : <span
                                        id="assetSoldQuantity"></span> </span></div>
                                </div>

                                <div className="mr-3 align-self-center">
                                    <i className="icon-stack icon-3x opacity-75"></i>
                                    <i className="far fa-computer-classic opacity-75"></i>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default HomePage;