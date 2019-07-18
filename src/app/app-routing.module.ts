import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { DeleteAllArticlesComponent } from './articles/delete-all-articles/delete-all-articles.component';
import { ArticleDisplayComponent } from './articles/article-display/article-display.component';



const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  { path: 'post', component: CreateArticleComponent },
  { path: 'delete', component: DeleteAllArticlesComponent},
  
  { path: 'articles/:foo', component: ArticleListComponent, pathMatch: 'full'},
  { path: 'articles/:nav', component: ArticleDisplayComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




