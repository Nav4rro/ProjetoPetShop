export class SubCategorias {
    public id: number
    public categoria: string
    public descricao: string
    public categoriaPai: number

    constructor () {
        this.id = 0
        this.categoria = ''
        this.descricao = ''
        this.categoriaPai = 0
    }
}
