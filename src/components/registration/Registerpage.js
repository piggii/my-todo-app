import React , {useState} from 'react'
import { ButtonStyled, Container, CardContainer, ErrParagraph, FormContainer, IconContainer, InputContainer, InputStyled } from './registerpage-styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

export default function Registerpage() {
    const errors = {
        email: false,
        username: false,
        password: false,
        confirmPassword: false
    };

    const [err, setErr] = useState(errors);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function validation(e) {
        e.preventDefault()
        let cloneErr = {...err};
        for(let index = 0; index < e.target.length; index++) {
            switch (e.target[index].dataset.type) {
                case "email":
                    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if(e.target[index].value === "" || !e.target[index].value.match(regEx)) {
                        cloneErr.email = true;
                        setErr(cloneErr);
                    }else {
                        cloneErr.email = false;
                        setErr(cloneErr);
                    }
                    break;

                case "username":
                    if(e.target[index].value === "" || e.target[index].value.length < 6) {
                        cloneErr.username = true;
                        setErr(cloneErr);
                    }else {
                        cloneErr.username = false;
                        setErr(cloneErr);
                    }
                    break;

                case "password":
                    if(e.target[index].value === "" || e.target[index].value.length < 6) {
                        cloneErr.password = true;
                        setErr(cloneErr);
                    }else {
                        cloneErr.password = false;
                        setErr(cloneErr);
                    }
                    break;

                case "confirmPassword":
                    if(e.target[index].value === "" || e.target[index].value !== e.target[index-1].value ) {
                        cloneErr.confirmPassword = true;
                        setErr(cloneErr);
                    }else {
                        cloneErr.confirmPassword = false;
                        setErr(cloneErr);
                    }
                    break;

                default:
                    break;
            }
        }
    }

    return (
        <Container>
            <CardContainer>
                <FormContainer onSubmit={(e) => validation(e)}>
                    <InputContainer>
                        <InputStyled placeholder="Email address" data-type="email" />
                    </InputContainer>
                    {err.email ? <ErrParagraph>*Invalid email address</ErrParagraph> : null}

                    <InputContainer>
                        <InputStyled placeholder="Username" data-type="username" />
                    </InputContainer>
                    {err.username ? <ErrParagraph>*Username must be at least 6 characters</ErrParagraph> : null}
                    
                    <InputContainer>
                        <InputStyled type={showPassword ? "text" : "password"} placeholder="Password" data-type="password" />
                        <IconContainer><FontAwesomeIcon onClick={() => setShowPassword(!showPassword)} icon={showPassword ? faEye : faEyeSlash } /></IconContainer>
                    </InputContainer>
                    {err.password ? <ErrParagraph>*Password must be at least 6 characters</ErrParagraph> : null}
                    
                    <InputContainer>
                        <InputStyled type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password" data-type="confirmPassword" />
                        <IconContainer><FontAwesomeIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)} icon={showConfirmPassword ? faEye : faEyeSlash } /></IconContainer>
                    </InputContainer>
                    {err.confirmPassword ? <ErrParagraph>*Password not match</ErrParagraph> : null}
                    
                    <ButtonStyled data-type="btnSubmit">Register</ButtonStyled>
                </FormContainer>
            </CardContainer>
        </Container>
    )
}
