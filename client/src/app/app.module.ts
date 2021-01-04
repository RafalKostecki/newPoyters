import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/credits-footer/credits-footer.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { PortfolioProjectComponent } from './components/portfolio-project/portfolio-project.component';
import { AlertComponent } from './components/alert/alert.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { SignupComponent } from './views/signup/signup.component';
import { SigninComponent } from './views/signin/signin.component';
import { AboutComponent } from './components/about/about.component';
import { ProfilPanelComponent } from './components/profile-panel/profile-panel.component';
import { LoginPanelComponent } from './components/login-panel/login-panel.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeProjectComponent } from './components/home-project/home-project.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProductIntroductionComponent } from './components/product/product-introduction/product-introduction.component';
import { ProductSystemRequirementsComponent } from './components/product/product-system-requirements/product-system-requirements.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { ProductLinksComponent } from './components/product/product-links/product-links.component';
import { ProductGetComponent } from './components/product/product-get/product-get.component';
import { InfoPopupComponent } from './components/info-popup/info-popup.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    CategoryComponent,
    HomeComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent,
    PortfolioProjectComponent,
    AlertComponent,
    NotFoundComponent,
    SignupComponent,
    SigninComponent,
    AboutComponent,
    ProfilPanelComponent,
    LoginPanelComponent,
    ProfileComponent,
    ContactFormComponent,
    HomeProjectComponent,
    UserProfileComponent,
    ProductIntroductionComponent,
    ProductSystemRequirementsComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductViewComponent,
    ProductLinksComponent,
    ProductGetComponent,
    InfoPopupComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


