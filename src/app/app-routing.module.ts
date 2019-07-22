import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { DeleteAllArticlesComponent } from './articles/delete-all-articles/delete-all-articles.component';
import { ArticleDisplayComponent } from './articles/article-display/article-display.component';
import { UserProfileComponent } from './articles/user-profile/user-profile.component';



const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  { path: 'post', component: CreateArticleComponent },
  { path: 'delete', component: DeleteAllArticlesComponent},
  { path: 'display', component: ArticleDisplayComponent },
  { path: 'articles/:foo', component: ArticleListComponent, pathMatch: 'full'},
  { path: 'display/:nav', component: ArticleDisplayComponent, pathMatch: 'full'},
  { path: 'profile', component: UserProfileComponent},
  { path: 'profile/delete', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




