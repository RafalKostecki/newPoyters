import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NotFoundComponent} from './views/not-found/not-found.component';
import { ProductViewComponent} from './views/product-view/product-view.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent} from './views/admin/admin.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {authRedirect: '/signin'}
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
    component: ProductViewComponent,
    data: {
      productKey : 'kosUrodziny'
    }
  },
  {
    path: 'stella',
    component: ProductViewComponent,
    data: {
      productKey : 'stella'
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
