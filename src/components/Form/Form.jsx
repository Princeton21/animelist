import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";
const Form = () => {
	const [img, setImg] = useState("");
	const [title, setTitle] = useState("");


	const handleSubmit = (e) => {
		e.preventDefault();
		const newCard = { img, title };
		console.log(newCard);	}



  return (
    <>
      <div className={styles.form_container}>
				<form>
					
					<input
						type="text"
						placeholder="Enter an image link "
						value={img}
						onChange={(e) => setImg(e.target.value)}
					/>
				
					<input
						type="text"
						placeholder="Enter the name "
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</form>
				<p>{img}{title}</p>
				
				<button type="submit" onClick={handleSubmit}>submit</button>

      </div>
    </>
  );
};

export default Form;
