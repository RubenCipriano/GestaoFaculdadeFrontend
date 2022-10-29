export interface InputForm {
  name: string,
  type: InputType,
  value?: Array<any>
}

export enum InputType {
  string="text",
  password="password",
  date="date",
  number="number",
  dropdown="dropdown"
}
