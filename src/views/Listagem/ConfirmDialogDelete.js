import React from 'react';
import { ButtomCustom, ButtomLogin } from './styles';

import Modal from 'react-awesome-modal'

export default function ModalCustom(props) {
    return (
        <Modal className=" animated fadeInDown " visible={props.visible} width="500" style={{ minHeight: 300 }} effect="fadeInUp" onClickAway={() => props.onClose()}>
            <div style={{
                marginTop: 10,
                marginBottom: 10,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyItems: 'center'
            }}>
                <h2 style={{ color: '#999999', fontSize: 30 }}>Deseja Excluir este usuário?</h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'space-between',
                    justifyContent: 'space-evenly',
                    width: '100%'
                }}>
                    <ButtomCustom onClick={() => props.onConfirm()} style={{ height: 40, width: 200, fontWeight: '600', borderRadius: 10, color: '#5e5d5d' }}>Confirmar</ButtomCustom>
                    <ButtomLogin onClick={() =>  props.onDecline()} style={{ height: 40, width: 200, fontWeight: '600', borderRadius: 10, backgroundColor: '#e38686', color: 'white' }}>Cancelar</ButtomLogin>
                </div>
            </div>
        </Modal>
    );
}
