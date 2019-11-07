import React, { Component } from 'react';
import '../../assets/css/component.css'
import '../../assets/css/demo.css'
import '../../assets/css/icons.css'
import { fazlogout } from '../../service/db'
import { withRouter } from 'react-router-dom'

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
      <section className="pricing-section bg-7 ">
        <div className="row" style={{display: 'flex',flexDirection: 'row'}}>

          <div className="pricing pricing--norbu animated fadeInDown ">
            <div className="pricing__item pricing__item--featured">
              <h3 className="pricing__title">Informações do Usuário</h3>
              <ul className="pricing__feature-list">
                <li className="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.nome : "..."}</li>
                <li className="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.email : "..."}</li>
                <li className="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.tel : "..."}</li>
                <li className="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.cpf : "..."}</li>
              </ul>
              <button onClick={() => this.logout()} className="pricing__action">Logout</button>
            </div>
          </div>
          <div className="pricing pricing--norbu animated fadeInDown col-sm-7 col-md-6 col-lg-5 col-xl-4">
            <div className="pricing__item pricing__item">
              <h3 className="pricing__title">Informações do Usuário</h3>
              <ul className="pricing__feature-list">
                <li className="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.nome : "..."}</li>
                <li className="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.email : "..."}</li>
                <li className="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.tel : "..."}</li>
                <li className="pricing__feature animated fadeIn delay-1s">{usuario ? usuario.cpf : "..."}</li>
              </ul>
              <button onClick={() => this.logout()} className="pricing__action">Logout</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Listagem);
