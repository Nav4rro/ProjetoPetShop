import { Carrinho } from "./carrinho"
import { MetodosPagamento } from "./metodos-pagamento"

export class Usuarios {
    public id: number
    public nome: string
    public email: string
    public senha: string
    public idDoUsuario: number
    public admin: boolean
    public carrinho: Carrinho[]
    public favoritos: number[]
    public metodosPagamento: MetodosPagamento[]
    public pedidos: number[]

    constructor () {
        this.id = 0
        this.nome = ''
        this.email = ''
        this.senha = ''
        this.idDoUsuario = 0
        this.admin = false
        this.carrinho = []
        this.favoritos = []
        this.metodosPagamento = []
        this.pedidos = []
    }
}
