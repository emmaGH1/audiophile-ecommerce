import { fetchData } from "../lib/data"
import { aboutText } from '../lib/constants';

export default async function Page() {
  const data  = await fetchData()
  
  return (
    <div>
      <img src='' />
      {data?.map((each) => {
        return (
          <div>
            {JSON.stringify(each)}
          </div>
        )
      })}
    </div>
  )
}
