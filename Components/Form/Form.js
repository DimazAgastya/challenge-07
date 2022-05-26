import React, { useRef } from "react";
import Navbar from "../nav/Navbar";
import style from "../Form/form.module.css";
import axios from "axios";

const Form = () => {
	const inputFirstName = useRef();
	const inputLastName = useRef();
	const inputLocation = useRef();
	const inputPhoto = useRef();

	const formSubmitHadler = async (event) => {
		event.preventDefault();

		// nama variable + current.value ( penggunaan useRef)
		const submittedData = {
			firstname: inputFirstName.current.value,
			lastname: inputLastName.current.value,
			location: inputLocation.current.value,
		};

		// belum dicoba work apa nggak
		console.log(inputPhoto.current.files);

		// define formData
		const formData = new FormData();
		//  formData diisi oleh json dalam bentuk string dari submittedData
		formData.append("data", JSON.stringify(submittedData));
		// memasukan foto
		Array.from(inputPhoto.current.files).forEach((file) => {
			formData.append("files.photo", file, file.name);
		});

		// data dimasukan ke database kemudian data dikirim ke response
		const res = await axios.post("https://fejs-c7-api.herokuapp.com/api/students/", formData);
		console.log(res.data);
	};

	// menit ke 54

	return (
		<>
			<Navbar />
			<form onSubmit={formSubmitHadler} className="mx-5 my-5">
				<div className="my-3">
					<label htmlFor="">first Name</label>
					<input type="text" name="firstname" id="firstname" ref={inputFirstName}></input>
				</div>
				<div className="my-3">
					<label htmlFor="">last Name</label>
					<input type="text" name="lastname" id="lastname" ref={inputLastName}></input>
				</div>
				<div className="my-3">
					<label htmlFor="">Location</label>
					<input type="text" name="location" id="location" ref={inputLocation}></input>
				</div>
				<div className="my-3">
					<label htmlFor="">Photo</label>
					<input type="file" name="photo" id="photo" ref={inputPhoto}></input>
				</div>
				<div>
					<input type="submit" value="SUBMIT FORM" className={`${style.buttons} mt-4`} />
				</div>
			</form>
		</>
	);
};

export default Form;
