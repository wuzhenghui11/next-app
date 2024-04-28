'use client'
function Home () {

  function testGetData () {
    console.log(11)
    const params = {
      id: '121',
      arr: [1, 2, 3]
    };
    const headers = new Headers({
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
    })
    // headers.append('Content-Type', 'application/json')
    const request = new Request('http://localhost:3000/home/api', {
      method: 'post',
      cache: 'default',
      body: JSON.stringify(params),
      headers,
    })
    fetch(request).then((response) => {
      console.log(response, 'response')
    })
  }
  // throw new Error('出错了')
  return (
    <div>
      <h2>首页</h2>
      <button onClick={() => testGetData()}>btn</button>
    </div>
  )
}

export default Home