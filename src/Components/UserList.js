import react, {useState} from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import styles from './UserList.module.css';

function UserList (props) {
  // const userListKey = props.userlist.map((user)=>{
  //   return ({
  //     ...user,
  //     key : user.id
  //   });
  // })
  // console.log(userListKey);
  return (
    <Card className={styles.users}>
    <ul>
      {props.userlist.map((user)=>(
        <li key={user.key}>
        <UserItem key={user.key} name={user.name} age={user.age}/>
        </li>
      ))}
    </ul>
    </Card>
  );
}
export default UserList;