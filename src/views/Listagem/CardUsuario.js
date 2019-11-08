import React from 'react';
import { ItemDescricao,ButtomCustom, ButtomLogin } from './styles'

export default function CardUsuario(props) {
    return (
        <div className="rounded" style={{
            width: '100%',
            background: 'white',
            padding: 10,
            display: 'flex',
            minHeight: 80,
            flexDirection: 'row',
            cursor: 'pointer',
            alignItems: 'space-between',
            marginBottom: 10
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'baseline',

            }}>
                <h6 style={{ color: '#5e5d5d', fontSize: 18, margin: 0 }}>{props.usuario.nome}</h6>
                <ItemDescricao >{props.usuario.email}</ItemDescricao>
                <ItemDescricao >{props.usuario.tel}</ItemDescricao>
                <ItemDescricao >{props.usuario.cpf}</ItemDescricao>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                padding: 5,
                marginLeft: 10,
                justifyContent: 'space-between',
                alignItems: 'flex-end'
            }}>
                <ButtomCustom onClick={() => props.onEdit()} style={{ height: '40%', width: 70, fontWeight: '600', borderRadius: 10, color: '#5e5d5d' }} >Editar</ButtomCustom>
                <ButtomLogin onClick={() => props.onDelete()} style={{ height: '40%', width: 70, fontWeight: '600', backgroundColor:'#e38686', color: 'white' }} >Excluir</ButtomLogin>
            </div>
        </div>
    );
}
