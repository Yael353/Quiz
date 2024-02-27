import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Chas Quiz</h1>
      <p>Tja!</p>
      <Link href="/admin">Go to admin page</Link>
    </div>
  );
}
