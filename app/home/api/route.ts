
/* export async function GET (request: Request) {
  console.log(process.env)
  const res = await fetch('http://localhost:3006/api/lunarNewYear', {
    headers: {
      // 'method': 'post',
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  } as any)
  const data = await res.json()
 
  return Response.json({ data })
} */

export async function POST (request: Request) {
  console.log(request)
  const params = {
    id: '121',
    arr: [1, 2, 3],
  }
  const res = await fetch('http://localhost:3006/api/getData', {
    method: 'post',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  } as any)
  const data = await res.json()
 
  return Response.json({ data })
}
