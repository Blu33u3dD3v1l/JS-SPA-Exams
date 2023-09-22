function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let addBtn = document.getElementById('add');
    let orangeArticle = document.getElementsByTagName('div')[4];
    let yellowArticle = document.getElementById('in-progress');
    let greenArticle = document.getElementsByTagName('div')[8];
    
    
    
     addBtn.type = 'button';
    addBtn.addEventListener('click', () =>{
 
        if(task.value == '' || description.value == '' || date.value == ''){
            return;
        }
        
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let p1 = document.createElement('p');

        h3.textContent = task.value;
        p.textContent = `Description: ${description.value}`;
        p1.textContent = `Due Date: ${date.value}`;

        let div1 = document.createElement('div');
        div1.className = 'flex';
        let startBtn = document.createElement('button');
        startBtn.className = 'green';
        startBtn.textContent = 'Start';
        let deletetBtn = document.createElement('button');
        deletetBtn.className = 'red';
        deletetBtn.textContent = 'Delete';
        div1.appendChild(startBtn);
        div1.appendChild(deletetBtn);

        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p1);
        article.appendChild(div1);
        orangeArticle.appendChild(article);


        startBtn.addEventListener('click', (e) => {

            let a = e.target.parentElement.parentElement;  
            startBtn.className = 'red';
            startBtn.textContent = 'Delete';
            deletetBtn.className = 'orange';
            deletetBtn.textContent = 'Finish';
            yellowArticle.appendChild(a);  

            startBtn.addEventListener('click', () => {
                article.remove();   
            });
            deletetBtn.addEventListener('click', (g) => {
                let b = g.target.parentElement.parentElement;
                greenArticle.appendChild(b);
                let toRemove = document.getElementsByClassName('flex');
                toRemove[toRemove.length - 1].remove();
            });
        });
            deletetBtn.addEventListener('click', () => {
            article.remove();
            });

    });
}
