import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { VegetableDetailComponent } from './vegetable-detail/vegetable-detail.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { FruitComponent } from './fruit/fruit.component';
import { LoginComponent } from './login/login.component';
import { LoginSignInComponent } from './login-sign-in/login-sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SaveLaterComponent } from './save-later/save-later.component';
import {AuthGuard} from './auth.guard';

import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogNewArticleComponent } from './components/blog-new-article/blog-new-article.component';
import { EditComponent } from './components/edit/edit.component';
import { BlogUserDetailComponent } from './components/blog-user-detail/blog-user-detail.component';
import { MessagePageComponent } from './message-page/message-page.component';


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'vegetable', component: VegetableComponent},
  {path: 'vegetable/:id', component: VegetableDetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'blog/:id', component: BlogDetailComponent},
  {path: 'fruit', component: FruitComponent},
  {path:'fruit/:id', component: FruitDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signIn', component:LoginSignInComponent},
  {path: 'createAccount', component:CreateAccountComponent},
  {path: 'userAccount', component: UserAccountComponent},
  {path: 'userOrder', component: UserOrderComponent},
  {path: 'cartPage', component: CartPageComponent},
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
    },
  {path: 'saveLater', component: SaveLaterComponent},
  {path: 'newArticle', component:BlogNewArticleComponent},
    {path: 'list', component:BlogListComponent},
    {path: 'detail', component:BlogUserDetailComponent},
    {path: 'edit', component:EditComponent},
    {path: 'message', component:MessagePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
