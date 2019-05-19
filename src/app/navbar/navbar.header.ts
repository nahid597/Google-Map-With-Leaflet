import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.header.html',
    styleUrls: ['./navbar.header.css']

})

export class NavbarHeader {

    constructor(){};

    public isCollapsed = true;

}