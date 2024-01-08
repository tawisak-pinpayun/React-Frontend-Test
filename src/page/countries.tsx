import { useState } from 'react'
import usecontinents from '../hooks/useContinents'
import useCountry from '../hooks/useCountry'
interface Country {
  code: string
  name: string
  emoji: string
}

function App() {
  const [code, setCode] = useState<string>('TH')

  const result = usecontinents()
  const countryResult = useCountry(code)


  const { fetching, data, error } = result
  const { fetching: loading, data: countryData } = countryResult


  if (fetching) return <p>Loading....</p>
  if (error) return <p>{error.message || 'Something went wrong!'}</p>

  const { continents } = data
  const country = countryData?.country

console.log(continents);
  return (
    <div className="App">
        <div className="topnav">
        <a href="/register">Register</a>
        <a className="active" href="/countries">GraphQL Countries</a>
      </div>
      <h2>GraphQL continents</h2>
      {continents.map((country: Country) => {
        return (
          <button key={country.code} onClick={() => setCode(country.code)}>
            {country.name}
          </button>
        )
      })}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card">
          <p>Country : {country?.name}</p>
          <p>Emoji : {country?.emoji}</p>
          
        </div>
      )}
    </div>
  )
}

export default App