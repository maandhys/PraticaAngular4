import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comments} from '../models/comments.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private gitHubUrl = 'https://jsonplaceholder.typicode.com/comments/';

  constructor( private http: HttpClient) { }

  async getComments () {
    const res = await this.http.get(this.gitHubUrl).toPromise();
    console.log(res);
    return res;  
  }

  async getCommentsById (id: number) {
    const res = await this.http.get(this.gitHubUrl + id).toPromise();
    console.log(res);
    return res;  
  }

  async postComments (comment) {
    const res = await this.http.post(this.gitHubUrl,comment).toPromise();
    console.log(res);
    return res;  
  }

 
}



// crie os métodos Get, GetById e Post utilizando Async Await. Os métodos
// GetById deverão receber um id como parâmetro e os métodos posts deverão
// receber um objeto do tipo específico de cada serviço como parâmetro.