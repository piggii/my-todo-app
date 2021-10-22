import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt, faEdit, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react';
import { AddListBtn, AllCardContainer, Container, CardContainer, FormUserInput, AllListContainer, StatusParagraph, UserInputContainer, UserInputStyled, ListContainer, Checkbox, ListDetail, EditBtn, InputEdit, FormEdit, InputEditContainer, Detail, CheckboxDisable, DoneDetail } from './todolist-styled';



export default function Todolist() { 

    const [list, setList] = useState([]);



    function addList(e) {
        e.preventDefault();
        const cloneList = [...list];
        cloneList.push({value : e.target[0].value, edit : false , done : false});
        setList(cloneList);
        e.target[0].value = "";
    }

    function deleteList(index) {
        const cloneList = [...list];
        cloneList.splice(index,1)
        setList(cloneList);
    }

    function editVisible(index) {
        const cloneList = [...list];
        if(cloneList[index].edit === true){
            cloneList[index].edit = false;
            setList(cloneList);
        }else {
            cloneList[index].edit = true;
            setList(cloneList);
        }
    }

    function editList(e,index) {
        e.preventDefault();
        const cloneList = [...list];
        cloneList[index].value = e.target[0].value;
        cloneList[index].edit = false;
        setList(cloneList);
    }

    function doneList(e,index) {
        e.preventDefault();
        const cloneList = [...list];
        cloneList[index].done = true;
        setList(cloneList);
    }

    return (
        <Container>
            <AllCardContainer>
                <CardContainer>
                    <FormUserInput onSubmit={(e) => addList(e)}>
                        <UserInputContainer>
                            <UserInputStyled placeholder="Add your list" type="text" />
                            <AddListBtn>Add list</AddListBtn>
                        </UserInputContainer>
                    </FormUserInput>
                </CardContainer>

                <CardContainer>
                    <StatusParagraph>In progress</StatusParagraph>
                    <AllListContainer>
                    {list.map((list, index) => {
                        return (
                            <div key={index}>
                                {list.done ? null :
                                    <ListContainer>
                                        <Checkbox type="checkbox" onClick={(e) => doneList(e,index)} />
                                        {list.edit ? null : <ListDetail><Detail>{list.value}</Detail></ListDetail>}
                                        {list.edit ? 
                                            (<FormEdit onSubmit={(e) => editList(e,index)}>
                                                <InputEditContainer>
                                                <InputEdit placeholder="Edit your list" type="text" />
                                                <EditBtn><FontAwesomeIcon icon={faCheck} /></EditBtn>
                                                <EditBtn onClick={() => editVisible(index)}><FontAwesomeIcon icon={faTimes} /></EditBtn>
                                                </InputEditContainer>
                                            </FormEdit>) : null}
                                        {list.edit ? null : <EditBtn onClick={() => editVisible(index)}><FontAwesomeIcon icon={faEdit} /></EditBtn>}
                                        <EditBtn onClick={() => deleteList(index)}><FontAwesomeIcon icon={faTrashAlt} /></EditBtn>
                                    </ListContainer>
                                }
                            </div>
                        )
                    })}
                    </AllListContainer>
                </CardContainer>

                <CardContainer>
                    <StatusParagraph>Done</StatusParagraph>
                    <AllListContainer>
                        {list.map((doneList, index) => {
                        return (
                            <div key={index}>
                                {doneList.done ? 
                                    <ListContainer>
                                        <CheckboxDisable type="checkbox" disabled="disabled" defaultChecked={true}  />
                                        <DoneDetail>{doneList.value}</DoneDetail>
                                    </ListContainer>  
                                    : null
                                }
                            </div>
                        )
                    })}
                    </AllListContainer>
                </CardContainer>
            </AllCardContainer>
        </Container>
    )
}
