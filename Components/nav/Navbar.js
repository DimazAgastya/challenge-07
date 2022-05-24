import Link from "next/link";
import React from "react";
import style from "./Navbar.module.css";
import sharedStyle from "./ShareStyle.module.css";

const Navbar = () => {
	return (
		<div>
			<nav className={`navbar navbar-expand-lg navbar-light  ${style.navbar_bg}`}>
				<div className="container-fluid navbar-container">
					<a href="#">
						<div className={style.blue_logo}></div>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className={`collapse navbar-collapse ${style.navbar_groups}`} id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a href="/ourService" className="nav-link active">
								Our service <span className="sr-only"></span>
							</a>
							<a href="/whyUs" className="nav-link active">
								Why Us
							</a>
							<a href="/testimonial" className="nav-link active">
								Testimonial
							</a>
							<a href="/faq" className="nav-link active">
								FAQ
							</a>
							<button className={`${sharedStyle.buttons} ${style.btn_navbar}`}>Register</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
