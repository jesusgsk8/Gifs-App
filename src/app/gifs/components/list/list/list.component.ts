import { Component , Input} from '@angular/core';
import { Gif } from 'src/app/gifs/interface/gits.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './list.component.html',

})
export class ListComponent {
@Input()
public gifs: Gif[ ] = [];
}
