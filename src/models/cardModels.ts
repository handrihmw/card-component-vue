export interface AsCardType {
  value: string;
  icon: string;
  title: string;
  content: string;
  disabled?: boolean;
  button?: { text: string; disabled: boolean; };
  loading?: boolean;
}
