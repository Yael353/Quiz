import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Link href="/admin">Go to admin page</Link>
    </>
  );
}
