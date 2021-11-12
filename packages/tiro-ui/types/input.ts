interface ITypes {
    text: string;
    password: string;
}

type IType = keyof ITypes

export {
    ITypes,
    IType
}