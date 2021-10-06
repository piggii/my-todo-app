import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.div`
    display: flex;
    padding: 50px;
    border-style: hidden;
    border-radius: 10px;
    background-color: #fce5eb;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputContainer = styled.div`
    display: flex;
    padding: 10px;
    margin: 10px;
    border-style: solid;
    border-radius: 10px;
    border-color: #dbbbdd;
    background-color: #ffffff;
`

export const InputStyled = styled.input`
    font-family: "Kanit", sans-serif;
    border: none;
    padding: 0px;
    margin: 0px;
    background-color: #ffffff;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: #dbbbdd; 
    }
`

export const IconContainer = styled.div`
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

export const ErrParagraph = styled.p`
    font-family: "Kanit", sans-serif;
    padding: 0px 10px;
    margin: 0px;
    color: red;
    font-size: 10px;
    text-align: right;
`

export const ButtonStyled = styled.button`
    font-family: "Kanit", sans-serif;
    padding: 10px;
    margin: 10px;
    border-style: hidden;
    border-radius: 10px;
    color: #ffffff;
    background-color: #dbbbdd;
    :hover {
        background-color: #d688db;
    }
`