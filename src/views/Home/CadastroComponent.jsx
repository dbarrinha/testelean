import React from 'react';
import { FormInput, InputCustom, FormLabel } from './styles';
import InputMask from 'react-input-mask';

export default function CadastroComponent(props) {
  return (
    <div style={{ paddingTop: 50, paddingRight: 20, paddingLeft: 40 }} {...props} >
      <h2 style={{ color: '#999999', fontSize: 30 }}>Lean Cadastro</h2>
      <form style={{ marginTop: 10, marginBottom: 10 }}>
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
          <InputMask mask="999.999.999-99" >
            <InputCustom name="cpf" />
          </InputMask>
        </FormInput>

        <FormInput>
          <FormLabel>Telefone</FormLabel>
          <InputMask mask="(99) 99999-9999" >
            <InputCustom name="tel" />
          </InputMask>
        </FormInput>
      </form>
    </div>
  );
}
