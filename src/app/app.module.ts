import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskTileComponent } from './components/task-tile/task-tile.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    HeaderComponent,
    TaskTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    // Material modules
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
