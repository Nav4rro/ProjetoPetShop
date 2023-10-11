import { Banners } from "./banners"

export class ConteudoHome {
    public home: {
     banners: Banners[]
     promocaoDoMes: string[]
     textoDestaque: string
    }

    constructor () {
        this.home = {
            banners: [],
            promocaoDoMes: [],
            textoDestaque: '',
        }
    }
}
