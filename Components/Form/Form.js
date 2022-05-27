import React, { useRef } from "react";
import Navbar from "../nav/Navbar";
import style from "../Form/form.module.css";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const Form = () => {
	// setting input
	const inputFirstName = useRef();
	const inputLastName = useRef();
	const inputLocation = useRef();
	const inputPhoto = useRef();

	// setting dropzone
	const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({});

	// setting agar ketika menaruh file muncul nama
	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

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

	return (
		<>
			<Navbar />
			<div className="text-center mt-5">
				<p>Store your data in here</p>
			</div>
			<div className={`container ${style.form_bg}`}>
				<form onSubmit={formSubmitHadler} className="mx-5 my-5">
					<div className={`${style.container_form_1} d-flex`}>
						<label htmlFor="" className={`${style.label_1}`}>
							first Name:
						</label>
						<input className={style.inputs} type="text" name="firstname" id="firstname" ref={inputFirstName} required></input>
					</div>
					<div className={`${style.container_form_1} d-flex`}>
						<label htmlFor="" className={`${style.label_1}`}>
							last Name:
						</label>
						<input className={style.inputs} type="text" name="lastname" id="lastname" ref={inputLastName} required></input>
					</div>
					<div className={`${style.container_form_1} d-flex`}>
						<label htmlFor="" className={`${style.label_1}`}>
							Location:
						</label>
						<input className={style.inputs_2} type="text" name="location" id="location" ref={inputLocation} required></input>
					</div>
					<div className={`my-5`}>
						<label htmlFor="" className={`${style.label_1}`}>
							Photo
						</label>
						<input className={`mx-5`} type="file" name="photo" id="photo" ref={inputPhoto}></input>
						<div {...getRootProps()} className={`${style.drag_bg}`}>
							<input {...getInputProps()} />
							{isDragActive ? <p>Drop the files here ...</p> : <p className="text-center"> or simply Drop here</p>}
						</div>
						<ul>{files}</ul>
					</div>
					<div>
						<input type="submit" value="SUBMIT FORM" className={`${style.buttons} mt-4`} />
					</div>
				</form>
			</div>
		</>
	);
};

export default Form;
