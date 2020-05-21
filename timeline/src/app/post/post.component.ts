import { Component, OnInit } from '@angular/core';
import { posts } from '../models/posts.model'
import { users } from '../models/users.model'
import { PostService } from '../services/post.service'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService,
    private userService: UserService) { }

  post: posts = {} as posts;
  postArray: posts[];
  response: any;
  arrayUsers: any;
  user: users[];

  async ngOnInit() {
    this.response = await this.postService.getPosts();
    this.postArray = this.response;
    this.arrayUsers = await this.userService.getUsers();
    this.user = this.arrayUsers;
  }

  async onSubmit(form) {
    alert('Submit');
  }

  exibicaodeComentarios(id) {
    this.postArray.forEach(post => {
      if (post.id == id) {
        if (post.exibirComentario) {
          post.exibirComentario = false
        } else {
          post.exibirComentario = true
        }
      }
    });
  }
}
