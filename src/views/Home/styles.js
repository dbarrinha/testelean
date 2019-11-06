import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: row;
`;

export const BackGroundImagem = styled.div`
    
    height: 100%;
    resize: vertical;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${require('../../assets/imgs/bg.jpg')})
`;

export const OverlayImagem = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(64,200,244,0.6), rgba(33, 121, 181,0.8));
`;

export const ContainerLogin = styled.div`
    height: 100vh;
`;

export const FormInput = styled.div`
    display: grid;
    justify-content: start;
    align-items: center;
`;

export const FormLabel = styled.label`
    color: #999999;
`;

export const InputCustom = styled.input`
    color: #efeeed;
    border-color: #dbdbdb;
   
    :focus {
        color: #555555;
    }
`;

export const ButtomCustom = styled.button`
    color: #efeeed;
    background-color: #40c8f4;
    
    :hover {
        background-color: #40c8f470;
    }
`;

