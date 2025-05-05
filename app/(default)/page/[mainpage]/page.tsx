import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

type Props = {
  params: { mainpage?: string[] };
};

async function getData() {
  const res = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas",
    {
      next: { revalidate: 60 }, // optional: revalidate every 60 seconds
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Mainpage({ params }: Props) {
  const { mainpage } = (await params) || [];

  // console.log("main", mainpage);
  const data = await getData();

  const breadCrumbInput = [
    {
      label: `${mainpage}`,
      slug: `/page/${mainpage}`,
    },
  ];

  return (
    <div>
      <BreadCrumb breadCrumbInput={breadCrumbInput} />
      <h1>Main page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
