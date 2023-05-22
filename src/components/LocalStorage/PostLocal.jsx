import { useState } from "react";

const PostLocal = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const formHandler = (e) => {
    const {name, value } = e.target
    setFormData(prev => {return {...prev, [name]:value}})
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onChange={formHandler} onSubmit={submitHandler}>
        <label>Title</label>
        <input name="title" placeholder="Title" />
        <label>body</label>
        <input name="body" placeholder="body" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostLocal;
