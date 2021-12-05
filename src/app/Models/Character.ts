export class Character{
    name = '';
    imagePath='';
    desc='';
    id='';
    comics = new ComicModel();
    series = new ComicModel();
    stories = new ComicModel();
    events=  new ComicModel();
    urls = [new UrlModel()];
}

export class ComicModel{
    available = 0;
    returned= 0;
    items = [{
        resourceURI:'',
        name: '',
        type:''
    }]
}

export class UrlModel{
    type='';
    url = '';
}