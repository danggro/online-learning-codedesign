export default function Button(props) {
  const variants = {
    orange:
      "text-white bg-primary border border-primary hover:bg-transparent hover:text-primary py-[14px] px-[37px]",
    white:
      "text-secondary bg-white shadow-[0px_20px_24px_0px_rgba(0,0,0,0.03)] hover:opacity-70 py-[14px] px-[37px]",
    transparent:
      "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white py-[18px] px-[40px]",
    purple:
      "text-white py-[14px] px-[37px] bg-gradient-to-r from-[#393FCF] to-[#545AE7] hover:opacity-70 ",
  };
  const pickedVariant = variants[props.variant];
  return (
    <button
      className={`text-[22px] rounded-full  font-medium ${pickedVariant}`}
    >
      {props.children}
    </button>
  );
}
