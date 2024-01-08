import { createClient, cacheExchange, fetchExchange } from '@urql/core'
export const client = createClient({
  url: 'https://countries.trevorblades.com/',
  exchanges: [cacheExchange, fetchExchange],
})

export const QueryContinents = `
query {
    continents {
        code
        name
        countries {
          code
          name
          emoji
        }
      }
}
`
export const QueryCountry = `
query($code: ID!) {
  country(code: $code) {
    code
    name
	emoji
  }
}
`