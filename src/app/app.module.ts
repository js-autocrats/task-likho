import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskTileComponent } from './components/task-tile/task-tile.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateTaskFormComponent } from './components/create-task-form/create-task-form.component';
import { StatusViewComponent } from './components/status-view/status-view.component';
import { LabelsViewComponent } from './components/labels-view/labels-view.component';
import { DateViewerComponent } from './components/date-viewer/date-viewer.component';
import { SearchFilterTaskComponent } from './components/search-filter-task/search-filter-task.component';
import { CreateCheckListFormComponent } from './components/create-check-list-form/create-check-list-form.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { CheckListTileComponent } from './components/check-list-tile/check-list-tile.component';


// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    HeaderComponent,
    TaskTileComponent,
    CreateTaskComponent,
    CreateTaskFormComponent,
    CheckListTileComponent,
    CreateCheckListFormComponent,
    // MatTimePickerDirective,
    StatusViewComponent,
    LabelsViewComponent,
    DateViewerComponent,
    LoginViewComponent,
    SearchFilterTaskComponent,
    PageNotFoundComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'js-autocrats' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AmazingTimePickerModule,

    // Material modules
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatChipsModule,
    MatAutocompleteModule,


    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 40,
      outerStrokeWidth: 8,
      innerStrokeWidth: 4,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateCheckListFormComponent,
    CreateTaskFormComponent
  ]
})
export class AppModule { }
