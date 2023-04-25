import { data } from "./data.js";

function renderRecentPostsGrid() {
    let recentPostsGridHtml = ''
    const recentPostsArray = data.slice(1,4)
    
    recentPostsArray.forEach( function (blogPost) { 
        recentPostsGridHtml += `
                        <a class="blogpost-link" href="${blogPost.href}">
                            <img class="blogpost-img"  src="${blogPost.img}" alt="${blogPost.alt}">
                            <p class="blogpost-date">${blogPost.date}</p>
                            <p class="blogpost-title">${blogPost.title}</p>
                            <p class="blogpost-text">${blogPost.text}</p>
                        </a>
        `
        document.getElementById('recent-posts-grid').innerHTML = recentPostsGridHtml
    })
}

renderRecentPostsGrid()