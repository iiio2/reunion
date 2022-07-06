export default interface SelectedHeader {
  path: string;
  title: string;
  content: (value: string, setValue: React.ChangeEventHandler) => JSX.Element;
}
