import React, { Component } from 'react';
import '../../assets/css/component.css'
import '../../assets/css/demo.css'
import '../../assets/css/icons.css'
import { fazlogout, getUsers, deletaUser } from '../../service/db'
import { withRouter } from 'react-router-dom'
import ModalCustom from './ModalCustom';
import CardUsuario from './CardUsuario';
import ConfirmDialogDelete from './ConfirmDialogDelete';

class Listagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: null,
      listaUsuarios: [],
      modalEditVisible: false,
      modalConfirmVisible: false,
      usuarioEdit: null
    }
  }

  componentDidMount = async () => {
    let usuario = await localStorage.getItem("User@testelean")
    this.buscaListaUsuarios()
    if (usuario) {
      this.setState({
        usuario: JSON.parse(usuario)
      })
    }
  }

  buscaListaUsuarios = async () => {
    let res = await getUsers();
    if (res) {
      this.setState({ listaUsuarios: res })
    }
  }

  logout = async () => {
    let res = await fazlogout();
    if (res) {
      console.log("teste")
      this.props.history.push('/')
    }
  }

  clearDados = () => {
    this.setState({
      modalEditVisible: false,
      modalConfirmVisible: false,
      usuarioEdit: null
    })
  }

  iniciaDelete = (usuario) => {
    console.log(usuario)
    this.setState({
      usuarioEdit: usuario,
      modalConfirmVisible: true
    })
  }

  iniciaEdit = (usuario) => {
    this.setState({
      usuarioEdit: usuario,
      modalEditVisible: true
    })
  }

  finalizaEdit = (res) => {
    if (res) {
      this.buscaListaUsuarios()
      this.clearDados()
    }
  }

  deletaUsuario = () => {
    let { usuarioEdit, usuario } = this.state
    if (usuarioEdit.email === usuario.email) {
      alert("Não é possível Excluir a si mesmo!")
      this.clearDados()
      return;
    }
    deletaUser(this.state.usuarioEdit.email).then(res => {
      this.buscaListaUsuarios()
      this.clearDados()
    })
  }

  render() {
    let { usuario } = this.state
    return (
      <>
        <section className="pricing-section bg-7 ">
          <div className="pricing pricing--norbu animated fadeInDown ">
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
          <div className="pricing pricing--norbu animated fadeInDown ">
            <div className="pricing__item pricing__item-md col-sm-7 col-md-6 col-lg-5 col-xl-4">
              {this.state.listaUsuarios.map((item, index) => {
                return <CardUsuario key={index} usuario={item} onEdit={() => { this.iniciaEdit(item) }} onDelete={() => { this.iniciaDelete(item) }} />
              })}

            </div>
          </div>
        </section>

        {this.state.usuarioEdit && (
          <ModalCustom
            visible={this.state.modalEditVisible}
            usuario={this.state.usuarioEdit}
            onClose={() => { this.clearDados() }}
            onFinish={(res) => { this.finalizaEdit(res) }}
          />
        )}

        <ConfirmDialogDelete visible={this.state.modalConfirmVisible} onConfirm={() => { this.deletaUsuario() }} onDecline={() => { this.clearDados() }} />
      </>
    );
  }
}

export default withRouter(Listagem);
