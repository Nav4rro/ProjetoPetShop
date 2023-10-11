import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Animais } from 'src/app/model/animais';
import { AnimaisService } from 'src/app/service/animais.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

animais: Animais [] = []
  constructor( public rota: Router,
  private apiAnimais: AnimaisService) {}

  ngOnInit(): void{
    this.getAllAnimais()
  }

getAllAnimais(): void {
  this.apiAnimais.getAnimais().subscribe((resp) => {
    this.animais = resp

  })
}

}
