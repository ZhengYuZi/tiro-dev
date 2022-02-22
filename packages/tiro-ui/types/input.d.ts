declare namespace Input {
  interface ITypes {
    text: string
    password: string
  }

  type IType = keyof ITypes
}
