import React, { useState } from 'react';
import useForm from 'react-hook-form'
import { FormInput, InputCustom, FormLabel, ButtomCustom, SpanError } from './styles';
import { fazLogin } from '../../service/db'
import {useHistory } from "react-router-dom";

export default function CadastroComponent(props) {
  const { register, handleSubmit, errors } = useForm()
  let [isError, setIsError] = useState(false)
  let hist = useHistory()
  const onSubmit = async data => {
    setIsError(false)
    let res = await fazLogin(data)
    if (res) {
      hist.push("/list");
    } else {
      setIsError(true)
    }
  }

  return (
    <div style={{ paddingTop: 50, paddingRight: 20, paddingLeft: 40 }} {...props}>
      <h2 style={{ color: '#999999', fontSize: 30 }}>Lean Login</h2>
      <form style={{ marginTop: 10, marginBottom: 10 }} onSubmit={handleSubmit(onSubmit)}>
        {isError && <h5 style={{ color: '#e67' }}>Email inválido!</h5>}
        <FormInput>
          <FormLabel>E-mail</FormLabel>
          <InputCustom name="email" ref={register({ required: true })} />
          {errors.email && <SpanError>Este campo é obrigatório</SpanError>}
        </FormInput>

        <div style={{ display: 'flex', width: 300, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <ButtomCustom type="submit">
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
