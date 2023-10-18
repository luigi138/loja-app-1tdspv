 import Image from "next/image";
 import Link from 'next/link'


export default function Home() {
  return (
  <>
  <h1>HOME</h1>

  <div>
    <ul>
       <Link href="/produto/tenis">TENIS</Link>
       <Link href="/produto/camisa">CAMISA</Link>
       <Link href="/produto/calca">CALCA</Link>
    </ul>

    <figure>
      <Image src="/sup-shelf_640.png" alt="Prateleira" width={320}
      height={320}/>
    </figure>
  </div>
  </> )
}
