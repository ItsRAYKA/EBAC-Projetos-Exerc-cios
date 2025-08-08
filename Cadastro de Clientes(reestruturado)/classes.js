//Classe que representa um cliente
export class Cliente  {
    constructor(user, email) {
        this.user = user, //nome do cliente
        this.email = email //E-mail do cliente
    }
//Método que valida os dados do cliente
validar() { 
    return this.user !== '' && this.email.includes('@') // Verifica se nome não está vazio e e-mail contém "@"
}
// Converte os dados do cliente para formato JSON
toJSON() {  
    return {
        nome: this.user,
        email: this.email
    }
}

}