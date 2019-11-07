import React from 'react';
import { FormInput, InputCustom, FormLabel, ButtomCustom } from './styles';

export default function CadastroComponent(props) {
  return (
    <div style={{ paddingTop: 50, paddingRight: 20, paddingLeft: 40 }} {...props}>
      <h2 style={{ color: '#999999', fontSize: 30 }}>Lean Login</h2>
      <form style={{ marginTop: 10, marginBottom: 10 }}>
        <FormInput>
          <FormLabel>E-mail</FormLabel>
          <InputCustom name="email" />
        </FormInput>

        <div style={{ display: 'flex', width: 300, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <ButtomCustom type="submit" onClick={() => { }}>
            {"Entrar"}
          </ButtomCustom>
          <span style={{ fontSize: 12, color: 'black', display: 'block', marginTop: 10, cursor: 'pointer' }} onClick={() => props.goToCad()}>
            {"Ainda não possue conta? Cadastre-se"}
          </span>
        </div>

      </form>
    </div>
  );
}
