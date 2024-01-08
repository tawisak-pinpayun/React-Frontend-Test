import { useQuery } from 'urql'
import { QueryCountry } from '../libs/graphql-client'

const useCountry = (code: string) => {
  const [result] = useQuery({
    query: QueryCountry,
    variables: { code },
  })

  return result
}

export default useCountry