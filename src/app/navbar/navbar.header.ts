import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.header.html',
    styleUrls: ['./navbar.header.css']

})

export class NavbarHeader {

    constructor(private router: Router){};

    public isCollapsed = true;

    homeButton(){
        this.router.navigate(['/home']);
    }
}