import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: row;
`;

export const BackGroundImagem = styled.div`
   display: flex;
   height: 100%;
    width: 100%;
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
    display: flex;
    height: 100%;
    width: 100%;
    background-color: green;
`;

export const InputCustom = styled.input`
    background-color: #efeeed;
    border-color: #dbdbdb;
    :focus {
        background-color: #555555;
    }
`;

export const ButtomCustom = styled.button`
    color: #efeeed;
    background-color: #40c8f4;
    
    :hover {
        background-color: #40c8f470;
    }
`;

