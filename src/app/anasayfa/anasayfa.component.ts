import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BannerComponent } from "../components/banner/banner.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [RouterOutlet, RouterModule, BannerComponent, BannerComponent, FooterComponent,FooterComponent],
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.scss'
})
export class AnasayfaComponent {

}
