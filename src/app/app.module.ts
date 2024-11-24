import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChatPageComponent} from './pages/chat-page/chat-page.component';
import {ChatBoxComponent} from './pages/chat-page/chat-box/chat-box.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from '@angular/material/button';
import {MaxLengthPipe} from './pipes/max-length.pipe';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatPaginator} from '@angular/material/paginator';
import {MatCheckbox} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {MainBannerComponent} from './pages/main-page/main-banner/main-banner.component';
import {NgIconsModule} from '@ng-icons/core';
import {faEye} from '@ng-icons/font-awesome/regular';
import {OurPartnersComponent} from './pages/main-page/our-partners/our-partners.component';
import {AiDocumentationComponent} from './pages/main-page/ai-documentation/ai-documentation.component';
import {SmoothScrollComponent} from './smooth-scroll/smooth-scroll.component';
import {FooterComponent} from './pages/main-page/footer/footer.component';
import {AccessibilityComponent} from './fetures/accessibility/accessibility.component';
import {NgxMarqueeModule} from 'ngx-marquee';
import {TranslatePipe, TrPipe} from './pipes/translate.pipe';
import {TranslateService} from './pipes/translate.service';
import {HttpClientModule} from '@angular/common/http';
import {faBrandFacebook, faBrandInstagram, faBrandTwitter} from '@ng-icons/font-awesome/brands';
import {ChooseLanguageComponent} from './ui/choose-language/choose-language.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ChooseLanguageModalComponent} from './ui/choose-language/choose-language-modal/choose-language-modal.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ChatPageComponent, MaxLengthPipe,
    ChatBoxComponent,
    MainPageComponent, TranslatePipe,
    MainBannerComponent,
    OurPartnersComponent, TrPipe,
    AiDocumentationComponent,
    SmoothScrollComponent,
    FooterComponent, ChooseLanguageModalComponent,
    AccessibilityComponent, ChooseLanguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIcon,
    MatIconButton,
    MatRadioGroup, HttpClientModule,
    MatRadioButton,
    MatPaginator, NgxMarqueeModule,
    MatCheckbox,
    MatButton,
    FormsModule, MatDialogModule,
    NgIconsModule.withIcons({faEye, faBrandInstagram, faBrandTwitter, faBrandFacebook})
  ],
  providers: [
    provideAnimationsAsync(),
    TranslateService
  ]
})
export class AppModule {
}
