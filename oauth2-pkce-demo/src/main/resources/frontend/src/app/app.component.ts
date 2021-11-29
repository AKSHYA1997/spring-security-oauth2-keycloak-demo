import {Component} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  logout() {
    this.oauthService.logOut();
  }
}
