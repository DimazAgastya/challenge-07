import React from "react";
import style from "./preview.module.css";

const Preview = () => {
	return (
		<div>
			<nav className={`${style.navbar} navbar-expand-lg navbar-light`}>
				<div className={`container-fluid ${style.navbar_container}`}>
					<a href="#" className={`navbar-brand ${style.navbar_left}`}>
						<img src="/image/binar.png" alt="binarlogo" className="image_navbar" />
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className={`collapse navbar-collapse ${style.navbar_groups}`} id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link active" href="#">
								Our service <span className="sr-only"></span>
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
			<div className={`container-lg ${style.details_container} mt-4`}>
				<div className="row">
					<div className="col-12 col-md-7 col-xl-8">
						<div className={`${style.main_info} shadow-lg rounded-3`}>
							<div className={style.packet_info}>
								<h6 className={style.text_bold}>Tentang Paket</h6>
								<p className={`${style.text_reguler} ${style.main_include} mt-3`}>Include</p>
								<li className={style.text_reguler}>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
								<li className={style.text_reguler}>Sudah termasuk bensin selama 12 jam</li>
								<li className={style.text_reguler}>Sudah termasuk Tiket Wisata</li>
								<li className={style.text_reguler}>Sudah termasuk pajak</li>
								<p className={`${style.text_reguler} ${style.main_exclude} mt-3`}>Exclude</p>
								<li className={style.text_reguler}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
								<li className={style.text_reguler}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
								<li className={style.text_reguler}>Tidak termasuk akomodasi penginapan</li>
							</div>
							<div className={style.other_info}>
								<h6 className={style.text_bold}>Refund, Reschedule, Overtime</h6>
								<li className={style.text_reguler}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
								<li className={style.text_reguler}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
								<li className={style.text_reguler}>Tidak termasuk akomodasi penginapan</li>
								<li className={style.text_reguler}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
								<li className={style.text_reguler}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
								<li className={style.text_reguler}>Tidak termasuk akomodasi penginapan</li>
								<li className={style.text_reguler}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
								<li className={style.text_reguler}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
								<li className={style.text_reguler}>Tidak termasuk akomodasi penginapan</li>
							</div>
						</div>
						<div className={`${style.details_btn} justify-content-end text-sm-start text-md-end`}>
							<button className={`btn ${style.buttons} rounded`}>Lanjutkan Pembayaran</button>
						</div>
					</div>
					<div className={`card ${style.details_car_card} col-12 col-md-5 col-xl-4 shadow-lg p-3`}>
						<div className="text-center">
							<img src="/image/icons/cars.svg" className={style.details_car_image} alt="..." />
						</div>
						<div className={`card-body ${style.details_card_body}`}>
							<p className={style.text_bold}>Nama / tipe Mobil</p>
							<div className={`d-flex ${style.details_car_info}`}>
								<div className={`${style.details_first_info} d-flex`}>
									<img src="/image/icons/users.svg" alt="" className={style.details_users_icon} />
									<p className={style.text_reguler}>4 orang</p>
								</div>
								<div className={`${style.details_second_info} d-flex`}>
									<img src="/image/icons/settings.svg" alt="" className={style.details_setting_icon} />
									<p className={style.text_reguler}>Manual</p>
								</div>
								<div className={`${style.details_third_info} d-flex`}>
									<img src="/image/icons/calendar.svg" alt="" className={style.details_calender_icon} />
									<p className={style.text_reguler}>Tahun 2020</p>
								</div>
							</div>
						</div>
						<div className={`${style.details_total_price}`}>
							<div className="d-flex justify-content-between">
								<h6 className={style.text_reguler}>Total</h6>
								<p className={style.text_bold}>430.000</p>
							</div>
						</div>
						<button className={`${style.buttons} btn ${style.search_car_btn} `}>Pilih Mobil</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
