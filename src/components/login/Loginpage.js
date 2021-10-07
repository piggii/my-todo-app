import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ButtonStyled, CardContainer, Container, ErrParagraph, FormContainer, IconContainer, InputContainer, InputStyled, Paragraph, RegisterParagraph } from './loginpage-styled'

export default function Loginpage() {
    const errors = {
        username: false,
        password: false
    }

    const [err, setErr] = useState(errors)
    const [ShowPassword, setShowPassword] = useState(false);

    function validation(e) {
        e.preventDefault()
        let admin = {
            username: "Piggii",
            password: "leoeye2109"
        }
        let cloneErr = {...err};
        for(let index = 0; index < e.target.length; index++) {
            switch (e.target[index].dataset.type) {
                case "username":
                    if(e.target[index].value === "" || e.target[index].value !== admin.username) {
                        cloneErr.username = true;
                        setErr(cloneErr);
                    }else {
                        cloneErr.username = false;
                        setErr(cloneErr);
                    }
                    break;
            
                case "password":
                    if(e.target[index].value === "" || e.target[index].value !== admin.password) {
                        cloneErr.password = true;
                        setErr(cloneErr);
                    }else {
                        cloneErr.password = false;
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
                        <InputStyled placeholder="Username" data-type="username" />
                    </InputContainer>
                    {err.username ? <ErrParagraph>*Invalid username</ErrParagraph> : null}
                    
                    <InputContainer>
                        <InputStyled type={ShowPassword ? "text" : "password"} placeholder="Password" data-type="password" />
                        <IconContainer><FontAwesomeIcon onClick={() => setShowPassword(!ShowPassword)} icon={ShowPassword ? faEye : faEyeSlash} /></IconContainer>
                    </InputContainer>
                    {err.password ? <ErrParagraph>*Password is incorrect</ErrParagraph> : null}

                    <ButtonStyled data-type="btnLogin">Log In</ButtonStyled>

                    <Paragraph>Don't have an account? <RegisterParagraph>Register</RegisterParagraph> </Paragraph>
                </FormContainer>
            </CardContainer>
        </Container>
    )
}






























