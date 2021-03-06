import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProjectOverlayComponent } from './projects/overlay/project-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayService } from './overlay.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    CvComponent,
    ContactComponent,
    ImageSliderComponent,
    ProjectOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    OverlayModule,
  ],
  providers: [OverlayService],
  bootstrap: [AppComponent],
  entryComponents: [ProjectOverlayComponent]
})
export class AppModule { }
