// modules
import { AppRoutingModule } from './shared/routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DisqusModule } from 'ngx-disqus';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { BackButtonComponent } from './shared/components/back-button/back-button.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisqusPanelComponent } from './pages/dashboard/disqus-panel/disqus-panel.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { IntroPanelComponent } from './pages/dashboard/intro-panel/intro-panel.component';
import { MenuDialogComponent } from './shared/components/header/menu-dialog/menu-dialog.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    DashboardComponent,
    DisqusPanelComponent,
    FooterComponent,
    GeneratorComponent,
    HeaderComponent,
    IntroPanelComponent,
    MenuDialogComponent,
    NotFoundComponent,
    AboutComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DisqusModule.forRoot('dm-html-generator'),
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
  ],
  entryComponents: [
    MenuDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
