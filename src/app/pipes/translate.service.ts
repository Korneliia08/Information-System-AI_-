import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import ms from 'ms';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  languageFile = new BehaviorSubject<any>(undefined);
  private http = inject(HttpClient);
  private cookies_ = inject(CookieService);
  private random = new Date().getTime();
  private currentLanguage = ''

  constructor() {
  }

  setLanguageFile(language: string) {
    const expire = new Date(new Date().getTime() + ms('90d'));
    this.cookies_.set('language', language, expire);
    this.getLanguageFile(language);
  }

  getLanguageFile(language: string = 'pl') {

    try {
      this.http///Guru
        .get(`/translate/${language}.json?random=${this.random}`)
        .subscribe({
          next: (data) => {
            this.languageFile.next(data);
            this.currentLanguage = language
          },
          error: (err) => {
          },
        });
    } catch (error) {
      console.warn('select language error');
    }
  }


  simpleTranslate(name: string, variables?: { [key: string]: any }) {
    let value = this.getValueByStringKey(this.languageFile.value, name);
    if (variables) {
      value = this.changeVariable(variables, value);
    }
    return value;
  }

  getCurrentLanguage() {
    return this.currentLanguage
  }

  getCurrentLanguageFlagSymbol() {
    switch (this.currentLanguage) {
      case'en':
        return 'us'
      default:
        return this.currentLanguage
    }
  }


  changeVariable(variables: { [key: string]: any }, value: string) {
    if (variables) {
      Object.keys(variables).forEach((key: any) => {
        const variablePlaceholder = `{${key}}`;
        value = value.replace(
          new RegExp(variablePlaceholder, 'g'),
          variables[key],
        );
      });
    }
    return value;
  }

  /**
   Funkcja zamieniająca klucze na tłumaczenia ze zmiennej zawierającej plik tłumaczeń
   */
  getValueByStringKey(obj: {}, keyString: string): string {
    const keys = keyString.split('.');
    try {
      return keys.reduce((acc: any, key) => acc[key], obj);
    } catch (error) {
      return '';
    }
  }
}
