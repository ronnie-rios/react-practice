import { useEffect, useState } from "react";

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
    // setFormData({ title: '', body: ''})
  };

  useEffect(() => {
    localStorage.setItem('form',JSON.stringify(formData))
  }, [formData])

  return (
    <div>
        <h1>localStorage form post</h1>
      <form onChange={formHandler} onSubmit={submitHandler}>
        <label>Title</label>
        <input name="title" placeholder="Title" value={formData.title}/>
        <label>body</label>
        <input name="body" placeholder="body" value={formData.bpdy}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostLocal;
