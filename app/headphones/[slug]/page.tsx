import { fetchProductById } from "@/app/lib/data";

export default async function Page({ params }: { params: { slug: string } }) {
   const data = await fetchProductById(params.slug)
  
    return (
    <div>{data}</div>
  );
};

