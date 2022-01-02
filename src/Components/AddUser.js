import react from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import { useState } from "react/cjs/react.development";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import React from "react";

function AddUser(props) {
  const [modalScreen, setModalScreen] = useState(<div></div>);
  const [enteredName, setEnteredName] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const [enteredAge, setEnteredAge] = useState("");
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const closeModal = () => {
    setModalScreen(<div></div>);
  };
  const submitHandler = (event) => {
    if (enteredName.length === 0) {
      setModalScreen(
        <ErrorModal
          title="No Name"
          message="Please enter the Name!"
          onClick={closeModal}
        />
      );
      return;
    } else if (enteredAge.length === 0) {
      setModalScreen(
        <ErrorModal
          title="No Age"
          message="Please enter the Age!"
          onClick={closeModal}
        />
      );
      return;
    } else if (enteredAge < 1) {
      setModalScreen(
        <ErrorModal
          title="Age Error"
          message="Age cannot be minus!"
          onClick={closeModal}
        />
      );
      return;
    }
    const userInfo = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onAddUser(userInfo);
    event.preventDefault();
    setEnteredAge("");
    setEnteredName("");
  };
  return (
    <>
      <Card className={styles.input}>
        <label>Username</label>
        <input value={enteredName} type="text" onChange={nameChangeHandler} />
        <label>Age (Years)</label>
        <input value={enteredAge} type="number" onChange={ageChangeHandler} />
        <Button type="submit" onClick={submitHandler}>
          Add User
        </Button>
      </Card>
      {modalScreen}
    </>
  );
}
export default AddUser;
