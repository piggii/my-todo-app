import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AllCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;

    @media only screen and (min-width: 425px) {
        width: 90%;
    }

    @media only screen and (min-width: 768px) {
        width: 70%;
    }

    @media only screen and (min-width: 1024px) {
        width: 50%;
    }

    @media only screen and (min-width: 1920px) {
        width: 30%;
    }
`

export const CardContainer = styled.div`
    width: 80%;
    padding: 10px;
`

export const FormUserInput = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserInputContainer = styled.div`
    width: 100%;
    display: flex;
    border-style: solid;
    border-color: #dbbbdd;
    border-radius: 8px;
    
`

export const UserInputStyled = styled.input`
    width: 100%;
    font-family: "Kanit", sans-serif;
    flex: 3;
    border-style: hidden;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: #dbbbdd;
    }
`

export const AddListBtn = styled.button`
    width: 100%;
    font-family: "Kanit", sans-serif;
    flex: 1;
    border-style: solid;
    border-color: #dbbbdd;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: #dbbbdd;
    color: #ffffff;
    padding: 2px;
`

export const StatusParagraph = styled.p`
    font-family: "Kanit", sans-serif;
    border-style: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: #ffffff;
    background-color: #dbbbdd;
    text-align: center;
    padding: 4px;
    margin: 0px
`

export const AllListContainer = styled.div`
    border-style: solid;
    border-color: #dbbbdd;
    padding: 4px;
`

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 4px 0px;
`

export const Checkbox = styled.input`
    width: 100%;
    flex: 0.5;
    margin: 5px 0px 0px 0px;
`

export const CheckboxDisable = styled.input`
    width: 100%;
    flex: 0.5;
    margin: 5px 0px 0px 0px;
`

export const ListDetail = styled.div`
    font-family: "Kanit", sans-serif;
    flex: 3;
    color: #dbbbdd;
`

export const Detail = styled.div`
    font-family: "Kanit", sans-serif;
    width: 100%;
    color: #dbbbdd;
`

export const DoneDetail = styled.div`
    font-family: "Kanit", sans-serif;
    flex: 4;
    width: 100%;
    color: #dbbbdd;
`

export const EditBtn = styled.button`
    flex: 0.5;
    border-style: solid;
    border-radius: 6px;
    border-color: #dbbbdd;
    color: #dbbbdd;
    background-color: #ffffff;
    padding: 0px;
    margin: 0px 2px;
`

export const FormEdit = styled.form`
    width: 100%;
    flex: 5;
`

export const InputEditContainer = styled.div`
    width: 100%;
    display: flex;
`

export const InputEdit = styled.input`
    font-family: "Kanit", sans-serif;
    width: 100%;
    flex: 4;
    padding: 0px;
    margin: 0px 2px;
    border-style: solid;
    border-radius: 6px;
    border-color: #dbbbdd;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: #dbbbdd;
    }
`


