'use client'
import Link from 'next/link'
import Image from 'next/image'
export default function Movie({ title, id, poster_path, release_date }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={'/asd'}>
        <Image
          src={`https://tmdb.org/t/p/original${poster_path}`}
          alt={`The movie ${title} poster`}
          width={450}
          height={450}
        />
      </Link>
    </div>
  )
}
