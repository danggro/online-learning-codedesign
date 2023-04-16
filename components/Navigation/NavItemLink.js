export default function NavItemLink(props) {
  return (
    <li>
      <a
        href={props.href}
        className="text-[22px] text-[##252641] hover:underline"
      >
        {props.children}
      </a>
    </li>
  );
}
