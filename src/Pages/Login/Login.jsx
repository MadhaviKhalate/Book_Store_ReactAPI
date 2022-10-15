import React from 'react'
import TextField from '@mui/material/TextField'
import onlinebookshopping from '../../Assets/onlinebookshopping.png'
import './Login.css'
import { signIn } from '../../Services/UserServices';
import { useNavigate } from 'react-router-dom';


const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login(props) {

    const navigate = useNavigate();
    const [LoginObj, setLoginObj] = React.useState({ EmailId: "", Password: "" });
    const [regexObj, setRegExObj] = React.useState({
        emailBorder: false,
        passwordBorder: false,
        emailHelper: "",
        passwordHelper: "",
      });

    const takeEmail = (event) => {
        setLoginObj((prevState) => ({ ...prevState, EmailId: event.target.value }));
    };
    const takePassword = (event) => {
        setLoginObj((prevState) => ({ ...prevState, Password: event.target.value }));
    };

    const OnSubmit = () => {
        let emailTest = emailRegex.test(LoginObj.EmailId);
        let passwordTest = passwordRegex.test(LoginObj.Password);
    
        if (emailTest === false) {
          setRegExObj((prevState) => ({
            ...prevState,
            emailBorder: true,
            emailHelper: "enter correct email",
          }));
        } else if (emailTest === true) {
          setRegExObj((prevState) => ({
            ...prevState,
            emailBorder: false,
            emailHelper: "",
          }));
        }
        if (passwordTest === false) {
          setRegExObj((prevState) => ({
            ...prevState,
            passwordBorder: true,
            passwordHelper: "enter correct password",
          }));
        } else if (passwordTest === true) {
          setRegExObj((prevState) => ({
            ...prevState,
            passwordBorder: false,
            passwordHelper: "",
          }));
        }
    
        if (emailTest === true && passwordTest === true) {
            signIn(LoginObj).then((response)=>{
              console.log(response); localStorage.setItem("Token",response?.data?.data);
              navigate('/Home')})
              .catch((error)=>{console.log(error)});;
        }
      };

      const changeSignUp = ()=>{
        props.ListenToSignup(true)
    }


    return (
        <div className="LoginmainContainer">
            <div className="loginContainer">
                <div className="section">
                    <div className="imgsection">
                        <div className="imgs">
                            <img src={onlinebookshopping} />
                            <h2 className="headg">ONLINE BOOK SHOPPING</h2>
                        </div>
                    </div>
                    <div className="logincard">
                        <div className="lgnbtns">
                            <button className="loginbtn">LOGIN</button>
                            <button className="signinbtn" onClick={changeSignUp}>SIGNUP</button>
                        </div>
                        <div className="inputfeilds">
                            <label className="emailid">Email Id</label>
                            <TextField id="outlined-basic" className="emailinput" onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />

                            <label className="paswd">Password</label>
                            <TextField id="outlined-basic" className="pawdinput" onChange={takePassword}  error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}  label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />

                            <label className="frgtpswd">Forgot Password?</label>
                            <button className="lgnbtn" onClick={OnSubmit}>Login</button>

                            <label className="or">OR</label>

                        </div>
                        <div className="googlebtn">
                            <button className="google">Facebook</button>
                            <button className="facebook">Google</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login