import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { VegetableDetailComponent } from './vegetable-detail/vegetable-detail.component';
import {VegetableDataService} from './vegetable-data.service';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { FruitComponent } from './fruit/fruit.component';
import { LoginSignInComponent } from './login-sign-in/login-sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SaveLaterComponent } from './save-later/save-later.component';
import {TokenInterceptorService} from './token-interceptor.service';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogNewArticleComponent } from './components/blog-new-article/blog-new-article.component';
import { EditComponent } from './components/edit/edit.component';
import { BlogUserDetailComponent } from './components/blog-user-detail/blog-user-detail.component';
import { MessagePageComponent } from './message-page/message-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VegetableComponent,
    VegetableDetailComponent,
    AboutComponent,
    LoginComponent,
    BlogComponent,
    FaqComponent,
    BlogDetailComponent,
    FruitComponent,
    LoginSignInComponent,
    CreateAccountComponent,
    UserAccountComponent,
    UserOrderComponent,
    CartPageComponent,
    FruitDetailComponent,
    CheckoutComponent,
    SaveLaterComponent,
    BlogListComponent,
    BlogNewArticleComponent,
    EditComponent,
    BlogUserDetailComponent,
    MessagePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VegetableDataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
