// import { redirect } from "next/navigation";
// import { getSession } from "@/lib/auth"; // Assume a function to get auth status
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const query = `
  query{
    getNavigationMenu
  }
`;

async function getHeaderFooterData() {
  const res = await fetch("https://dev.leaguemed.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // SSR: fetch fresh on every request
    body: JSON.stringify({ query }),
  });

  const { data } = await res.json();
  // console.log(data);
  const result = {
    header: data.getNavigationMenu?.header,
    headerBtn: {
      headerCtaOne: data.getNavigationMenu?.header?.headerLoginCta,
      headerCtaTwo: data.getNavigationMenu?.header?.headerRegisterCta,
    },
    footer: data.getNavigationMenu?.footer,
  };
  return result;
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { header, footer } = await getHeaderFooterData();

  // const session = await getSession(); // check if user is logged in

  // if (!session) {
  //   redirect("/login");
  // }

  return (
    <html lang="en">
      <body>
        <Header data={header} />
        <main>{children}</main>
        <Footer data={footer} />
      </body>
    </html>
  );
}
