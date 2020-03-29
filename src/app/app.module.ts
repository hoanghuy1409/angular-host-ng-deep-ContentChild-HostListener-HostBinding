import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuInputModule } from "./lib/au-input.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
