import styled from 'styled-components'


export const ItemDescricao = styled.span`
    color: black; 
    margin: 2px;
`;

export const DadosUser = styled.div`
    width: 300px;
    min-height: 300px;
    height: 300px;
    background-color: #40c8f470; 
    display: flex;
    padding: 10px;
    justify-content: start;
    align-self: center;
    border-radius: 10px;

`;

export const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 300px;
    margin-bottom: 20px;
`;

export const FormLabel = styled.label`
    color: #999999;
    font-size: 0.8rem;
`;

export const InputCustom = styled.input`
    color: #555555;
    border-color: #dbdbdb;
    width: auto;
    width: 300px;
    min-height: 30px;
    :focus {
        color: #555555;
        border-left-width: 0px;
        border-right-width: 0px;
        border-top-width: 0px;
    }
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
    
`;

export const ButtomCustom = styled.button`
    color: #ffffff;
    background-color: #40c8f4;
    border :0px;
    border-radius: 20px;
    text-align: center;
    font-size: 12px;
    width: 100px;
    min-height: 30px;
    box-shadow: 0.3px 0.3px 0.5px grey;
    cursor: pointer;
    :hover {
        background-color: #40c8f470;
        box-shadow: 0.7px 0.7px 3px grey;
    }
`;


export const ButtomLogin = styled.button`
display: flex;
justify-content: space-evenly;
    color: black;
    background-color: #ffffffff;
    border :0px;
    border-radius: 20px;
    text-align: center;
    font-size: 12px;
    width: 100px;
    min-height: 30px;
    box-shadow: 0.3px 0.3px 0.5px grey;
    cursor: pointer;
    :hover {
        box-shadow: 0.7px 0.7px 3px grey;
    }
`;

export const SpanError = styled.span`
    color: #e78;
    font-size: 12px;
    margin-top: 5px;
`;