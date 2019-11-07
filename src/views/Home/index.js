import React, { Component } from 'react';
import { BackGroundImagem, ContainerAuth, OverlayImagem} from './styles';
import LoginComponent from './LoginComponent'
import CadastroComponent from './CadastroComponent'



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
                                <LoginComponent goToCad={()=>this.setState({ isLogin: !this.state.isLogin })} className="animated fadeIn " />
                                :
                                <CadastroComponent goToLogin={()=>this.setState({ isLogin: !this.state.isLogin })} className="animated fadeIn " />
                            }
                        </ContainerAuth>
                    </div>
                </div>
            </div>
        );
    }
}
