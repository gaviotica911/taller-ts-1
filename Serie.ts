


export class Serie{ //expor es para que esta clase pueda ser visible desde otros archivos
    id: number;
    titulo: string;
    plataforma: string;
    temporadas: number;
    descripcion: string;
    url: string;
    img: string;
    constructor(id: number, title: string, channel: string, 
        seasons: number, description: string, 
        url_direction: string, img: string){
        this.id = id;
        this.titulo = title;
        this.plataforma = channel;
        this.temporadas = seasons;
        this.descripcion = description;
        this.url = url_direction;
        this.img = img;
    }

   

}



