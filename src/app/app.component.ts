import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Autor } from './Autores/Autor';
import { FormGroup, FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AppService]
})
export class AppComponent {
  title = 'project-test';
    
  postData: Array<any>;  
  autor= new Autor();
  // autores: ;

  
    
  constructor(private httpService : AppService){}

  ngOnInit(){
    this.autor = new Autor();
  }

  

  onPost(frm: FormGroup) {

    console.log(this.autor)
    //this.autores.push(this.autor);
    const autor = new Autor();
    autor.primeiroNome = "";
    autor.ultimoNome = "teste2";
    
       this.httpService.postJSON(this.autor)
       .subscribe(
          data => this.postData = data,
          error => alert(error),
          () => console.log(this.postData)
       );
   }

}


