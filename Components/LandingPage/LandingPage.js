import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../nav/Navbar";
import style from "./Hero.module.css";

const LandingPage = () => {
	return (
		<div>
			<div className={`${style.landing_page} container-fluid pt-1 `}>
				<div className="row">
					<div className={`col-12 col-md-12 col-lg-6 col-xl-6`}>
						<h1 className={`${style.landing_page_header} ${style.header}`}>Never worries about your data anymore</h1>
						<p className={`${style.text_reguler}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus id nisl, fermentum aliquam eget placerat. Integer nibh amet molestie nunc sed etiam erat tempor gravida. Mauris ornare nunc, bibendum fringilla hendrerit. Proin odio aenean volutpat libero commodo, feugiat.</p>
						<div className={style.button_left}>
							<a href="/">
								<button className={`${style.btn_landing_page} ${style.buttons}`}>Mulai Proteksi data</button>
							</a>
						</div>
					</div>
					<div className={`${style.right} col-12 col-md-12 col-lg-6 col-xl-6`}>
						<div className="right">
							<img src="./hero.svg" alt="Car-Image" className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
