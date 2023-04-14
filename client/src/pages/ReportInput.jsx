import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const FileUploader = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [isFileSelected, setIsFileSelected] = useState(false);
	const [fileUrl, setFileUrl] = useState(null);
	const { user } = useAuthContext();

	const handleFileSelect = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFileSelected(true);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const formData = new FormData();
			formData.append("file", selectedFile);
			console.log(formData);
			const response = await axios.post(
				"http://localhost:4000/api/reportsStore",
				formData,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
						"Content-Type": "multipart/form-data",
					},
				}
			);

			setFileUrl(response.data.fileUrl);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="file" name="file" onChange={handleFileSelect} />
				<button type="submit" disabled={!isFileSelected}>
					Upload
				</button>
			</form>
			{fileUrl && <p>File URL: {fileUrl}</p>}
		</div>
	);
};

export default FileUploader;
