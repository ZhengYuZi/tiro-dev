type IOptionValue = string | number | boolean

interface IOption {
    value: IOptionValue,
    label: string
}

type IOptions = Array<IOption>

export {
    IOptionValue,
    IOptions
}