import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { HideDirective } from './directives/hide.directive';
import { HeaderComponent } from './header/header.component';
import { ChangeColorDirective, } from './directives/color.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AddItemComponent,
    HideDirective,
    HeaderComponent,
    ChangeColorDirective,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
