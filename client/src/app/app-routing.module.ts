import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NotFoundComponent} from './views/not-found/not-found.component';
import { ProductComponent } from './views/product/product.component';
import { AdminComponent} from './views/admin/admin.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { OfferComponent } from './views/offer/offer.component';
import { AboutComponent } from './views/about/about.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'offer',
    component: OfferComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'login',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      roles : ['admin']
    }
  },
  {
    path: 'kostek-urodziny',
    component: ProductComponent,
    data: {
      productKey : 'kosUrodziny'
    }
  },
  {
    path: 'stella',
    component: ProductComponent,
    data: {
      productKey : 'stella'
    }
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [AuthGuard],
    data: {
      roles : ['user', 'admin']
    }
  },
  { 
    path: '**',  
    component: NotFoundComponent 
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
