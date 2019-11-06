import React from 'react';
import { FormInput ,InputCustom,FormLabel} from './styles';

export default function CadastroComponent(props) {
  return (
    <div style={{  paddingTop: 50, paddingRight: 20, paddingLeft: 40 }} {...props} >
      <h2 style={{color: '#999999', fontSize: 30}}>Lean Cadastro</h2>
      <form style={{marginTop: 10, marginBottom: 10}}>
        <FormInput>
          <FormLabel>Nome Completo</FormLabel>
          <InputCustom name="nome" />
        </FormInput>

        <FormInput>
          <FormLabel>E-mail</FormLabel>
          <InputCustom name="email" />
        </FormInput>

        <FormInput>
          <FormLabel>CPF</FormLabel>
          <InputCustom name="cpf" />
        </FormInput>

        <FormInput>
          <FormLabel>Telefone</FormLabel>
          <InputCustom name="tel" />
        </FormInput>
      </form>
    </div>
  );
}
