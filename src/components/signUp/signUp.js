// import React, { useState } from "react";
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import { Checkbox } from "@material-ui/core";
// import NavBar from "../navBar/navBar";

// export default function SignUp({accountsArr,setAccountsArr,setIsLogged,setUserName}){
//     const nameRf = React.useRef();
//     const emailRf = React.useRef();
//     const pasawordRf = React.useRef();
//     const [nameError,setNameError]=useState()
//     const [emailError,setEmailError]=useState()
//     const [passwordError,setPasswordError]=useState()
//     // add the new account to the accounts list
//     //const addAccount


//     function name(text){
//         if(text=""){
//         setNameError("שדה חובה");
//         return false;
//     }
//     else {
//         return true;
//     }}

//     function password(text) {
//         if (text.length < 6) {
//             setPasswordError("הסיסמא חייבת להכיל לפחות 6 תווים");
//             return false;
//         }
//         else {
//             return true;
//         }
//     }

//     function email(text) {
//         const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
//         if (text.match(mailformat)) {
//             //checks if this email exist
//             const temp=AccountsList.accountsList.filter(account=>account.email===text)
//             if(temp.length>0){
//             setEmailError("כתובת מייל זו נמצאת בשימוש")
//             return false}
//             return true;
//         }
//         else {
//             setEmailError("כתובת מייל אינה תקנית");
//             return false;
//         }
//     }

//     const handleSubmit = e => {
//         e.preventDefault();
//         const newAccount = {
//             id: accountsArr.length + 1,
//             name: nameRf.current.value,
//             email: emailRf.current.value,
//             password: passwordRf.current.value
//         }
//         if (name(nameRf.current.value) && password(passwordRf.current.value) && email(emailRf.current.value)) {
//             addAccount(newAccount);
//             alert("איזה כיף! הצטרפת אלינו:)");
//             setAccountsArr([...accountsArr,newAccount])
//             setIsLogged(true);
//            window.history.back();
//         }
//     };

//     return(
//       <div>
//           <NavBar></NavBar>
//           <h2>יצירת חשבון</h2>
//           <form onSubmit = {handleSubmit} noValidate>
//               <div className>
//                 <label required>שם משפחה</label>
//                 <input type="text" ></input>
//               </div>
//               <label>שם פרטי</label>
//               <input type="text" ></input><br/>
//               <label>שם משתמש</label>
//               <input type="text" ></input><br/>
//               <label>טלפון</label>
//               <input type="text" ></input><br/>
//               <label>כתובת מייל</label>
//               <input type="email" ></input><br/>
//               <label>סיסמא</label>
//               <input type="password" ></input><br/>
//               <label>אני מאשר קבלת מיילים</label>
//               <Checkbox></Checkbox><br/>
//               <button type="submit">רישום </button>

//           </form>
//       </div>  
//     )

// }
// //export default SignUp

import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from "@material-ui/core";
import NavBar from "../navBar/navBar";

const SignUp=()=>{
    const [nameError,setNameError]=useState()
    const [emailError,setEmailError]=useState()
    const [passwordError,setPasswordError]=useState()



    function required(text){
        if(text=""){
        setNameError("שדה חובה");
        return false;
    }
    else {
        return true;
    }}

    return(
      <div>
          <NavBar></NavBar>
          <form>
              <br/>
              <label required>שם משפחה</label>
              <input type="text" ></input><br/>
              <label>שם פרטי</label>
              <input type="text" ></input><br/>
              <label>שם משתמש</label>
              <input type="text" ></input><br/>
              <label>טלפון</label>
              <input type="text" ></input><br/>
              <label>כתובת מייל</label>
              <input type="email" ></input><br/>
              <label>סיסמא</label>
              <input type="password" ></input><br/>
              <label>אני מאשר קבלת מיילים</label>
              <Checkbox></Checkbox><br/>
              <button type="submit">רישום </button>

          </form>
      </div>  
    )

}
export default SignUp