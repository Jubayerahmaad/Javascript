let postGrid = document.querySelector('.post-grid');

let posts = [
    {
        title: 'Post 1',
        author: 'Jubayer Ahmad',
        description: 'Hi Im Jubayer I push some post desc by js arrys',
        like: 122
    },
    {
        title: 'Post 2',
        author: 'Tafhim Hasan',
        description: 'Hi Im Tafhim I push some post desc by js arrys',
        like: 177
    },
    {
        title: 'Post 3',
        author: 'Habib ',
        description: 'Hi Im Habib I push some post desc by js arrys',
        like: 115
    }
];

posts.forEach(function(post){
    renderHtml(post)
});

function renderHtml(postObject){
    let html = `
        <div class="post-item">
            <h1>${postObject.title}</h1>
            <h2>${postObject.author}</h2>
            <p>${postObject.description}</p>
            <p>Like : ${postObject.like}</p>
        </div>
       `;
    postGrid.innerHTML += html;
}