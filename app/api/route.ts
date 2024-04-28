export async function GET (request: Request) {
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
}
