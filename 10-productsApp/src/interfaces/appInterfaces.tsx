export interface LoginData {
    correo: string,
    password: string
}

export interface RegisterData {
    correo: string,
    password: string,
    nombre: string;
}

export interface LoginResponse {
    usuario: User;
    token:   string;
}

export interface User {
    rol:    string;
    estado: boolean;
    google: boolean;
    nombre: string;
    correo: string;
    uid:    string;
}

//Products
export interface ProductsResponse {
    total:     number;
    productos: Products[];
}

export interface Products {
    precio:    number;
    _id:       string;
    nombre:    string;
    categoria: Category;
    usuario:   Category;
    img?:      string;
}

//Categories
export interface CategoriesResponse {
    categorias: Category[];
}

export interface Category {
    _id:     string;
    nombre:  string;
    usuario: CreatedBy;
}

export interface CreatedBy {
    _id:    string;
    nombre: string;
}
