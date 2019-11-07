import React, { Component } from 'react';
import { Content, DadosUser } from './styles';
import '../../assets/css/component.css'
import '../../assets/css/demo.css'
import '../../assets/css/icons.css'
import { fazlogout } from '../../service/db'
import { withRouter} from 'react-router-dom'

class Listagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: null
    }
  }

  componentDidMount = async () => {
    let usuario = await localStorage.getItem("User@testelean")
    if (usuario) {
      this.setState({
        usuario: JSON.parse(usuario)
      })
    }
  }

  logout = async () => {
    let res = await fazlogout();
    if (res) {
      console.log("teste")
      this.props.history.push('/')
    }
  }

  render() {
    let { usuario } = this.state
    return (
      <section class="pricing-section bg-7 ">
        <div class="pricing pricing--norbu animated fadeInDown">
          <div class="pricing__item pricing__item--featured">
            <h3 class="pricing__title">Informações do Usuário</h3>
            <ul class="pricing__feature-list">
              <li class="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.nome : "..."}</li>
              <li class="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.email : "..."}</li>
              <li class="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.tel : "..."}</li>
              <li class="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.cpf : "..."}</li>
            </ul>
            <button onClick={()=> this.logout()} class="pricing__action">Logout</button>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Listagem);
