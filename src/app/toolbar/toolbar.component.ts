import { Component, OnInit } from "@angular/core";
import { OktaAuthService } from "@okta/okta-angular";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  isAuthenticated: boolean;
  currentUser: any;

  constructor(private oktaAuth: OktaAuthService) {}

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
    if (this.isAuthenticated) {
      this.currentUser = await this.oktaAuth.getUser();
      console.log(this.currentUser);
    }
  }

  login(){
    this.oktaAuth.loginRedirect()
  }

  logout(){
    this.oktaAuth.logout()
  }
}
