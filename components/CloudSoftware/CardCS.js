import TextDesc from "../TextDesc";

export default function CardCS(props) {
  return (
    <div
      className={`w-4/12 px-[45px] pb-[50px] ${
        props.one ? "pt-[144px]" : "pt-[122px]"
      } relative shadow-[0px_10px_60px_0_rgba(38,45,118,0.08)] rounded-[20px] text-center`}
    >
      <div className="absolute  top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full shadow-[0px_10px_40px_0_rgba(54,61,136,0.06)]">
        {props.icon}
      </div>
      <h5
        className={`text-dark-blue  text-[30px] font-medium  px-3 ${
          props.one ? "mb-[46px]" : "mb-6"
        }`}
      >
        {props.title}
      </h5>
      <TextDesc fs="20">{props.desc}</TextDesc>
    </div>
  );
}
