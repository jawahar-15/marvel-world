import { Component, OnInit } from '@angular/core';
import { MarvelHelperService } from '../marvel-helper.service';
import { Character } from '../Models/Character';

@Component({
  selector: 'app-marvel-characters',
  templateUrl: './marvel-characters.component.html',
  styleUrls: ['./marvel-characters.component.scss']
})
export class MarvelCharactersComponent implements OnInit {

  characterList: Character[] = [];
  p: number = 1;
  constructor(private marvelService: MarvelHelperService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.marvelService.getCharacters().subscribe((response:any) => {
      const results = response['data']['results'];
      results.forEach((item:any) => {
          const temp = new Character();
          temp.name = item['name'];
          temp.imagePath = item['thumbnail']['path'] + '.' + item['thumbnail']['extension'];
          temp.desc = item['description'] ?  item['description'] : 'Click here to know more about ' + item['name'] ;
          temp.id = item['id'];
          this.characterList.push(temp);
      });
    });
  }

  getShortChars(desc: string){
    if(desc.length > 172) {
      return desc.substr(0,172).concat('...');
    } else {
      return desc;
    }
  }
}
