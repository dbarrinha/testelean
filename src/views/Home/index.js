import React, { Component } from 'react';
import { BackGroundImagem, ContainerLogin, OverlayImagem } from './styles';
import LoginComponent from './LoginComponent'
import CadastroComponent from './CadastroComponent'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    render() {
        return (
            <div class="container2">
                <div className="row">
                    <div className="col-sm-5 col-md-6 col-lg-7  col-xl-8">
                        <BackGroundImagem>
                            <OverlayImagem />
                        </BackGroundImagem>
                    </div>
                    <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4">
                        <ContainerLogin>
                            <CadastroComponent />
                        </ContainerLogin>
                    </div>
                </div>
            </div>
        );
    }
}
