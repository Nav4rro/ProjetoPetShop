export class Avaliacoes {
    public id: number
    public produtoId: number
    public idDoUsuario: number
    public classficacao: number
    public comentario: string

    constructor () {
        this.id = 0
        this.produtoId = 0
        this.idDoUsuario = 0
        this.classficacao = 0
        this.comentario = ''
    }
}
