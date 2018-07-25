// modules
import { AppRoutingModule } from './shared/routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IntroPanelComponent } from './pages/dashboard/intro-panel/intro-panel.component';
import { BackButtonComponent } from './shared/components/back-button/back-button.component';
import { GeneratorComponent } from './pages/generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    IntroPanelComponent,
    BackButtonComponent,
    GeneratorComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
