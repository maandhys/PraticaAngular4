import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { comments } from '../models/comments.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {

  @Input() idPost;
  comentario: comments;
  comentarioArray: comments[];
  response: any;

  constructor(private commentService: CommentService) { }
  
  async ngOnInit() {
    if (this.idPost) {
      alert('Aguarde... Carregando os comentários')
     this.response = await this.commentService.getCommentsById(this.idPost);  
     this.comentarioArray = this.response;
    } else {
      this.response = await this.commentService.getComments();  
      this.comentarioArray = this.response;
    }
    
  }
}
