import { Tamanho } from "./tamanho"

export class Produtos {
    public id: number
    public titulo: string
    public descricao: string
    public preco: number
    public categoria: number
    public subCategoria: number
    public tipoDeAnimal: number
    public avaliacaoDoProduto: number
    public tamanho: Tamanho[]
    public peso: number
    public estoque: boolean
    public promocao: boolean
    public fabricante: string
    public imagem: string[]

    constructor () {
        this.id = 0
        this.titulo = ''
        this.descricao = ''
        this.preco = 0
        this.categoria = 0
        this.subCategoria = 0
        this.tipoDeAnimal = 0
        this.avaliacaoDoProduto = 0
        this.tamanho = []
        this.peso = 0
        this.estoque = false
        this.promocao = false
        this.fabricante = ''
        this.imagem = []
    }
}
