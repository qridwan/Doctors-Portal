import React, { useState } from "react";
import Sidebar from "./Sidebar";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState({});

  const getInfo = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  
  const handleFile = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };


  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("https://doctorsportal-22.herokuapp.com/addDoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="name">Doctor Name</label>
          <input
            name="name"
            onBlur={getInfo}
            type="name"
            class="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            name="email"
            onBlur={getInfo}
            type="email"
            class="form-control"
            placeholder="Email"
          />
        </div>
        <div class="custom-file my-3">
          <input
            onChange={handleFile}
            type="file"
            class="custom-file-input"
            id="customFile"
          />
          <label class="custom-file-label" for="customFile">
            Choose file
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
