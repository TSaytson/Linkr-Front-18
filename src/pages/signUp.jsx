import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from 'sweetalert';

export default function SignUp() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        username: '',
        picture: ''
    });

    function handleSubmit(e){
        e.preventDefault();
        const {username, password, email, picture} = form;
        if (!email || !password || !username || !picture)
            swal({
                title: "Erro",
                text: "Por favor, preencha todos os campos",
                icon: "error"
            });
        else {
            console.log(form);
        }
    }

    function handleForm(e){
        setForm({...form, [e.target.name] : e.target.value});
    }

    return (
        <Wrapper>
            <Linkr>
                <div>
                    <h1>linkr</h1>
                    <p>Save, share and discover the best links on the web</p>
                </div>
            </Linkr>
            <Form onSubmit={handleSubmit}>
                    <input 
                    name="email"
                    type="email" 
                    value={form.email}
                    onChange={handleForm}
                    placeholder="e-mail"
                    />
                    <input 
                    name='password'
                    type="password" 
                    value={form.password}
                    onChange={handleForm}
                    placeholder="password"
                    />
                    <input
                    name='username'
                     type='text' 
                     value={form.name}
                     onChange={handleForm}
                     placeholder="username"
                    />
                    <input 
                    name='picture'
                    type='url' 
                    value={form.picture}
                    onChange={handleForm}
                    placeholder="picture url"
                    />
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