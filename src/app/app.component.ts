import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fightMode = false;
  title = 'the-witcher-rpg';
  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "sword",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icons/sword-fill-svgrepo-com.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "compass",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg-icons/compass-svgrepo-com.svg")
    );
  }
}
