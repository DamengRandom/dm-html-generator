// modules
import { AppRoutingModule } from './shared/routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DisqusModule } from 'ngx-disqus';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

// components
import { AboutComponent } from './pages/about/about.component';
import { AddingTextComponent } from './pages/generator/adding-text/adding-text.component';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './shared/components/back-button/back-button.component';
import { ContentsPreviewComponent } from './pages/generator/contents-preview/contents-preview.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisqusPanelComponent } from './pages/dashboard/disqus-panel/disqus-panel.component';
import { ExecCmdsComponent } from './pages/generator/exec-cmds/exec-cmds.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { IntroPanelComponent } from './pages/dashboard/intro-panel/intro-panel.component';
import { MenuDialogComponent } from './shared/components/header/menu-dialog/menu-dialog.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AboutComponent,
    AddingTextComponent,
    AppComponent,
    BackButtonComponent,
    ContentsPreviewComponent,
    DashboardComponent,
    DisqusPanelComponent,
    ExecCmdsComponent,
    FooterComponent,
    GeneratorComponent,
    HeaderComponent,
    IntroPanelComponent,
    MenuDialogComponent,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DisqusModule.forRoot('dm-html-generator'),
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
  ],
  entryComponents: [
    ContentsPreviewComponent,
    MenuDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
