import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../nav/Navbar";
import style from "./Hero.module.css";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<div className={`${style.landing_page} container-fluid pt-1 `}>
				<div className="row">
					<div className={`col-12 col-md-12 col-lg-6 col-xl-6`}>
						<h1 className={`${style.landing_page_header} ${style.header}`}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
						<p className={`${style.text_reguler}`}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
						<div className={style.button_left}>
							<button className={`${style.btn_landing_page} ${style.buttons}`}>mulai sewa mobil</button>
						</div>
					</div>
					<div className={`${style.right} col-12 col-md-12 col-lg-6 col-xl-6`}>
						<div className="right">
							<img src="/image/img_car.png" alt="Car-Image" className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
			<div className={`container ${style.our_service}`}>
				<div className="row">
					<div className="col-md-12 col-lg-6">
						<div className={style.our_service_image}>
							<img src="/image/img_service.png" alt="our-service" className={`${style.service_image} ${style.img_fluid}`} />
						</div>
					</div>
					<div className="col-md-12 col-lg-6">
						<div className={style.right_service}>
							<h2 className={style.sub_header}>Best Car Rental for any kind of trip in (Lokasimu) !</h2>
							<p className={style.text_reguler}>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
							<div className={style.right_description}>
								<p className={style.text_reguler}>
									<img className="img-check" src="/image/icon_complete-lg .png" alt="" />
									Sewa Mobil Dengan Supir di Bali 12 Jam
								</p>
								<p className={style.text_reguler}>
									<img className="img-check" src="/image/icon_complete-lg .png" alt="" />
									Sewa Mobil Lepas Kunci di Bali 24 Jam
								</p>
								<p className={style.text_reguler}>
									<img className="img-check" src="/image/icon_complete-lg .png" alt="" />
									Sewa Mobil Jangka Panjang Bulanan
								</p>
								<p className={style.text_reguler}>
									<img className="img-check" src="/image/icon_complete-lg .png" alt="" />
									Gratis Antar - Jemput Mobil di Bandara
								</p>
								<p className={style.text_reguler}>
									<img className="img-check" src="/image/icon_complete-lg .png" alt="" />
									Layanan Airport Transfer / Drop In Out
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${style.why_us} container`}>
				<h2 className={style.sub_header}>why us</h2>
				<p className={style.text_reguler}>Mengapa harus pilih Binar Car Rental?</p>
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3">
						<div className="card">
							<div className="card-body">
								<div className={style.icon_1}>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icons">
										<path
											d="M5.83335 18.3333H3.33335C2.89133 18.3333 2.4674 18.1577 2.15484 17.8452C1.84228 17.5326 1.66669 17.1087 1.66669 16.6667V10.8333C1.66669 10.3913 1.84228 9.96737 2.15484 9.65481C2.4674 9.34225 2.89133 9.16666 3.33335 9.16666H5.83335M11.6667 7.49999V4.16666C11.6667 3.50362 11.4033 2.86773 10.9345 2.39889C10.4656 1.93005 9.82973 1.66666 9.16669 1.66666L5.83335 9.16666V18.3333H15.2334C15.6353 18.3379 16.0253 18.197 16.3316 17.9367C16.6379 17.6763 16.8398 17.3141 16.9 16.9167L18.05 9.41666C18.0863 9.17779 18.0702 8.93389 18.0028 8.70187C17.9354 8.46984 17.8184 8.25524 17.6599 8.07292C17.5014 7.8906 17.3051 7.74493 17.0847 7.646C16.8642 7.54708 16.6249 7.49725 16.3834 7.49999H11.6667Z"
											stroke="white"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<h6 className={`card-title ${style.text_bold}`}>Mobil Lengkap</h6>
								<p className={style.text_reguler}>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<div className="card">
							<div className="card-body">
								<div className={style.icon_2}>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M17.1583 11.175L11.1833 17.15C11.0286 17.305 10.8447 17.4279 10.6424 17.5118C10.4401 17.5956 10.2232 17.6388 10.0042 17.6388C9.78515 17.6388 9.56827 17.5956 9.36594 17.5118C9.16361 17.4279 8.97979 17.305 8.82501 17.15L1.66667 9.99999V1.66666H10L17.1583 8.82499C17.4688 9.13726 17.643 9.55968 17.643 9.99999C17.643 10.4403 17.4688 10.8627 17.1583 11.175V11.175Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M5.83333 5.83334H5.84166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</div>
								<h6 className={`card-title ${style.text_bold}`}>Harga Murah</h6>
								<p className={style.text_reguler}>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<div className="card">
							<div className="card-body">
								<div className={style.icon_3}>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6024 1.66666 10 1.66666C5.39763 1.66666 1.66667 5.39762 1.66667 9.99999C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M10 5V10L13.3333 11.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</div>
								<h6 className={style.text_bold}>Layanan 24 Jam</h6>
								<p className={style.text_reguler}>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.</p>
							</div>
						</div>
					</div>
					<div className={`col-sm-12 col-md-6 col-lg-3 ${style.card_4}`}>
						<div className={`card ${style.card_4}`}>
							<div className="card-body">
								<div className={style.icon_4}>
									<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.99999 13.5C13.2217 13.5 15.8333 10.8883 15.8333 7.66668C15.8333 4.44502 13.2217 1.83334 9.99999 1.83334C6.77833 1.83334 4.16666 4.44502 4.16666 7.66668C4.16666 10.8883 6.77833 13.5 9.99999 13.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M6.84168 12.575L5.83334 20.1667L10 17.6667L14.1667 20.1667L13.1583 12.5667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</div>
								<h6 className={style.text_bold}>Sopir Profesional</h6>
								<p className={style.text_reguler}>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${style.bg_footer} mt-5`}>
				<Footer />
			</div>
		</div>
	);
};

export default LandingPage;
