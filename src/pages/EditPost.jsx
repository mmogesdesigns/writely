import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const postCategories = [
    "Agriculture",
    "Business",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];
  return (
    <section className="create-post">
      <div className="container">
        <h2>Edit Post</h2>
        <p className="form-error-message">This is an error message</p>
        <form className="form create-post-form">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <select name="category" onChange={(e) => setCategory(e.target.value)}>
            {postCategories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="png, jpg, jpeg"
          />
          <button type="submit" className="btn primary">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
