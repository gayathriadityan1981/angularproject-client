import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {RouterModule,Routes} from '@angular/router';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule,MatFormFieldModule,
  MatTableDataSource,MatTableModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

// MDB Angular Free
import { WavesModule } from 'angular-bootstrap-md';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterUserComponent } from './register-user/register-user.component';
const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  //{ path: 'userProfile', component: UserprofileComponent },
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'userProfile/:id',      component: UserprofileComponent },
  {
    path: 'getAllUsers',
    component: UsersListComponent,
    data: { title: 'Users List' }
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    UserprofileComponent,
    UsersListComponent,
    PageNotFoundComponent,
    RegisterUserComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatTableModule,
    WavesModule
    
  ],
    providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: ''}}
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
