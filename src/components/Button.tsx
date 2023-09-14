interface Props {
  children: React.ReactNode;
}
const Button = ({ children }: Props) => {
  return (
    <button
      type="button"
      className="border border-button-color rounded-[15px] px-4 py-[3px] text-some-text-color text-[15px] font-medium"
    >
      {children}
    </button>
  );
};
export default Button;
