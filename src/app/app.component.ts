import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private messagesTranslate: any;
  public tituloApp = 'Pock de Tradução Angular';
  public usuario  = {
    nome: 'Beltrano',
    idade: 47
  };

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  showMensagem(msg) {
    this.traducaoMsgs(msg);
    alert(this.messagesTranslate);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  traducaoMsgs(texto) {
    return this.translate.get(texto).subscribe((res: string) => {
        this.messagesTranslate = res;
    });
  }

}
