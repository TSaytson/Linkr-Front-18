import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import { AuthContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import {ThreeDots} from 'react-loader-spinner';

export default function SignIn() {
    const {API_URL, setToken} = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [clicked, setClicked] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const { password, email } = form;
        if (!email || !password)
            swal({
                title: "Erro",
                text: "Por favor, preencha todos os campos",
                icon: "error"
            });
        else {
            try {
                setClicked(true);
                const response =
                    await axios.post(`${API_URL}/sign-in`, form);
                setToken(response.data.token);
                navigate('/timeline');
            } catch (error) {
                setClicked(false);
                console.log(error.response.data);
                swal({
                    title: "Erro!",
                    text: (error.response.data[0] ? 
                    error.response.data[0] : error.response.data.message),
                    icon: "error"
                });

            }
        }
    }

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
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
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleForm}
                    placeholder="password"
                />
                <button type="submit" disabled={clicked}>
                    {clicked ? <ThreeDots
                    color="#183bad"
                    wrapperStyle={{
                        display: clicked ? 'flex' : 'none',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}/>: 'Login'}</button>
                <Link to={'/sign-up'}>First time? Create an account</Link>
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