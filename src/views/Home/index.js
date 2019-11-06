import React, { Component } from 'react';
import { BackGroundImagem, ContainerLogin, OverlayImagem, ButtomCustom ,ButtomLogin} from './styles';
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

    animateCSSIN = (element, animationName, callback) => {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        //node.addEventListener('animationend', handleAnimationEnd)
    }
    animateCSSOUT = (element, animationName, callback) => {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }

    handleAnimationEnd = (node) => {
        node.classList.remove('animated', "fadeIn")
        node.removeEventListener('animationend', this.handleAnimationEnd)

    }

    render() {
        return (
            <div class="container2 animated fadeIn delay-1s">
                <div className="row">
                    <div className="col-sm-5 col-md-6 col-lg-7  col-xl-8">
                        <BackGroundImagem>
                            <OverlayImagem />
                        </BackGroundImagem>
                    </div>
                    <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4">
                        <ContainerLogin>
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

                                        <a style={{ fontSize: 12, color: 'black', display: 'block', marginTop: 10, cursor: 'pointer' }} onClick={() => this.setState({ isLogin: !this.state.isLogin })}>
                                            {"Ainda não possue conta? Cadastre-se"}
                                        </a>
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
                        </ContainerLogin>
                    </div>
                </div>
            </div>
        );
    }
}
