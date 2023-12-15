export interface IProducts {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    categoria: string;
    marca: string;
}
export interface ApiResponse {
    productos: IProducts[];
}
