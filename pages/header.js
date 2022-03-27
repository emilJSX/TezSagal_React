import React, { useState,useEffect } from "react";
import  Link  from "next/link";
import  Image  from "next/image";
import { useRouter } from 'next/router'

//icon
// import config from "config";

import logo from "../assets/images/logo.png";
import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
import $ from "jquery";

const Header = (props) => {

  const router = useRouter()
  let pathnames = router.pathname;

  const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  useEffect(() => {

    $(".main-nav a").on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("submenu");
        $(this).next("ul").slideDown(350);
        $(this).addClass("submenu");
      } else if ($(this).hasClass("submenu")) {
        $(this).removeClass("submenu");
        $(this).next("ul").slideUp(350);
      }
    });	// Mobile menu sidebar overlay
  }, []);


  return (
    <>
    <div className="top-header">
				<div className="container-fluid">
					<div className="row d-flex justify-content-between">
						<ul className="d-flex justify-content-between align-items-center">
							<li>
								<i className="fas fa-phone-alt"></i>
								Contact Number : 090 98763456
							</li>
							<li>
								<i className="fas fa-map-marker-alt"></i>
								Location : 22, South Wales, New York
							</li>
						</ul>
						<ul className="d-flex justify-content-between align-items-center">
							<li>Mon - Fri : 09:00 AM to 05:00 PM</li>
							<li>
								<div className="form-group">
									<select className="form-control" id="exampleFormControlSelect1">
										<option>English</option>
										<option>Arabic</option>
										<option>Turkish</option>
									</select>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
  <header className={`header ${pathnames.includes("home") || pathnames == "/template-psychiatrist/" ? 'min-header' : ''}`}>
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <Link href="/home" className="navbar-brand logo">
            <Image src={logo} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper ml-auto">
          <div className="menu-header">
            <Link href="/home" className="menu-logo">
              <Image src={logo} className="img-fluid" alt="Logo" />
            </Link>
            <a
              href="#0"
              id="menu_close"
              className="menu-close"
              onClick={() => onhandleCloseMenu()}
            >
              <i className="fas fa-times"></i>
            </a>
          </div>
          <ul className="main-nav">
            <li className={pathnames.includes("/home") ? "active" : ""}><Link href="/home">Home</Link></li>

            <li className={`has-submenu ${url.includes("/doctor") || pathnames.includes("add-prescription") || pathnames.includes("edit-prescription") || pathnames.includes("add-billing") || pathnames.includes("edit-billing") ? "active" : ""}`}>
              <a href="#0">
                Doctors<i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={pathnames.includes("doctor-dashboard") ? "active" : ""}>
                  <Link href="/doctor/doctor-dashboard" onClick={() => onhandleCloseMenu()}>Doctor Dashboard</Link>
                </li>
                <li className={pathnames.includes("appointments") ? "active" : ""}>
                  <Link href="/doctor/appointments" onClick={() => onhandleCloseMenu()}>Appointments</Link>
                </li>
                <li className={pathnames.includes("schedule-timing") ? "active" : ""}>
                  <Link href="/doctor/schedule-timing" onClick={() => onhandleCloseMenu()}>Schedule Timing</Link>
                </li>
                <li className={pathnames.includes("my-patients") ? "active" : ""}>
                  <Link href="/doctor/my-patients" onClick={() => onhandleCloseMenu()}>Patients List</Link>
                </li>
                <li className={pathnames.includes("patient-profile") || pathnames.includes("add-prescription") || pathnames.includes("edit-prescription") || pathnames.includes("add-billing") || pathnames.includes("edit-billing") ? "active" : ""}>
                  <Link href="/doctor/patient-profile" onClick={() => onhandleCloseMenu()}>Patients Profile</Link>
                </li>
                <li className={pathnames.includes("chat-doctor") ? "active" : ""}>
                  <Link href="/doctor/chat-doctor" onClick={() => onhandleCloseMenu()}>Chat</Link>
                </li>
                <li className={pathnames.includes("invoice") ? "active" : ""}>
                  <Link href="/pages/invoice" onClick={() => onhandleCloseMenu()}>Invoices</Link>
                </li>
                <li className={pathnames.includes("profile-setting") ? "active" : ""}>
                  <Link href="/doctor/profile-setting" onClick={() => onhandleCloseMenu()}>Profile Settings</Link>
                </li>
                <li className={pathnames.includes("review") ? "active" : ""}>
                  <Link href="/doctor/review" onClick={() => onhandleCloseMenu()}>Reviews</Link>
                </li>
                <li className={pathnames.includes("doctor-register") ? "active" : ""}>
                  <Link href="/doctor/doctor-register" onClick={() => onhandleCloseMenu()}>Doctor Register</Link>
                </li>
              </ul>
            </li>
            <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
              <a href="#0">
                Patients <i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={`has-submenu ${pathnames.includes("doctor") && !pathnames.includes("search-doctor") && !pathnames.includes("doctor-profile") && !pathnames.includes("profile")  ? "active" : ""}`}>
                  <a href="#0">Doctors</a>
                  <ul className="submenu">
                    <li className={pathnames.includes("doctor-grid") ? "active" : ""}>
                      <Link href="/patient/doctor-grid" onClick={() => onhandleCloseMenu()}>Map Grid</Link>
                    </li>
                    <li className={pathnames.includes("doctor-list") ? "active" : ""}>
                      <Link href="/patient/doctor-list" onClick={() => onhandleCloseMenu()}>Map List</Link>
                    </li>
                  </ul>
                </li>
                <li className={pathnames.includes("search-doctor") ? "active" : ""}>
                  <Link href="/patient/search-doctor" onClick={() => onhandleCloseMenu()}>Search Doctor</Link>
                </li>
                <li className={pathnames.includes("doctor-profile") ? "active" : ""}>
                  <Link href="/patient/doctor-profile" onClick={() => onhandleCloseMenu()}>Doctor Profile</Link>
                </li>
                <li className={pathnames.includes("booking") && !pathnames.includes("booking-success") ? "active" : ""}>
                  <Link href="/patient/booking" onClick={() => onhandleCloseMenu()}>Booking</Link>
                </li>
                <li className={pathnames.includes("checkout") ? "active" : ""}>
                  <Link href="/patient/checkout" onClick={() => onhandleCloseMenu()}>Checkout</Link>
                </li>
                <li className={pathnames.includes("booking-success") ? "active" : ""}>
                  <Link href="/patient/booking-success" onClick={() => onhandleCloseMenu()}>Booking Success</Link>
                </li>
                <li className={pathnames.includes("dashboard") ? "active" : ""}>
                  <Link href="/patient/dashboard" onClick={() => onhandleCloseMenu()}>Patient Dashboard</Link>
                </li>
                <li className={pathnames.includes("favourites") ? "active" : ""}>
                  <Link href="/patient/favourites" onClick={() => onhandleCloseMenu()}>Favourites</Link>
                </li>
                <li className={pathnames.includes("patient-chat") ? "active" : ""}>
                  <Link href="/patient/patient-chat" onClick={() => onhandleCloseMenu()}>Chat</Link>
                </li>
                <li className={pathnames.includes("profile") && !pathnames.includes("doctor-profile") ? "active" : ""}>
                  <Link href="/patient/profile" onClick={() => onhandleCloseMenu()}>Profile Settings</Link>
                </li>
                <li className={pathnames.includes("change-password") ? "active" : ""}>
                  <Link href="/patient/change-password" onClick={() => onhandleCloseMenu()}>Change Password</Link>
                </li>
              </ul>
            </li>
            <li className={`has-submenu ${url.includes("/pages") || pathnames.includes("login") || (pathnames.includes("register") && !pathnames.includes("doctor-register")) || pathnames.includes("forgot-password") ? "active" : ""}`}>
              <a href="#0">
                Pages<i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={`${(pathnames).includes("/pages/voice-call") ? "active" : ""}`}>
                  <Link href="/pages/voice-call" onClick={() => onhandleCloseMenu()}>Voice Call</Link>
                </li>
                <li className={`${(pathnames).includes("/video-call") ? "active" : ""}`}>
                  <Link href="/pages/video-call" onClick={() => onhandleCloseMenu()}>Video Call</Link>
                </li>

                <li className={`${(pathnames).includes("/calendar") ? "active" : ""}`}>
                  <Link href="/pages/calendar" onClick={() => onhandleCloseMenu()}>Calendar</Link>
                </li>

                <li className={pathnames.includes("components") ? "active" : ""}><Link href="/pages/components" onClick={() => onhandleCloseMenu()}>Components</Link></li>
                <li className={pathnames.includes("invoice") ? "has-submenu active" : "has-submenu"}>
                  <a href="">Invoices</a>
                  <ul className="submenu">
                    <li className={pathnames.includes("invoice") && !pathnames.includes("-view") ? "active" : ""}><Link href="/pages/invoice" onClick={() => onhandleCloseMenu()}>Invoices</Link></li>
                    <li className={pathnames.includes("-view") ? "active" : ""}><Link href="/pages/invoice-view" onClick={() => onhandleCloseMenu()}>Invoice View</Link></li>
                  </ul>
                </li>
                <li className={pathnames.includes("blank-") ? "active" : ""}><Link href="/pages/blank-page" onClick={() => onhandleCloseMenu()}>Starter Page</Link></li>

                <li className={pathnames.includes("login") ? "active" : ""}>
                  <Link href="/login" onClick={() => onhandleCloseMenu()}>Login</Link>
                </li>
                <li className={pathnames.includes("/register") ? "active" : ""}>
                  <Link href="/register" onClick={() => onhandleCloseMenu()}>Register</Link>
                </li>
                <li className={`${pathnames.includes("forgot-password") ? "active" : ""}`}>
                  <Link href="/forgot-password" onClick={() => onhandleCloseMenu()}>Forgot Password</Link>
                </li>
              </ul>
            </li>
            <li className={`has-submenu ${url.includes("/blog") ? "active" : ""}`}>
              <a href="">Blog<i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li className={pathnames.includes("blog-list") ? "active" : ""}>
                  <Link href="/blog/blog-list" onClick={() => onhandleCloseMenu()}>Blog List</Link>
                </li>
                <li className={pathnames.includes("blog-grid") ? "active" : ""}>
                  <Link href="/blog/blog-grid" onClick={() => onhandleCloseMenu()}>Blog Grid</Link>
                </li>
                <li className={pathnames.includes("blog-details") ? "active" : ""}>
                  <Link href="/blog/blog-details" onClick={() => onhandleCloseMenu()}>Blog Details</Link>
                </li>
              </ul>
            </li>
            <li><Link href="/admin" target="_blank" >Admin</Link></li>

            <li className="login-link" onClick={() => onhandleCloseMenu()}>
              <Link href="/">Login / Signup</Link>
            </li>
          </ul>
        </div>
        <ul className="nav header-navbar-rht">

          {router.pathname != "/register" && router.pathname != "/doctor/doctor-register" && router.pathname != "/home" && pathnames != "/template-pediatric/" && router.pathname != "/login" ? (
            <>
              <div className="dropdown user-drop nav-item dropdown has-arrow logged-item">
                <button class="dropdown-toggle" id="dropdown-basic">
                  <Image
                    className="rounded-circle"
                    src={IMG01}
                    width="31"
                    alt="Darren Elder"
                  />
                </button>

                <div className="dropdown-menu">
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <Image
                        src={IMG01}
                        alt="User"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elder</h6>
                      <p className="text-muted mb-0">Doctor</p>
                    </div>
                  </div>
                  <div className="dropdown-item" >
                  {/* href={`${config.publicPath}/doctor/doctor-dashboard`} */}
                    Dashboard
                  </div>
                  <div className="dropdown-item" >
                  {/* href={`${config.publicPath}/doctor/profile-setting`} */}
                    Profile Settings
                  </div>
                  <div className="dropdown-item" >Logout</div>
                  {/* href={`${config.publicPath}/login`} */}
                </div>
              </div>
            </>
          ) : (
              <>
                <li className="nav-item">
                  <Link href="/login" className="nav-link header-login">
                    login / Signup{" "}
                  </Link>
                </li>{" "}
              </>
            )}
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
