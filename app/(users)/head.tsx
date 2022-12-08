export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>會覆蓋掉最頂層的 layout.tsx 的 head tag 裡的 title tag 的內容</title>
    </>
  );
}