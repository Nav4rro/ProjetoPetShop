import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InternaComponent } from './components/interna/interna.component';
import { InternaProdutoComponent } from './components/interna-produto/interna-produto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PagamentosComponent } from './components/pagamentos/pagamentos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';

//CORE UI
import { AlertModule } from '@coreui/angular';
import { CarouselModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular'


//MATERIAL
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule} from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternaComponent,
    InternaProdutoComponent,
    UsuarioComponent,
    PagamentosComponent,
    FooterComponent,
    HeaderComponent,
    DialogComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    AlertModule,
    CarouselModule,
    IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
