import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelHelperService } from '../marvel-helper.service';
import { Character } from '../Models/Character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character = new Character();
  id:any;
  constructor(private activatedRoute: ActivatedRoute, private marvelService: MarvelHelperService) {

   }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('char');
    this.marvelService.getCharacterWithId(this.id).subscribe((response:any) => {
      const results = response['data']['results'];
      results.forEach((item:any) => {
          this.character.name = item['name'];
          this.character.imagePath = item['thumbnail']['path'] + '.' + item['thumbnail']['extension'];
          this.character.desc = item['description'] ?  item['description'] : '---';
          this.character.id = item['id'];
          this.character.comics = item['comics'];
          this.character.series = item['series'];
          this.character.stories = item['stories'];
          this.character.events = item['events'];
          this.character.urls = item['urls'];
      });
    });

  }

  getAlternateName(){
    return "Photo of a " + this.character.name;
  }

}
