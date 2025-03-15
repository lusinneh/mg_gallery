interface PhotoPageProps {
  params: Promise<{ id: string }>;
}
async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  return <div>{id}</div>;
}

export default PhotoPage;
