import React from "react";
import style from "../LandingPage/Hero.module.css";

const Footer = () => {
	return (
		<div>
			<footer className={`text-center text-lg-start`}>
				<section className="footer">
					<div className={`container text-center text-md-start mt-5 $`}>
						<div className="row mt-3">
							<div className={`col-md-3 col-lg-4 col-xl-3 mb-4 ${style.text_left}`}>
								<h6 className={style.text_reguler}>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h6>
								<p className={style.text_reguler}>binarstudent@gmail.com</p>
								<p className={style.text_reguler}>081-233-334-808</p>
							</div>
							<div className="col-md-2 col-lg-2 col-xl-2 mb-4 text-left">
								<p>
									<a href="#!" className="text-reset ">
										Download
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Chart
									</a>
								</p>
							</div>
							<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 class={`${style.text_reguler} mb-4 p-0 mx-4`}>Copyright Binar 2022</h6>
							</div>
						</div>
					</div>
				</section>
			</footer>
		</div>
	);
};

export default Footer;
