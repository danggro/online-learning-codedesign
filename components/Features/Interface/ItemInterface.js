import TextDesc from "@/components/TextDesc";

export default function ItemInterface(props) {
  return (
    <li className="flex gap-[42px] items-center">
      <div className="rounded-full shadow-[0px_15px_44px_0_rgba(13,15,28,0.12)]">
        {props.icon}
      </div>
      <div className="pr-36">
        <TextDesc>{props.desc}</TextDesc>
      </div>
    </li>
  );
}
