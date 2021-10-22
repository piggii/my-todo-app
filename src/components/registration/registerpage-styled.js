import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AllContainer = styled.div`
    display: flex;

    @media only screen and (min-width: 320px) {
        width: 80%;
    }

    @media only screen and (min-width: 768px) {
        width: 60%;
    }

    @media only screen and (min-width: 1024px) {
        width: 40%;
    }

    @media only screen and (min-width: 1440px) {
        width: 30%;
    }

    @media only screen and (min-width: 1920px) {
        width: 20%;
    }
`

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: hidden;
    border-radius: 10px;
    background-color: #fce5eb;

    @media only screen and (min-width: 320px) {
        padding: 30px 20px;
    }

    @media only screen and (min-width: 375px) {
        padding: 40px 30px;
    }

    @media only screen and (min-width: 425px) {
        padding: 50px 40px;
    }

    @media only screen and (min-width: 768px) {
        padding: 70px 60px;
    }
`

export const FormContainer = styled.form`
    width: 100%;
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
    width: 100%;
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