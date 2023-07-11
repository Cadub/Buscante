import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { LivroComponent } from './components/livro/livro.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ListaLivrosComponent } from './views/lista-livros/lista-livros.component';
import { ModalLivroComponent } from './views/modal-livro/modal-livro.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    LivroComponent,
    RodapeComponent,
    ListaLivrosComponent,
    ModalLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
