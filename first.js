const response = url => { fetch(url).then(data => data.json())
.then(resultdata => console.log(resultdata.filter( el => el.userId === 1)))
.catch(error => console.error(error))
}
const result = response('https://jsonplaceholder.typicode.com/posts');




