import { useState } from "react";

const Passcode = () => {
  const [userChoice, setUserChoice] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const password = [1, 2, 3, 4];

  const buttonHandler = (e) => {
    setUserChoice([...userChoice, parseInt(e.target.value)]);
  };
  console.log(userChoice);

  const pwHandler = (e) => {
    e.preventDefault();
    if (password.length !== userChoice.length) {
      setUserChoice([]);
      return false;
    }
    const match = password.every(item => userChoice.includes(item));
    if(match) {
        setLoggedIn(true)
        setUserChoice([])
    } else {
        setUserChoice([])
    }
  };

  return (
    <div>
      {nums.map((num) => (
        <>
          <button onClick={buttonHandler} value={num}>
            {num}
          </button>
        </>
      ))}
      <button onClick={pwHandler}>submit</button>
      {loggedIn ? "correct" : "please enter the correct pw"}
    </div>
  );
};

export default Passcode;
