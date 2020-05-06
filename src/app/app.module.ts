import { AddDataService } from './add-data.service';
import { NotifService } from './notif.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { NotifComponent } from './notif/notif.component';
import { AddDataComponent } from './add-data/add-data.component';
import { ViewRecordsComponent } from './view-records/view-records.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { UpdNotifComponent } from './admin/upd-notif/upd-notif.component';
import { AdminNotifComponent } from './admin/admin-notif/admin-notif.component';
import { BsFooterComponent } from './bs-footer/bs-footer.component';



@NgModule({ 
  declarations: [
    AppComponent,
    BsNavbarComponent,
    SidebarComponent,
    ProductsComponent,
    AdminProductsComponent,
    NotifComponent,
    AddDataComponent,
    ViewRecordsComponent,
    ProductFormComponent,
    SidebarComponent,
    UpdNotifComponent,
    AdminNotifComponent,
    BsFooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
  
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'login', component: LoginComponent },      
      { path: 'notif', component: NotifComponent},

      { path: 'view-records', component: ViewRecordsComponent, canActivate: [AuthGuard]},
      { path: 'add-data', component: AddDataComponent, canActivate: [AuthGuard]},

      { 
        path: 'admin/products/new', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
        path: 'admin/products/:id', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
          path: 'admin/notif/new', 
          component: UpdNotifComponent, 
          canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
          path: 'admin/notif/:id', 
          component: UpdNotifComponent, 
          canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
        path: 'admin/notif', 
        component: AdminNotifComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },

 
      
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoryService,
    ProductService,
    NotifService,
    AddDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
