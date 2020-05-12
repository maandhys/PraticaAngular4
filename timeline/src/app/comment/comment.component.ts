import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private commentService: CommentService) { }
  response;
  async ngOnInit() {
    this.response = await this.commentService.getComments();  
  }

}
