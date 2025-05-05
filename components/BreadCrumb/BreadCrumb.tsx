import Link from "next/link";

export default function BreadCrumb(props: any) {
  const { breadCrumbInput } = props;
  return (
    <nav>
      <span key={"home"}>
        <Link href="/">Home</Link>
        {breadCrumbInput.length && " / "}
      </span>
      {breadCrumbInput.map((item: any, index: number) => (
        <span key={index}>
          <Link href={item.slug}>{item.label}</Link>
          {index} {breadCrumbInput.length}
          {index != breadCrumbInput.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}
