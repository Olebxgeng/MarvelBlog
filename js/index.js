import { data } from "./data.js";
const viewMoreBtn = document.getElementById("view-more")
let blogPosts = []
let  numBlogPosts = 6

viewMoreBtn.addEventListener("click", function(){
    if (numBlogPosts >= data.length) {
        viewMoreBtn.style.display = "none"      
    } else {
        numBlogPosts += 3
        getBlogPostsArray(numBlogPosts)
        renderBlogPostsGridHtml()
    }
})

function getBlogPostsArray(n) {
    blogPosts = data.slice(0,n)
    return blogPosts
}

function renderBlogPostsGridHtml() {
    let blogPostsGridHtml = ''
    
    blogPosts.forEach ( function (blogPost) {
        blogPostsGridHtml += `
                        <a class="blogpost-link" href="${blogPost.href}">
                            <img class="blogpost-img"  src="${blogPost.img}" alt="${blogPost.alt}">
                            <p class="blogpost-date">${blogPost.date}</p>
                            <p class="blogpost-title">${blogPost.title}</p>
                            <p class="blogpost-text">${blogPost.text}</p>
                        </a>
        `
        document.getElementById('posts-grid').innerHTML = blogPostsGridHtml
    })
}

getBlogPostsArray(numBlogPosts)
renderBlogPostsGridHtml()