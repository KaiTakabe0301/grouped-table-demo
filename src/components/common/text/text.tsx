type TextProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onBlur: () => void;
};
export function Text({ onBlur, onClick, value, onChange }: TextProps) {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type="text"
        onClick={onClick}
        onBlur={onBlur}
      />
    </div>
  );
}
