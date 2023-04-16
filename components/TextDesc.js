export default function TextDesc(props) {
  const fontSize = {
    24: "text-2xl leading-[43px]",
    22: "text-[22px] leading-[180%] ",
    20: "text-xl leading-[36px] ",
    26: "text-[26px] leading-[41px] ",
  };
  const pickedFontSize = fontSize[props.fs];
  return (
    <p className={`text-secondary/70  tracking-[0.02em] ${pickedFontSize}`}>
      {props.children}
    </p>
  );
}
