import { Component, OnInit } from "@angular/core";

@Component({
  selector: "splash-screen",
  templateUrl: "./splash-screen.component.html",
  styleUrls: ["./splash-screen.component.css"]
})
export class SplashScreenComponent implements OnInit {
  showSplash = true;
  opacityChange: number = 1;
  animationDuration: number = 1
  splashTransition: string | undefined;

  ngOnInit(): void {
    setTimeout(() => {
      this.splashTransition = "opacity " + this.animationDuration + "s";
      this.opacityChange = 0;

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 1500);
  }
}