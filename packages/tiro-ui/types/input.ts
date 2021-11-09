interface ITypes {
    text: string;
    password: string;
    textarea: string;
}

type IType = keyof ITypes

export {
    ITypes,
    IType
}