import React, { useState } from 'react';
import useForm from 'react-hook-form'
import { FormInput, InputCustom, FormLabel, ButtomCustom, ButtomLogin, SpanError } from './styles';
import InputMask from 'react-input-mask';
import { IoIosArrowRoundForward } from "react-icons/io";
import { editaUser } from '../../service/db'
import Modal from 'react-awesome-modal'

export default function ModalCustom(props) {
    const { register, handleSubmit, errors } = useForm()
    let [isError, setIsError] = useState(false)
    let [nome, setNome] = useState(props.usuario.nome)
    let [cpf, setCpf] = useState(props.usuario.cpf)
    let [tel, setTel] = useState(props.usuario.tel)
    const onSubmit = async data => {
        setIsError(false)
        let res = await editaUser(data);
        if (res) {
            props.onFinish(res)
        } else {
            props.onClose()
        }

    }

    return (
        <Modal className="animated fadeInDown " visible={props.visible} width="500" style={{ minHeight: 400 }} effect="fadeInUp" onClickAway={() => props.onClose()}>
            <form style={{ marginTop: 10, marginBottom: 10, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }} onSubmit={handleSubmit(onSubmit)}>
                <h2 style={{ color: '#999999', fontSize: 30 }}>Editar Usuario</h2>
                {isError && <h5 style={{ color: '#e67' }}>Impossível excluir a si próprio!</h5>}
                <FormInput>
                    <FormLabel>Nome Completo</FormLabel>
                    <InputCustom value={nome} onChange={(e) => setNome(e.target.value)} name="nome" ref={register({ required: true })} />
                    {errors.nome && <SpanError>Este campo é obrigatório</SpanError>}
                </FormInput>

                <FormInput>
                    <FormLabel>E-mail</FormLabel>
                    <InputCustom value={props.usuario.email} name="email" disabled ref={register({ required: true })} />
                    {errors.email && <SpanError>Este campo é obrigatório</SpanError>}
                </FormInput>

                <FormInput>
                    <FormLabel>CPF</FormLabel>
                    <InputMask mask="999.999.999-99" onChange={(e) => setCpf(e.target.value)} value={cpf} >
                        <InputCustom name="cpf" ref={register({ required: true })} />
                    </InputMask>
                    {errors.cpf && <SpanError>Este campo é obrigatório</SpanError>}
                </FormInput>

                <FormInput>
                    <FormLabel>Telefone</FormLabel>
                    <InputMask mask="(99) 99999-9999" onChange={(e) => setTel(e.target.value)} value={tel} >
                        <InputCustom name="tel" ref={register({ required: true })} />
                    </InputMask>
                    {errors.tel && <SpanError>Este campo é obrigatório</SpanError>}
                </FormInput>

                <div style={{ display: 'flex', width: 300, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <ButtomCustom type="submit" >
                        {"Salvar"}
                    </ButtomCustom>

                    <ButtomLogin type="button" onClick={() => { props.onClose() }}>
                        {"Close"}<IoIosArrowRoundForward style={{ width: 20, height: 18 }} />
                    </ButtomLogin>
                </div>
            </form>
        </Modal>
    );
}
