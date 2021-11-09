
export class HeroeModel {

    id    :string | undefined;
    nombre:string | undefined;
    poder :string | undefined;
    vivo  :boolean| undefined;

    constructor( ){
        this.vivo = true;
    }
}