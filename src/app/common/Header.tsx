import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between h-[70px]">
      <div className="p-4 flex items-center"><Link href="/">Blog</Link></div>
      <div><img src="http://m.xn--vk1bn00an1hivg.kr/img_up/shop_pds/ehompy0402/design/2021/logo.png" alt="팔천순대" /></div>
      <div className="flex items-center gap-x-4 p-4">
        <Link href="/add-post">글쓰기</Link>
        <Link href="/about">About</Link>
        <button>ㅁ</button>
      </div>
    </header>
  );
}