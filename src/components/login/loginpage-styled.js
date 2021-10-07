import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.div`
    display: flex;
    flexdirection: column;
    justify-content: center;
    align-items: center;
    border-style: hidden;
    border-radius: 10px;
    background-color: #fce5eb;
    padding: 50px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputContainer = styled.div`
    padding: 10px;
    margin: 10px;
    border-style: solid;
    border-radius: 10px;
    border-color: #dbbbdd;
    background-color: #ffffff; 
`

export const InputStyled = styled.input`
    font-family: "Kanit", sans-serif;
    border-style: none;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: #dbbbdd;
    }
`

export const IconContainer = styled.span`
    padding: 0px;
    margin: 0px;
    border-style: hidden;
    border-radius: 50px;
    background-color: #ffffff;
    z-index: 1;
    color: #dbbbdd;
    :hover {
        background-color: #f2f2f2;
    }
`

export const ButtonStyled = styled.button`
    font-family: "Kanit", sans-serif;
    padding: 10px;
    margin: 10px;
    color: #ffffff;
    border-style: hidden;
    border-radius: 10px;
    background-color: #dbbbdd;
`

export const ErrParagraph = styled.p`
    font-family: "Kanit", sans-serif;
    padding: 0px 10px;
    margin: 0px;
    font-size: 10px;
    color: red;
    text-align: right;
`

export const Paragraph = styled.p`
    font-family: "Kanit", sans-serif;
    padding: 0px 10px;
    margin: 0px;
    font-size: 10px;
    color: #CA9DCC;
    text-align: right;
`

export const RegisterParagraph = styled.span`
    padding-left: 5px;
    color: #aa88bb;
`