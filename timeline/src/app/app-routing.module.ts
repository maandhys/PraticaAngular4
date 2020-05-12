import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { PostComponent} from './post/post.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [
  { path: 'post', component: PostComponent},
  { path: 'user', component: UserComponent},
  { path: 'comments', component: CommentComponent},
  { path: '', component: NavComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
