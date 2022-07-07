interface FilePickerProps extends React.ComponentPropsWithoutRef<"input"> {
  inputref: any;
  selectid: string;
  icon: React.ReactNode | React.ReactNode[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilePicker = (props: FilePickerProps) => {
  return (
    <button aria-label="file-picker">
      <input
        id={props.selectid}
        type="file"
        style={{ display: "none" }}
        multiple
        {...props}
      />
      <label htmlFor={props.selectid}>{props.icon}</label>
    </button>
  );
};

export default FilePicker;
