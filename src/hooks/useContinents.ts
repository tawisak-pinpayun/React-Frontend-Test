import { useQuery } from 'urql'
import { QueryContinents } from '../libs/graphql-client'
const useContinents = () => {
  const [result] = useQuery({
    query: QueryContinents,
  })

  return result
}

export default useContinents