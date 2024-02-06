export type TTextFieldsProps = {
  label: string;
  placeholder: string;
  keyboardType?: "numeric" | "default";
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  onChangeText: (text: string) => void;
  error?: string;
};
