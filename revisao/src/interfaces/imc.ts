export type IUserIMC = {
    peso: number,
    altura: number,
    nome: string,
}

export interface ITeste extends IImc {
    altura: number;
}

export interface IImc {
    name: string;
    weight: number;
}

