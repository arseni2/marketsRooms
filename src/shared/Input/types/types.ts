export type PropsInputType = {
  label?: string;
  labelClass?: string;
  placeholder?: string
  type?: string
}


type OptionType = {
  key: string
  value: string
}
export type PropsSelectType = {
  label?: string
  options: OptionType[]
}
