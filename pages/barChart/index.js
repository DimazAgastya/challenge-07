import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/nav/Navbar";
import LandingPage from "../../Components/LandingPage/LandingPage";
import { Bar } from "react-chartjs-2";
import BarChart from "../../Components/Chart/BarChart";
import style from "../../Components/LandingPage/Hero.module.css";
import { UserData } from "../Data";

const index = () => {
	// chart config
	const [userData, setUserData] = useState({
		labels: UserData.map((data) => data.name),
		datasets: [
			{
				label: "Pengunjung Bulanan",
				data: UserData.map((data) => data.userLogin),
				backgroundColor: ["brown", "red", "purple", "aqua", "orange"],
				borderColor: "white",
				borderWidth: 2,
			},
		],
	});

	return (
		<>
			<Navbar />
			<LandingPage />
			<div style={{ width: 700 }} className={style.chart}>
				<BarChart chartData={userData} />
			</div>
			<div className={`${style.bg_footer} mt-5`}>
				<Footer />
			</div>
		</>
	);
};

export default index;
