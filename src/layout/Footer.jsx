import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="m-auto flex p-4 text-[8px] text-zinc-400">
      <Link
        href="https://marketinc.mx"
        target="_blank"
        className="flex items-center"
      >
        {/* Hecho por  */}MarketINC Digital Agency{" "}
        <Image
          src="/iconoMarketincBlanco.png"
          width={50}
          height={30}
          alt="MarketINC Top Digital Marketing Agency"
        />
        {/* con 🧠 y ❤️ */}
      </Link>
    </footer>
  );
}
