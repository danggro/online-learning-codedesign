import Link from "next/link";

export default function LinkFooter(props) {
  return (
    <li>
      <a
        href={props.href}
        className="text-white/70 text-[22px] hover:underline"
      >
        {props.children}
      </a>
    </li>
  );
}
