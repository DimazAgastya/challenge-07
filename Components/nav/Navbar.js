import Link from "next/link";
import React from "react";
import style from "./Navbar.module.css";
import sharedStyle from "./ShareStyle.module.css";

const Navbar = () => {
	return (
		<div>
			<nav className={`navbar navbar-expand-lg navbar-light  ${style.navbar_bg}`}>
				<div className="container-fluid navbar-container">
					<div className={style.logo}>
						<a href="/" className={style.logo}>
							<p>Binar student</p>
						</a>
					</div>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className={`collapse navbar-collapse ${style.navbar_groups}`} id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a href="/barChart" className="nav-link active">
								Chart <span className="sr-only"></span>
							</a>
							<a href="/">
								<button className={`${sharedStyle.buttons} ${style.btn_navbar}`}>Protect your data</button>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
