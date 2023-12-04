import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent{
    sections=['Strona głowna', 'O Nas', 'Informacje', 'Kontakt'];

}