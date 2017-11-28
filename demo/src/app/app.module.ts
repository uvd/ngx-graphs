import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppSharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { StepAreaChartDemoComponent } from './step-area-chart-demo/step-area-chart-demo.component';
import {LibModule} from 'ngx-graphs';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        StepAreaChartDemoComponent
    ],
    imports: [
        // Add .withServerTransition() to support Universal rendering.
        // The application ID can be any identifier which is unique on
        // the page.
        //BrowserModule.withServerTransition({appId: 'ngx-graphs-demo-id'}),
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AppSharedModule,
        LibModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
