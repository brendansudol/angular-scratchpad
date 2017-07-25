import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { FooComponent } from './foo.component'
import { FormComponent } from './form.component'
import { NotFoundComponent } from './not-found.component'
import { GithubComponent } from './github.component'

import { GithubService } from './github.service'

const routes: Routes = [
  { path: 'foo', component: FooComponent },
  { path: 'form', component: FormComponent },
  { path: 'github', component: GithubComponent },
  { path: '', redirectTo: '/foo', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    FooComponent,
    FormComponent,
    NotFoundComponent,
    GithubComponent,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
