export default function SectionTitle(props) {
  return (
    <h2
      className={`text-[36px] font-semibold text-dark-blue ${
        props.nunito ? "font-nunito" : "font-sans"
      }`}
    >
      {props.children}
    </h2>
  );
}
