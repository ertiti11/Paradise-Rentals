export type Root = Servicio[];

export interface Servicio {
  id: number;
  nombre: string;
  tipo_categoria: string;
  precio: number;
  capacidad: number;
  descripcion: string;
  url_imagen: string;
  created_at: string;
  updated_at: string;
}