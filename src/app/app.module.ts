import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { DataService } from './shared/data.service';
import { ExtraDataService } from './shared/extra-data.service';
import { FilterPipePipe } from './user-list/filter-pipe.pipe';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    UserItemComponent,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UserService,DataService,ExtraDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
