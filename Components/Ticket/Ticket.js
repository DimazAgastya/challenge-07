import React from "react";
import style from "./Ticket.module.css";
import BiarLogo from "../nav/binar.png";

const Ticket = () => {
	return (
		<div>
			<nav className={`${style.navbar} navbar-expand-lg navbar-light`}>
				<div className={`container-fluid ${style.navbar_container}`}>
					<a href="#" className={`navbar-brand ${style.navbar_left}`}>
						<img src="/image/binar.png" alt="binarlogo" class="image_navbar" />
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div className={`collapse navbar-collapse ${style.navbar_groups}`} id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link active" href="#">
								Our service <span class="sr-only"></span>
							</a>
							<a className="nav-link active" href="#">
								Why Us
							</a>
							<a className="nav-link active" href="#">
								Testimonial
							</a>
							<a className="nav-link active" href="#">
								FAQ
							</a>
							<button className={style.btn_navbar}>Register</button>
						</div>
					</div>
				</div>
			</nav>
			<div className={`${style.ticket_bg} row`}>
				<div className={`col-lg-6 col-12 ${style.ticket_left}`}>
					<div className="d-flex">
						<img src="/image/icons/arrow_left.svg" alt="" className={style.ticket_arrow} />
						<h6 className={`${style.ticket_sub_header} ${style.text_bold}`}>Tiket</h6>
					</div>
					<p className={`${style.ticket_id} ${style.text}`}>ID XXXXXX</p>
				</div>
			</div>
			<div className={`${style.ticket_main_content} text-center`}>
				<img src="/image/icons/success.svg" alt="" className={style.ticket_icon_success} />
				<h6 className={style.text_bold}>Pembayaran Berhasil</h6>
				<p className={style.text}>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
				<div className={`${style.ticket_upload} container shadow`}>
					<div className={style.ticket_upload_info}>
						<div className={style.ticket_invoice_container}>
							<h6 className={`${style.text_bold} text-start mx-0 my-0 ${style.ticket_invoice}`}>Invoice</h6>
							<p className={`${style.text} text-start mx-0 my-0 ${style.ticket_invoice}`}>no invoice</p>
							<div className="text-end">
								<button className={`btn btn-outline-primary text-end ${style.ticket_btn}`}>
									<img src="/image/icons/download.svg" alt="" />
									Unduh
								</button>
							</div>
						</div>
					</div>
					<div className={style.ticket_input}>
						<input type="file" className={style.ticket_file} />
					</div>
				</div>
			</div>
			<footer className="bg-light py-3 px-5">footer</footer>
		</div>
	);
};

export default Ticket;
