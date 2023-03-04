import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <Wrapper>
            <Linkr>
                <div>
                    <h1>linkr</h1>
                    <p>Save, share and discover the best links on the web</p>
                </div>
            </Linkr>
            <Form>
                    <input type="email" required name="email" placeholder="e-mail"></input>
                    <input type="password" required name="password" placeholder="password"></input>
                    <input type='text' required name='username' placeholder="username"></input>
                    <input type='text' required name='picture' placeholder="picture url"></input>
                    <button>Sign Up</button>
                    <Link to={'/'}>Switch back to log in</Link>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    
`
const Linkr = styled.div`
    background-color: #151515;
    width: 60vw;
    height: 100vh;
    display: flex;
    div{
        margin-top: 300px;
        h1{
            font-family: 'Passion One';
            font-weight: bold;
            letter-spacing: .05em;
            font-size: 106px;
            color:white;
        }
        p{
            font-family: 'Oswald';
            font-size: 43px;
            color: white;
            font-weight: bold;
        }
    }
`
const Form = styled.form`
    height: 100vh;
    width: 40vw;
    background-color: #303030;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        box-sizing: border-box;
        background: white;
        border-radius: 6px;
        height: 65px;
        width: 35vw;
        padding-left: 5px;
        margin-bottom: 10px;
        ::placeholder{
            font-family: 'Oswald';
            font-size: 27px;
            font-weight: bold;
            color:#9F9F9F;
        }
    }
    button{
        height: 65px;
        width: 35vw;
        background: #1877f2;
        border-radius: 6px;
        font-family: 'Oswald';
        color: white;
        font-size: 27px;
        font-weight: bold;
        border: none;
        cursor: pointer;
    }
    a{
        font-size: 20px;
        color: white;
        font-family: 'Lato';
        margin-top: 15px;
    }
`