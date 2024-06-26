import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductItemComponent } from './pages/product-page/product-item/product-item.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ContactComponent } from './pages/contact-page/contact.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MapComponent } from './pages/landing-page/map/map.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'product/:id', component: ProductItemComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProductPageComponent,
    ProductItemComponent,
    CartPageComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    NotFoundComponent,
    MapComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
