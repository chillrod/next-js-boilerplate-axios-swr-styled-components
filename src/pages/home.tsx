import { useFetch } from '../hooks/useFetch'

interface User {
  id: number;
  title: string;
  description: string;
  producer: string;
  rt_score: number;
}

const Home: React.FC = () => {
  const { data } = useFetch<User[]>('/')

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {data?.map(movie => (
        <li key={movie.id}>
          {movie.title}
          {movie.description}
          {movie.producer}
          {movie.rt_score}
        </li>
      ))}
    </ul>
  )
}

export default Home