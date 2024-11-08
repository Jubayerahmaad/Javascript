// API Conections 

let postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
.then(function(respone){

    // resolve the promise 
    return respone.json();
    
})
.then(function(posts){
    posts.forEach(function(item){
        console.log(item.title);
    });
});