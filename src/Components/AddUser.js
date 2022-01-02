import react from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css"
import { useState } from "react/cjs/react.development";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser (props) {
  const [enteredName,setEnteredName]= useState('');
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const [enteredAge,setEnteredAge]= useState('');
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    
    const userInfo = {
      name:enteredName,
      age:enteredAge,
      id:Math.random().toString()
    };
    props.onAddUser(userInfo);
    event.preventDefault();
    setEnteredAge('');
    setEnteredName('');
  }
  return (
    <div>
      <ErrorModal title='error occur' message='wrong'/>
    <Card className={styles.input}>
      <label>Username</label>
      <input value={enteredName} type='text' onChange={nameChangeHandler}/>
      <label>Age (Years)</label>
      <input value={enteredAge} type='number' onChange={ageChangeHandler}/>
      <Button type="submit" onClick={submitHandler}>Add User</Button>
    </Card>

    </div>
  );
}
export default AddUser;