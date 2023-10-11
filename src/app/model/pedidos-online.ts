import { FormaDePagamento } from "./forma-de-pagamento"

export class PedidosOnline {
    public id: number
    public idDoUsuario: number
    public produtoId: number
    public quantidade: number
    public endereco: string
    public numero: number
    public complemento: string
    public cep: string
    public formaDePagamento: FormaDePagamento[]
    public codigoDeEnvio: string
    public frete: number

    constructor () {
        this.id = 0,
        this.idDoUsuario = 0
        this.produtoId = 0
        this.quantidade = 0
        this.endereco = ''
        this.numero = 0
        this.complemento = ''
        this.cep = ''
        this.formaDePagamento = []
        this.codigoDeEnvio = ''
        this.frete = 0
    }

}
