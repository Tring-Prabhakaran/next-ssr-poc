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

export default async function DashboardPage() {
  const data = await getData();

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
