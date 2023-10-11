import { Component } from '@angular/core';
import { ConteudoHome } from 'src/app/model/conteudo-home';
import { Produtos } from 'src/app/model/produtos';
import { ConteudoHomeService } from 'src/app/service/conteudo-home.service';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent {

  conteudoHome: ConteudoHome = new ConteudoHome()
  arrayImages: ConteudoHome[] = []
  produtos: Produtos [] = []
  prods: Produtos [] = []

  constructor(private apiConteudo: ConteudoHomeService,
    private apiProdutos: ProdutosService) { }

  slides: string[] =  ['https://images.petz.com.br/fotos/Home_Desk_1900x390_OutletPetz_2023_07.jpg', 'https://images.petz.com.br/fotos/Home_Desk_1900x390_NaturalisCao_v2-(1).jpg', 'https://images.petz.com.br/fotos/Home_Desk_1900x390_Medicamento_30OFF_-2023_10.jpg' , 'https://images.petz.com.br/fotos/Home_Desk_1900x390_BT_Beneficios.gif', 'https://images.petz.com.br/fotos/Home_Desk_1900x390_Seres_Outubro_Rosa.jpg' ]

  ngOnInit(): void {
    this.getAllConteudos()
    this.getAllProds()
  }

  getAllConteudos(): void {
    this.apiConteudo.getAllConteudos().subscribe((resp) => {
      this.conteudoHome = resp
      // for(let img of this.conteudoHome['home'].banners){
      //   this.slides.push(img)
      // }
      console.log(this.slides);
      
    })
  }
product: Produtos = new Produtos()
  getAllProds(): void{
    this.apiProdutos.getAllProdutos().subscribe((resp) => {
      this.produtos = resp
      for(let i = 0; i <= 3; i++){
        let prods = Math.floor(Math.random() * this.produtos.length)
        let rep = this.produtos.slice(prods, 1)[0]
        if(rep.id == this.product.id){
          prods = Math.floor(Math.random() * this.produtos.length)
          rep = this.produtos.splice(prods, 1)[0]
        }
        this.produtos.push(rep)
      }     
    })
  }

  formateValor(valor: number): string {
    if(valor != undefined){
      let opcoes = {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      };
      return valor.toLocaleString('pt-BR', opcoes)
    } else {
      return 'Valor indefenido'
    }
  }


}
