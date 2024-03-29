import React, { useState, useEffec, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//recieves last state snapshop, and an action
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return { value: action.val , isValid: action.val.includes('@') }
  }
  if(action.type ==='INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
};
const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return { value: action.val , isValid: action.val.trim().length > 6 }
  }
  if(action.type ==='INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });
  const [pwState, dispatchPw] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  });

  const { isValid: emailIsVald } = emailState;
  const { isValid: pwIsVald } = pwState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailIsVald.isValid && pwIsVald.isValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsVald, pwIsVald]);

  const emailChangeHandler = (e) => {
    //pass in an action, usually an obj with a property of type and a value that identifies it, and a payload
    dispatchEmail({ type: 'USER_INPUT', val: e.target.value })

    setFormIsValid(
      e.target.value.includes('@') && pwState.isValid
    );
  };

  const passwordChangeHandler = (e) => {
    dispatchPw({ type: 'USER_INPUT', val: e.target.value })

    setFormIsValid(
      emailState.isValid && e.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPw({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(emailState.value, pwState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            pwState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pwState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
