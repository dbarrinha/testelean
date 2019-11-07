const listakey = "listaUser@testelean"
const userkey = "User@testelean"
//fazlogin
export const fazLogin = async (user) => {

    let res = await verificaSeEmailExiste(user.email)
    if (res !== false) {
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
    if (res !== false) {
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
    return false;

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
}



