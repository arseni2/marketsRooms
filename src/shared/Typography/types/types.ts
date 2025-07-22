export enum VariantEnum {
  primary = 'primary',
  secondary = 'secondary',
  normal = 'normal',
}
export enum WeightEnum {
  bold = 'bold',
  medium = 'medium',
  thin = 'thin',
  normal = 'normal',
}

export type PropsTypographyType = {
  text?: string
  variant?: VariantEnum
  //weight: WeightEnum
  size?: string
}

export type PropsHeadingType = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

}
