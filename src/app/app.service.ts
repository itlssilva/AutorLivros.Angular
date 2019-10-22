import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Headers} from '@angular/http';
import { Autor } from './Autores/Autor';

@Injectable()
export class AppService {

  constructor(private _http : Http) { }

    postJSON(autor: Autor) {
                var json = JSON.stringify([
                        autor,                        
                    ]);
                
                var body = json;
                console.log(body);
                var header = new Headers();
                header.append('Content-Type', 'application/json; charset=utf-8');

                return this._http.post('https://localhost:5001/v1/autores', 
                body, { headers : header })
                .pipe(map(res=> res.json()));
            }
}
