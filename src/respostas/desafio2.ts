interface IPessoas {
    nome: string,
    idade: number,
    profissao: Profissoes
};

enum Profissoes {
    Atriz,
    Padeiro
}

let pessoa1: IPessoas = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissoes.Atriz
};

let pessoa2: IPessoas = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissoes.Padeiro
};

let pessoa3: IPessoas = {
    nome: 'Laura',
    idade: 31,
    profissao: Profissoes.Atriz
};

let pessoa4: IPessoas = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissoes.Padeiro
}