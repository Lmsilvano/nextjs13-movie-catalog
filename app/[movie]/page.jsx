import Image from 'next/image'

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
  )
  const response = await data.json()
  return response.results.map((movie) => ({
    movie: toString(movie.id),
  }))
}

async function MovieDetail({ params }) {
  const { movie } = params
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
  )
  const response = await data.json()
  console.log(params)
  //
  const bgRelease =
    response.status != 'Released' ? 'bg-red-600' : 'bg-green-600'
  return (
    <div>
      <div>
        <h2 className="text-2xl">{response.title}</h2>
        <h2 className="text-lg">{response.release_date}</h2>
        <h2>Runtime: {response.runtime} minutes</h2>
        <h2
          className={`${bgRelease} inline-block px-2 rounded-md tracking-wide`}
        >
          {response.status}
        </h2>
        <Image
          className="my-12"
          src={`https://tmdb.org/t/p/original${response.poster_path}`}
          width="750"
          height="750"
        />
      </div>

      <p className="text-justify">{response.overview}</p>
    </div>
  )
}

export default MovieDetail
