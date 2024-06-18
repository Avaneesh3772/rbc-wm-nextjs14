import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Page Content Area</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
