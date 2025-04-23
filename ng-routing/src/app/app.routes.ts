import { Routes, ActivatedRouteSnapshot } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPageComponent } from './error-boundary/error-page.component';
import { authGuard } from './guards/auth.guard';
import { inject } from '@angular/core';
import { ProductService } from './services/product.service';
import { map } from 'rxjs/operators';

export const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'home' 
  },
  { 
    path: 'home', 
    component: HomeComponent,
    title: 'Home'
  },
  { 
    path: 'about', 
    component: AboutComponent,
    title: 'About Us'
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent,
        title: 'Our Products'
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: {
          product: (route: ActivatedRouteSnapshot) => {
            const productService = inject(ProductService);
            const id = Number(route.paramMap.get('id'));
            return productService.getProduct(id);
          }
        },
        title: (route: ActivatedRouteSnapshot) => {
          const product = route.data?.['product'];
          return product ? `${product.name} - Product Details` : 'Product Not Found';
        }
      }
    ]
  },
  { 
    path: 'login', 
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    title: 'Admin Dashboard'
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    title: 'Error'
  },
  { 
    path: '**',
    component: NotFoundComponent,
    title: '404 - Page Not Found'
  }
];
