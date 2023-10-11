export class FormaDePagamento {
    public id: number
    public tipo: string
    public numero: string
    public nomeTitular: string
    public validade: string
    public bandeira: string

    constructor () {
        this.id = 0
        this.tipo = ''
        this.numero = ''
        this.nomeTitular = ''
        this.validade = ''
        this.bandeira = ''
    }
    
}
