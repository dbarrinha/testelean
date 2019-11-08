const listakey = "listaUser@testelean"
const userkey = "User@testelean"
const _ = require("lodash")
//fazlogin
export const fazLogin = async (user) => {

    let res = await verificaSeEmailExiste(user.email)
    if (res) {
        localStorage.setItem(userkey, JSON.stringify(res));
        return true;
    }
    return false;
}

//fazlogout
export const fazlogout = async () => {
    await localStorage.removeItem(userkey);
    return true;
}

//cadastranovo usuario
export const cadastraUser = async (user) => { //verificar se cpf já cadastrado
    let res = await verificaSeEmailExiste(user.email)
    console.log(res)
    if (res === false) {
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
    else return false;

}

export const getUsers = async () => {
    let lista = []
    lista = await localStorage.getItem("listaUser@testelean");
    lista = JSON.parse(lista);
    if (lista) {
        return lista
    }
    return false
}

export const editaUser = async (user) => {
    let lista = []
    lista = await localStorage.getItem("listaUser@testelean");
    lista = JSON.parse(lista);
    let i = null
    if (lista) {
        lista.map((item, index) => {
            if (item.email === user.email) i = index
        })
        if (i !== null) lista[i] = user
        await localStorage.setItem(listakey, JSON.stringify(lista))
        return true;
    }
    return false
}

export const deletaUser = async (email) => {
    let len = 0
    let lista = []
    lista = await localStorage.getItem("listaUser@testelean");
    lista = JSON.parse(lista);
    len = lista.length
    var newList = _.remove(lista, function (n) {
        return n.email !== email;
    });
    await localStorage.setItem(listakey, JSON.stringify(newList))
    if (len === newList.length) return false;
    else return true;
}

export const verificaSeEmailExiste = async (email) => {
    let lista = []
    lista = await localStorage.getItem("listaUser@testelean");
    lista = JSON.parse(lista);
    if (lista) {
        var found = lista.find(function (element) {
            return element.email === email;
        });
        if (found) return found
        else return false
    }
    return false
}



