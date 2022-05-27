import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "../styles/Home.module.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

import style from "../Components/LandingPage/Hero.module.css";
import Footer from "../Components/Footer/Footer";
import Form from "../Components/Form/Form";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Home = () => {
	// form config

	const [students, setStudents] = useState([]);

	const myFunction = async () => {
		const res = await axios.get("https://fejs-c7-api.herokuapp.com/api/students/?populate=*");
		setStudents([...res.data.data]);
	};

	useEffect(() => {
		myFunction();
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Form />
				{students.map((student) => {
					return (
						<>
							<ul>
								<li>first name : {student.attributes.firstname}</li>
								<li>last name : {student.attributes.lastname}</li>
								<li> Location : {student.attributes.location}</li>
								<img src={student.attributes.photo.data.attributes.url} width="200px" />
							</ul>
						</>
					);
				})}
				<div className={`${style.bg_footer} mt-5`}>
					<Footer />
				</div>
			</main>
		</div>
	);
};
export default Home;

/* 

	
*/

/*

	<LandingPage />
			<div style={{ width: 700 }} className={style.chart}>
				<BarChart chartData={userData} />
			</div>
			<div className={`${style.bg_footer} mt-5`}>
				<Footer />
			</div>


*/

/* 
	const [students, setStudents] = useState([]);

	useEffect(async () => {
		const res = await axios.get("https://fejs-c7-api.herokuapp.com/api/students/?populate=*");

		setStudents([...res.data.data]);
	}, []);

	*/
