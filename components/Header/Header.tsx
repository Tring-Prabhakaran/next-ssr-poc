import Link from "next/link";
import Image from "next/image";
// import { redirect } from "next/navigation";
// import { clearUserToken } from "@/app/actions/auth";
// import Cookies from "js-cookie";

import "./Header.scss";
import ClientButton from "../Button/Button";

export default function Header(props: any) {
  const { data, isSession } = props;
  // console.log("header", data);
  // const username = Cookies.get("name");
  // const handleLogout = async () => {
  //   // await clearUserToken();
  //   redirect("/");
  // };

  return (
    <header>
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/">
          <Image
            src="/public/assets/images/logo.svg"
            alt="alt"
            width={100}
            height={60}
          />
        </Link>
        <div className="d-flex menu">
          <ul>
            {data.pageBuilder.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <Link href={`/page/${item.slug.current}`}>{item.name}</Link>
                  <ul>
                    {item?.sub_items?.map((a) => (
                      <li key={a._id}>
                        <Link
                          href={`/page/${item.slug.current}/${a.slug.current}`}>
                          {a.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          {isSession ? (
            <ClientButton to="/" label="logout" />
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
