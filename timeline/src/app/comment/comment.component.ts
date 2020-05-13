import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { comments } from '../models/comments.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {

  comentario: comments;
  comentarioArray: comments[];
  response:any;
  constructor(private commentService: CommentService) { }
  
  async ngOnInit() {
    this.response = await this.commentService.getComments();  
    this.comentarioArray = this.response;
  }

}
