import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <ul>
          <Link href={"/login"}>Login</Link>
        </ul>
      </div>
    </header>
  );
}
