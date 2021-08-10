import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmaMenssagem: string
  tipoAssunto: string
  

  constructor(
    private auth:AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    environment.menu = true
    
  }
  confirmMenssagem (event: any){
    this.confirmaMenssagem = event.target.value
  }

  tipoEmail(event: any){
    this.tipoEmail = event.target.value
  }

  contato(){
    this.usuario.tipoUsuario = this.tipoAssunto

    if (this.usuario.email == this.confirmaMenssagem) {
      this.router.navigate(['/home'])
      alert('Menssagem enviada com sucesso!')
       
       
      }
    }
  }

