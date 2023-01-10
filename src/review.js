
// let id = setTimeout((hi) => {
//   console.log(hi)
// }, 5000, 'Please, sign up')

// clearTimeout(id)

// let id = setInterval((signup) => {
//   let date = new Date()
//   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// }, 1000, 'Please, sign up')

// clearInterval(id)


function fetchData() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
}



function cachedData(func) {
  let cache = new Map()
  return function(x) {
    if(cache.has(x)) {
      return cache.get(x)
    }
    let fn = func()
    cache.set(x, fn)
  } 
}

fetchData = cachedData(fetchData)

setInterval(() => {
  
  fetchData()
}, 0)
