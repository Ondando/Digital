export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  return (
    <div>
      <p>{productId}</p>
    </div>
  );
}
