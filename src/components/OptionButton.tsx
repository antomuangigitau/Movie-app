interface Props {
  children: React.ReactNode;
  className: string;
}
const OptionButton = ({ children, className }: Props) => {
  return (
    <button
      className={`${className} text-[20px] flex items-center justify-center py-[5px] w-full rounded-[10px]`}
    >
      {children}
    </button>
  );
};
export default OptionButton;
