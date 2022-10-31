export interface InputForm {
  name: string,
  type: InputType,
  value?: any;
  selectedValue?: any;
}

export enum InputType {
  string="text",
  password="password",
  date="datetime-local",
  number="number",
  dropdown="dropdown"
}
