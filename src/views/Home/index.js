import React, { Component } from 'react';
import { BackGroundImagem, ContainerAuth, OverlayImagem, ButtomCustom ,ButtomLogin} from './styles';
import LoginComponent from './LoginComponent'
import CadastroComponent from './CadastroComponent'
import { IoIosArrowRoundForward } from "react-icons/io";


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    render() {
        return (
            <div className="container2 animated fadeIn">
                <div className="row">
                    <div className="col-sm-5 col-md-6 col-lg-7  col-xl-8">
                        <BackGroundImagem>
                            <OverlayImagem />
                        </BackGroundImagem>
                    </div>
                    <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4">
                        <ContainerAuth>
                            {this.state.isLogin ?
                                <LoginComponent class="animated fadeIn " />
                                :
                                <CadastroComponent class="animated fadeIn " />
                            }
                            <div style={{  paddingRight: 20, paddingLeft: 40 }}>
                                {this.state.isLogin ?
                                    <div style={{ display: 'flex', width: 300, flexDirection: 'column', justifyContent: 'flex-start' }}>
                                        <ButtomCustom type="button" onClick={() => this.setState({ isLogin: !this.state.isLogin })}>
                                            {"Entrar"}
                                        </ButtomCustom>

                                        <span style={{ fontSize: 12, color: 'black', display: 'block', marginTop: 10, cursor: 'pointer' }} onClick={() => this.setState({ isLogin: !this.state.isLogin })}>
                                            {"Ainda não possue conta? Cadastre-se"}
                                        </span>
                                    </div>
                                    :
                                    <div style={{ display: 'flex', width: 300, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <ButtomCustom type="button" onClick={() => this.setState({ isLogin: !this.state.isLogin })}>
                                            {"Cadastrar"}
                                        </ButtomCustom>

                                        <ButtomLogin onClick={() => this.setState({ isLogin: !this.state.isLogin })}>
                                            {"Login"}<IoIosArrowRoundForward />
                                        </ButtomLogin>
                                    </div>
                                }
                            </div>
                        </ContainerAuth>
                    </div>
                </div>
            </div>
        );
    }
}
