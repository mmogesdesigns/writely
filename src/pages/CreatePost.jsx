import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { supabase } from "../supabaseClient";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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

  const handleCreatePost = async (e) => {
    e.preventDefault(); // Fix the typo here

    // Get current user ID from Supabase
    const userId = supabase.auth.user()?.id;

    // If no user ID, send message telling user to login
    if (!userId) {
      setErrorMessage("User not logged in.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("posts")
        .insert([{ title, content: description, category, user_id: userId }]); // Make sure to use user_id, not user_Id

      if (error) {
        throw error;
      }

      setSuccessMessage("Post created successfully!");
      setTitle("");
      setDescription("");
      setCategory("uncategorized");
      setThumbnail("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        {errorMessage && <p className="form-error-message">{errorMessage}</p>}
        {successMessage && (
          <p className="form-success-message">{successMessage}</p>
        )}

        <form className="form create-post-form" onSubmit={handleCreatePost}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
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
            accept="image/png, image/jpg, image/jpeg"
          />
          <button type="submit" className="btn primary">
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
