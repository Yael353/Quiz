import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Quiz App</h1>
      <Link href="/quiz">Take Quiz</Link>
      <Link href="/admin">Admin Panel</Link>
    </div>
  );
}
