import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

type Props = {
  params: { mainpage?: string[]; subpage?: string[]; slug?: string[] };
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

export default async function DetailPage({ params }: Props) {
  const data = await getData();
  const { mainpage, subpage, slug } = (await params) || [];

  const breadCrumbInput = [
    {
      label: `${mainpage}`,
      slug: `/page/${mainpage}`,
    },
    {
      label: `${subpage}`,
      slug: `/page/${mainpage}/${subpage}`,
    },
    {
      label: `${slug}`,
      slug: `/page/${mainpage}/${subpage}/${slug}`,
    },
  ];
  return (
    <div>
      <BreadCrumb breadCrumbInput={breadCrumbInput} />
      <h1>Slug</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
