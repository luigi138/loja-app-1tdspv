  import Link from 'next/link'
import Image from 'next/link'

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
      <Image src="/candies-171342_1280.jpg" alt="Prateleira" width={320}
      height={320}/>
    </figure>
  </div>
  </> )
}
