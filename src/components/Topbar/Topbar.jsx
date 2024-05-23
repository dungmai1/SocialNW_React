import React from "react"
import { Link } from "react-router-dom";
import './Topbar.css'
export default function Topbar() {
    return (
        <div className="iq-top-navbar">
        <div className="iq-navbar-custom">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className="iq-navbar-logo d-flex justify-content-between">
                    <Link to="/">
                        <img src="./assets/images/logo.png" className="img-fluid" alt=""/>
                        <span>NewSocial</span>
                    </Link>
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu">
                            <div className="main-circle"><i className="ri-menu-line"></i></div>
                        </div>
                    </div>
                </div>
                <div className="iq-search-bar device-search">
                    <form action="#" className="searchbox">
                        <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                        <input type="text" className="text search-input" placeholder="Search here..."/>
                    </form>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-label="Toggle navigation">
                    <i className="ri-menu-3-line"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-auto navbar-list">
                        <li className="nav-item dropdown">
                             <a href="#" className="dropdown-toggle" id="group-drop" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"><i className="ri-group-line"></i></a>
                            <div className="sub-drop sub-drop-large dropdown-menu" aria-labelledby="group-drop">
                                <div className="card shadow-none m-0">
                                     <div className="card-header d-flex justify-content-between bg-primary">
                                    <div className="header-title">
                                    <h5 className="mb-0 text-white">Friend Request</h5>
                                    </div>
                                    <small className="badge  bg-light text-dark ">4</small>
                                </div>
                                    <div className="card-body p-0">
                                        <div className="iq-friend-request">
                                            <div
                                                className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                        <img className="avatar-40 rounded" src="./assets/images/user/01.jpg"
                                                            alt=""/>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Jaques Amole</h6>
                                                        <p className="mb-0">40 friends</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <a href="javascript:void();"
                                                        className="me-3 btn btn-primary rounded">Confirm</a>
                                                    <a href="javascript:void();"
                                                        className="me-3 btn btn-secondary rounded">Delete Request</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="iq-friend-request">
                                            <div
                                                className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                        <img className="avatar-40 rounded" src="../assets/images/user/02.jpg"
                                                            alt=""/>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Lucy Tania</h6>
                                                        <p className="mb-0">12 friends</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <a href="javascript:void();"
                                                        className="me-3 btn btn-primary rounded">Confirm</a>
                                                    <a href="javascript:void();"
                                                        className="me-3 btn btn-secondary rounded">Delete Request</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="iq-friend-request">
                                            <div
                                                className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                        <img className="avatar-40 rounded" src="../assets/images/user/03.jpg"
                                                            alt=""/>
                                                    <div className=" ms-3">
                                                        <h6 className="mb-0 ">Manny Petty</h6>
                                                        <p className="mb-0">3 friends</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <a href="javascript:void();"
                                                        className="me-3 btn btn-primary rounded">Confirm</a>
                                                    <a href="javascript:void();"
                                                        className="me-3 btn btn-secondary rounded">Delete Request</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="iq-friend-request">
                                            <div
                                                className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                        <img className="avatar-40 rounded" src="../assets/images/user/04.jpg"
                                                            alt=""/>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Marsha Mello</h6>
                                                        <p className="mb-0">15 friends</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <a href="javascript:void();"
                                                        className="me-3 btn btn-primary rounded">Confirm</a>
                                                    <a href="javascript:void();"
                                                        className="me-3 btn btn-secondary rounded">Delete Request</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <a href="#" className=" btn text-primary">View More Request</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                                  <a href="#" className="search-toggle   dropdown-toggle" id="notification-drop" data-bs-toggle="dropdown">
                                      <i className="ri-notification-4-line"></i>
                                  </a>
                                  <div className="sub-drop dropdown-menu" aria-labelledby="notification-drop">
                                      <div className="card shadow-none m-0">
                                          <div className="card-header d-flex justify-content-between bg-primary">
                                          <div className="header-title bg-primary">
                                                      <h5 className="mb-0 text-white">All Notifications</h5>
                                                      </div>
                                                  <small className="badge  bg-light text-dark">4</small>
                                          </div>
                                          <div className="card-body p-0">
                                              <a href="#" className="iq-sub-card">
                                                  <div className="d-flex align-items-center">
                                                       <div className="">
                                                      <img className="avatar-40 rounded" src="../assets/images/user/01.jpg" alt=""/>
                                                          </div>
                                                      <div className="ms-3 w-100">
                                                          <h6 className="mb-0 ">Emma Watson Bni</h6>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                          <p className="mb-0">95 MB</p>
                                                          <small className="float-right font-size-12">Just Now</small>
                                                      </div>
                                                      </div>
                                                  </div>
                                              </a>
                                              <a href="#" className="iq-sub-card">
                                                  <div className="d-flex align-items-center">
                                                      <div className="">
                                                          <img className="avatar-40 rounded" src="../assets/images/user/02.jpg" alt=""/>
                                                      </div>
                                                      <div className="ms-3 w-100">
                                                          <h6 className="mb-0 ">New customer is join</h6>
                                                           <div className="d-flex justify-content-between align-items-center">
                                                                  <p className="mb-0">Cyst Bni</p>
                                                                 <small className="float-right font-size-12">5 days ago</small>
                                                           </div>
                                                      </div>
                                                  </div>
                                              </a>
                                              <a href="#" className="iq-sub-card">
                                                  <div className="d-flex align-items-center">
                                                       <div className="">
                                                          <img className="avatar-40 rounded" src="../assets/images/user/03.jpg" alt=""/>
                                                              </div>
                                                      <div className="ms-3 w-100">
                                                          <h6 className="mb-0 ">Two customer is left</h6>
                                                           <div className="d-flex justify-content-between align-items-center">
                                                                <p className="mb-0">Cyst Bni</p>
                                                              <small className="float-right font-size-12">2 days ago</small>
                                                           </div>  
                                                      </div>
                                                  </div>
                                              </a>
                                              <a href="#" className="iq-sub-card">
                                                  <div className="d-flex align-items-center">
                                                       <div className="">
                                                          <img className="avatar-40 rounded" src="../assets/images/user/04.jpg" alt=""/>
                                                      </div>
                                                      <div className="w-100 ms-3">
                                                          <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                          <div className="d-flex justify-content-between align-items-center">
                                                               <p className="mb-0">Cyst Bni</p>
                                                              <small className="float-right font-size-12">3 days ago</small>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                        </li>
                        <li className="nav-item dropdown">
                                  <Link to="/message"  id="mail-drop" aria-haspopup="true" aria-expanded="false">
                                      <i className="ri-mail-line"></i>
                                  </Link>
                              </li>
                         <li className="nav-item dropdown">
                            <a href="#" className="   d-flex align-items-center dropdown-toggle" id="drop-down-arrow" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/images/user/1.jpg" className="img-fluid rounded-circle me-3" alt="user"/>
                                <div className="caption">
                                    <h6 className="mb-0 line-height">Bni Cyst</h6>
                                </div>
                            </a>
                            <div className="sub-drop dropdown-menu caption-menu" aria-labelledby="drop-down-arrow">
                                <div className="card shadow-none m-0">
                                     <div className="card-header  bg-primary">
                                        <div className="header-title">
                                            <h5 className="mb-0 text-white">Hello Bni Cyst</h5>
                                            <span className="text-white font-size-12">Available</span>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 ">
                                        <a href="../app/profile.html" className="iq-sub-card iq-bg-primary-hover">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded card-icon bg-soft-primary">
                                                    <i className="ri-file-user-line"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 ">My Profile</h6>
                                                    <p className="mb-0 font-size-12">View personal profile details.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="../app/profile-edit.html" className="iq-sub-card iq-bg-warning-hover">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded card-icon bg-soft-warning">
                                                    <i className="ri-profile-line"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 ">Edit Profile</h6>
                                                    <p className="mb-0 font-size-12">Modify your personal details.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="../app/account-setting.html" className="iq-sub-card iq-bg-info-hover">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded card-icon bg-soft-info">
                                                    <i className="ri-account-box-line"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 ">Account settings</h6>
                                                    <p className="mb-0 font-size-12">Manage your account parameters.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="../app/privacy-setting.html" className="iq-sub-card iq-bg-danger-hover">
                                            <div className="d-flex align-items-center">
                                                <div className="rounded card-icon bg-soft-danger">
                                                    <i className="ri-lock-line"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 ">Privacy Settings</h6>
                                                    <p className="mb-0 font-size-12">Control your privacy parameters.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="d-inline-block w-100 text-center p-3">
                                            <a className="btn btn-primary iq-sign-btn" href="../dashboard/sign-in.html" role="button">Sign
                                                out<i className="ri-login-box-line ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>               
                </div>
            </nav>
        </div>
    </div>  
    )
}
