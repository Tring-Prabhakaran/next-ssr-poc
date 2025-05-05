import Link from "next/link";
import Image from "next/image";
import blurBg from "../../public/assets/images/BlurBg.svg";
import "./Footer.scss";

export default function Footer(props: any) {
  const { data } = props;
  // console.log("footer", data);

  return (
    <footer>
      <div>
        <div className="container mb-5">
          <div
            className={`d-flex align-items-center flex-wrap justify-content-between `}>
            <div>
              <div>
                <Link
                  href={"/"}
                  data-testid="scrolltop"
                  // onClick={handleTop}
                  passHref
                  aria-label="Go to Home">
                  {data?.companyLogo && (
                    <Image
                      src={data?.companyLogo}
                      alt="logo"
                      width={185}
                      height={80}
                      style={{ marginRight: "7px" }}
                      blurDataURL={blurBg}
                    />
                  )}
                </Link>
              </div>
              <span>{data?.footer_top_section}</span>
            </div>

            <div
              className={`"d-flex
               flex-wrap gap-3 justify-content-center`}>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </div>
          </div>
          <div className={`${"d-flex"} justify-content-between flex-wrap`}>
            {data?.footermenu?.footer_columns?.map(
              (datainfo: any, index: any) => (
                <div className="mt-5" key={index}>
                  <Link
                    href={`/page/${datainfo?.slug?.current}`}
                    className={
                      datainfo?.slug?.current === "others" || !datainfo?.isPage
                        ? "disableLink"
                        : ""
                    }
                    scroll={true}>
                    <span>{datainfo?.name}</span>
                  </Link>
                  <div className="d-flex flex-column">
                    {datainfo?.sub_items?.map((dataitem: any, indexs: any) => {
                      return (
                        <span key={indexs}>
                          <Link
                            href={`/page/${datainfo?.slug?.current}/${dataitem?.slug?.current}`}
                            style={{ color: "#d0d2d9" }}>
                            {dataitem?.name}
                          </Link>
                        </span>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className={`container d-flex justify-content-center`}>copy</div>
      </div>

      {/* </div> */}
    </footer>
  );
}
