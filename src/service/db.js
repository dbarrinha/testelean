const listakey = "listaUser@testelean"
const userkey = "User@testelean"
//fazlogin
export const fazLogin = async (user) => {
    let lista = []
    lista = await localStorage.getItem(listakey);
    lista = JSON.parse(lista);
    if (lista) {
        lista.map(item =>{
            //if(item.email === user.email)
        })
    }

    await localStorage.setItem(userkey, JSON.stringify(user));
    return true;
}

//fazlogout
export const fazlogout = async () => {
    await localStorage.removeItem(userkey);
    return true;
}

//cadastranovo usuario
export const cadastraUser = async (user) => { //verificar se cpf já cadastrado
    let lista = []
    lista = await localStorage.getItem(listakey);
    lista = JSON.parse(lista);
    if (lista) {
        lista.push(user)
    } else {
        lista = []
        lista.push(user)
    }
    await localStorage.setItem(listakey, JSON.stringify(lista))
    return user;
}

//deleta usuario

//edita 


