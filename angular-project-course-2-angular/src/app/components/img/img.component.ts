import { Component } from '@angular/core';

//los componentes solo pertencen a un modulo

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  img: string = ''

}
