import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    PostComponent,
    CommentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    FormsModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
