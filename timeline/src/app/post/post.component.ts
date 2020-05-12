import { Component, OnInit } from '@angular/core';
import {posts} from '../models/posts.model'
import {PostService} from '../services/post.service'
import { async } from 'rxjs/internal/scheduler/async';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor( private postService: PostService) { }

  // prop : posts;
  // private dataPost : [posts];
  post = {} as posts;
  response: any;
  userId: [0];
  async ngOnInit() {;
    this.response = await this.postService.getPosts();  
    this.getUsuarios();
  
  }

  getUsuarios() {
    const arrayUnico = this.response.map(x => x.userId)
    this.userId = arrayUnico.filter((el, i, arr) => arr.indexOf(el) == i);
  }

  onSubmit(form) {
    console.log(form.value);   
  }

  exibicaodeComentarios(id){
//      A função exibicaodeComentarios deverá gerenciar o estado da propriedade
// exibirComentario do respectivo post alterando para true para que os
// comentários sejam exibidos na tela.
  }

}
