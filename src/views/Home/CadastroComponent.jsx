import React from 'react';

import { FormInput ,InputCustom,FormLabel} from './styles';

export default function CadastroComponent() {
  return (
    <div style={{ height: '100%', paddingTop: 50, paddingRight: 20, paddingLeft: 40 }} >
      <h2>Lean Cadastro</h2>
      <form>
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
