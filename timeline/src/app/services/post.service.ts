import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { posts } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private gitHubUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient 
    ) { }

    async getPosts () {
      const res = await this.http.get(this.gitHubUrl).toPromise();
      console.log(res);
      return res;  
    }
  
    async getPotsById (id: number) {
      const res = await this.http.get(this.gitHubUrl + id).toPromise();
      console.log(res);
      return res;  
    }
  
    async postPots (post) {
      const res = await this.http.post(this.gitHubUrl,post).toPromise();
      console.log(res);
      return res;  
    }
}
