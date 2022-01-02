import logo from './logo.svg';
import './App.css';
import AddUser from './Components/AddUser';
import UserList from './Components/UserList';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import { useState } from 'react/cjs/react.development';

const DUMMY_USER_LIST = [
  {
    name:'kim',
    age:24,
    id:'e1',
    key:'e1'
  }
];

function App() {
  const [userList,setUserList] = useState(DUMMY_USER_LIST);
  const userAddHandler = (userInfo) => {
    const addKeyUserInfo = {
      ...userInfo,
      key : userInfo.id
    };
    setUserList((prevState)=>{
      return [addKeyUserInfo, ...prevState];
    });
  };
  
  return (
    <div>
      <AddUser onAddUser={userAddHandler}/>
      <UserList userlist={userList}/>
    </div>
  );
}

export default App;
