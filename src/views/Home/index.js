import React, { Component } from 'react';
import { Container, BackGroundImagem, ContainerLogin, OverlayImagem } from './styles';
import LoginComponent from './LoginComponent'
import CadastroComponent from './CadastroComponent'
import { Row, Col } from 'react-grid-system';
import { Flex, Box } from '@rebass/grid'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    render() {
        return (

                <Flex  style={{ height: '-webkit-fill-available' }}>
                    <Box width={3 / 4} px={2}>
                        <BackGroundImagem>
                            <OverlayImagem />
                        </BackGroundImagem>
                    </Box >
                    <Box width={1 / 4} px={2}>
                        <ContainerLogin>
                            <CadastroComponent />
                        </ContainerLogin>
                    </Box >

                </Flex>

        );
    }
}
