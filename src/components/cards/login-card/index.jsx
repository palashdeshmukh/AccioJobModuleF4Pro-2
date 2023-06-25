import React from "react";
import { styled } from "styled-components";
const Login_Card_Container = styled.div`
border-radius: 10px;
width: 100%;
max-width: 350px;
display: flex;
justify-content: center;
padding: 20px 0px;
background-color: whitesmoke;
`
const Login_Card_Sub_Container =styled.form`
background-color: whitesmoke;
border-radius: 20px;
display:flex;
flex-direction: column;
justify-content: center;
justify-content: space-evenly;
height: 100%;
width: 100%;
max-width: 320px;

`
const Login_Card_Image_Container =styled.div`

`
const Login_Card_Input_Container=styled.div`



`
const Login_Card_Input_Sub_Container=styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding: 10px;


`
const Login_Card_Button_Container=styled.div`

`
const Login_Card_Button_Sub_Container=styled.div`
text-align: center;


`
const Login_Card_Label_Text=styled.label`
padding: 0px 5px;
color: rgba(117, 117, 117, 1);
font-family: sans-serif;

`
const Login_Card_Text=styled.a`
`
const Login_Card_Button_Footer_Container=styled.div`
display:flex;
justify-content:space-between;
flex-direction: row;
flex-wrap: nowrap;
padding: 30px 15px;
font-size: 14px;
color: rgba(117, 117, 117, 1);

`
const Login_Card_Input=styled.input`
height: 45px;
border-radius: 10px;
color: rgba(117, 117, 117, 1);
border: none;
outline: none;
padding: 0px 10px;
text-transform: capitalize;
font-size: 16px;
box-shadow: 0px 0px 3px 0px lightgray;
background-color: white;
&::placeholder{
    text-transform:lowercase;
}
`
const Login_Card_Button=styled.button`
width:100%;
max-width: 220px;
height: 50px;
font-size: 18px;
border-radius:5px;
border: none;
color: white;
background-color:rgba(72, 50, 135, 1);


`
const Break=styled.br`
`
const LoginCard=()=>{
    return(
        <>
        <Login_Card_Container>
            <Login_Card_Sub_Container>
            <Login_Card_Image_Container></Login_Card_Image_Container>
            <Login_Card_Input_Container>
                <Login_Card_Input_Sub_Container>
                    <Login_Card_Label_Text>Email Address</Login_Card_Label_Text>
                    <Break/>
                    <Login_Card_Input type="email" placeholder="Username@gmail.com" required ></Login_Card_Input>
                </Login_Card_Input_Sub_Container>
                <Login_Card_Input_Sub_Container>
                <Login_Card_Label_Text>Password</Login_Card_Label_Text>
                <Break/>
                    <Login_Card_Input type="password" placeholder="password" required></Login_Card_Input>
                </Login_Card_Input_Sub_Container>
            </Login_Card_Input_Container>
            <Login_Card_Button_Container>
            <Login_Card_Button_Sub_Container><Login_Card_Button>Login</Login_Card_Button></Login_Card_Button_Sub_Container>
            <Login_Card_Button_Footer_Container><Login_Card_Text>Signup</Login_Card_Text><Login_Card_Text>Forget Password ?</Login_Card_Text></Login_Card_Button_Footer_Container>
            </Login_Card_Button_Container>
            </Login_Card_Sub_Container>
        </Login_Card_Container>
            
        </>
    )
}

export default LoginCard;