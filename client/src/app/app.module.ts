import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { initializeKeycloak } from './scripts/keycloak/initializeKeycloak';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/credits-footer/credits-footer.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { PortfolioProjectComponent } from './components/portfolio/portfolio-project/portfolio-project.component';
import { AlertComponent } from './components/alert/alert.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { SignupComponent } from './views/signup/signup.component';
import { SigninComponent } from './views/signin/signin.component';
import { PortfolioAboutComponent } from './components/portfolio/portfolio-about/portfolio-about.component';
import { ProfilPanelComponent } from './components/profile/profile-panel/profile-panel.component';
import { LoginPanelComponent } from './components/login-panel/login-panel.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeProjectComponent } from './components/home-project/home-project.component';
import { ProfileCardComponent } from './components/profile/profile-card/profile-card.component';
import { ProductIntroductionComponent } from './components/product/product-introduction/product-introduction.component';
import { ProductSystemRequirementsComponent } from './components/product/product-system-requirements/product-system-requirements.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductComponent } from './views/product/product.component';
import { ProductLinksComponent } from './components/product/product-links/product-links.component';
import { ProductGetComponent } from './components/product/product-get/product-get.component';
import { InfoPopupComponent } from './components/info-popup/info-popup.component';
import { SliderComponent } from './components/slider/slider.component';
import { AdminComponent } from './views/admin/admin.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { OfferComponent } from './views/offer/offer.component';
import { OfferDevelopmentComponent } from './components/offer/offer-development/offer-development.component';
import { OfferConsultingComponent } from './components/offer/offer-consulting/offer-consulting.component';
import { OfferMoreComponent } from './components/offer/offer-more/offer-more.component';
import { GetButtonComponent } from './components/buttons/get-button/get-button.component';
import { AboutComponent } from './views/about/about.component';
import { AboutCompanyComponent } from './components/about/about-company/about-company.component';
import { TechStackComponent } from './components/about/tech-stack/tech-stack.component';
import { TeamComponent } from './components/about/team/team.component';
import { TechnologiesBoxComponent } from './components/technologies-box/technologies-box.component';

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
    PortfolioAboutComponent,
    ProfilPanelComponent,
    LoginPanelComponent,
    ProfileComponent,
    ContactFormComponent,
    HomeProjectComponent,
    ProfileCardComponent,
    ProductIntroductionComponent,
    ProductSystemRequirementsComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductLinksComponent,
    ProductGetComponent,
    InfoPopupComponent,
    SliderComponent,
    AdminComponent,
    EditProfileComponent,
    OfferComponent,
    OfferDevelopmentComponent,
    OfferConsultingComponent,
    OfferMoreComponent,
    GetButtonComponent,
    AboutComponent,
    AboutCompanyComponent,
    TechStackComponent,
    TeamComponent,
    TechnologiesBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


