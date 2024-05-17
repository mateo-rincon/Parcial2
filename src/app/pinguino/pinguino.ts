export class Pinguino{
    id:number;
    name:string;
    scientific_name:string;
    feeding:string;
    global_distribution:string;
    description:string;
    foto:string;
    constructor(id:number, name:string, scientific_name:string, feeding:string, global_distribution:string, description:string, foto:string){

        this.id=id;
        this.name=name;
        this.scientific_name=scientific_name;
        this.feeding=feeding;
        this.description=description;
        this.global_distribution=global_distribution;
        this.foto=foto;
    }
}