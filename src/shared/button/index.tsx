function CustomButton({
  handleClick,
  title,
  disabled,
}: {
  title: string;
  handleClick: () => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <button
        onClick={handleClick}
        disabled={disabled}
        className="disabled:cursor-not-allowed disabled:bg-slate-100 w-full h-[40px] px-[8px] text-[13px] font-[600] rounded-[12px] bg-slate-200 flex items-center gap-2 justify-center hover:bg-cyan-500"
      >
        {title}{' '}
      </button>
    </div>
  );
}

export default CustomButton;
