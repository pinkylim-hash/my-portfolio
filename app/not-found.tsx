import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream p-6 text-ink">
      <div className="text-center">
        <p className="eyebrow">404 / WRONG TURN</p>
        <h1 className="mt-4 font-display text-[clamp(5rem,18vw,12rem)] leading-none text-pinky">Oops!</h1>
        <p className="mx-auto mt-4 max-w-md text-lg">这个想法暂时还没有长成页面。回到首页，继续看看 Pinky 正在做什么。</p>
        <Link href="/" className="button button-dark mt-8">Back Home</Link>
      </div>
    </main>
  );
}
