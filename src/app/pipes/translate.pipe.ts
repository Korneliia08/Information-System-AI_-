import {ChangeDetectorRef, Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from './translate.service';
import {take} from 'rxjs';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  value: string = '';

  constructor(
    private _ref: ChangeDetectorRef,
    private translate_: TranslateService,
  ) {
  }

  transform(name: string, variables?: { [key: string]: any }): string {
    if (this.translate_.languageFile.value) {
      this.value = this.translate_.getValueByStringKey(
        this.translate_.languageFile.value,
        name,
      );
      this._ref.markForCheck();
    } else {
      this.translate_.languageFile.pipe(take(1)).subscribe((value) => {
        this.value = this.translate_.getValueByStringKey(value, name);

        this._ref.markForCheck();
      });
    }
    if (!this.value) return `---${name}---`;


    if (variables) {
      this.value = this.translate_.changeVariable(variables, this.value);
    }

    this.value = this.value.replaceAll('&nbsp;', '\u00A0').replaceAll("\n", '<br/>');
    this.value = this.value.replaceAll('&_', '\u00A0');
    return this.value;
  }
}

@Pipe({
  name: 'tr',
  pure: false,
})
export class TrPipe implements PipeTransform {
  constructor(
    private _ref: ChangeDetectorRef,
    private translate_: TranslateService,
  ) {
  }

  transform(name: string, variables?: { [key: string]: any }): any {
    const k = new TranslatePipe(this._ref, this.translate_);
    return k.transform(name, variables);
  }
}
