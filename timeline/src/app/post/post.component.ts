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
  Post = {} as posts;

  ngOnInit() {
    var result =  this.postService.getPosts();  
    console.log('lol');
  
  }

  onSubmit(form) {
    console.log(form.value);   
  }

  exibicaodeComentarios(){
    
  }

}
