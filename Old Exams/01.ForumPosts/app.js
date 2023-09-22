window.addEventListener("load", solve);

function solve() {
    let publishElement = document.getElementById('publish-btn');
    let titleElement = document.getElementById('post-title');
    let categoryElement = document.getElementById('post-category');
    let postContent = document.getElementById('post-content');
    let revewElement = document.getElementById('review-list');
    let published = document.getElementById('published-list');
    let button = document.createElement('button');
    let button1 = document.createElement('button');
    let clear = document.getElementById('clear-btn');
    button.className = 'action-btn edit';
    button1.className = 'action-btn approve';
    button.textContent = 'EDIT';
    button1.textContent = 'APPROVE';
    let currentTitleElement;
    let currentCategoryElement; 
    let currentPostContent;

    
    publishElement.addEventListener('click',publish); 
    button.addEventListener('click', edit);
    button1.addEventListener('click', approved);
    clear.addEventListener('click', cleared);     
       

    function publish(){
    if (titleElement.value !== '' && categoryElement.value !== '' && postContent.value !== '') {
    currentTitleElement = titleElement.value;
    currentCategoryElement = categoryElement.value;
    currentPostContent = postContent.value;
    let li = document.createElement('li');
    li.className = 'rpost';     
    let art = document.createElement('article'); 
    let h4 = document.createElement('h4');
    h4.textContent = currentTitleElement; 
    let p1 = document.createElement('p');
    p1.textContent = 'Category:' + ' ' + currentCategoryElement;
    let p2 = document.createElement('p');
    p2.textContent = 'Content:' + ' ' + currentPostContent;   
    art.appendChild(h4);  
    art.appendChild(p1);
    art.appendChild(p2);
    li.appendChild(art);
    revewElement.appendChild(li);
    titleElement.value = '';
    categoryElement.value = '';
    postContent.value = '';
    art.appendChild(button1);
    art.appendChild(button);
    }
}
    function edit(){
    titleElement.value = currentTitleElement;
    categoryElement.value = currentCategoryElement;
    postContent.value = currentPostContent;
    revewElement.textContent = '';       
    }

    function approved(){
    revewElement.textContent = '';           
    let li = document.createElement('li');
    li.className = 'rpost';     
    let art = document.createElement('article'); 
    let h4 = document.createElement('h4');
    h4.textContent = currentTitleElement;      
    let p1 = document.createElement('p');
    p1.textContent = 'Category:' + ' ' + currentCategoryElement;
    let p2 = document.createElement('p');
    p2.textContent = 'Content:' + ' ' + currentPostContent;   
    art.appendChild(h4);  
    art.appendChild(p1);
    art.appendChild(p2);
    li.appendChild(art);
    published.appendChild(li);
    }
    function cleared(){
            published.textContent = '';
    }
}
   
   
   



 


  


