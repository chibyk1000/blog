import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const AddBlog = ({blog, setBlog}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [details, setDetails] = useState("");
 
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      id: Math.floor(Math.random() * 1e20),
      title: title,
      author: author,
      details: details,
    };
    setBlog([...blog, newBlog]);
    setTitle("");
    setAuthor("");
    setDetails("");
    navigate("/");
  };
  return (
    <div className="addBlog">
      <h1>Add Blog</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <textarea
          name=""
          id=""
          cols="40"
          rows="10"
          value={details}
          onChange={(event) => setDetails(event.target.value)}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddBlog