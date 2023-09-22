function solve() {
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let email = document.getElementById('email');
let birth = document.getElementById('birth');
let position = document.getElementById('position');
let salary = document.getElementById('salary');
let hireButton = document.getElementById('add-worker');
hireButton.type = 'button';





let rp = 0.00;
hireButton.addEventListener('click', function (){

           let t1 = document.createElement('td');
           let t2 = document.createElement('td');
           let t3 = document.createElement('td');
           let t4 = document.createElement('td');
           let t5 = document.createElement('td');
           let t6 = document.createElement('td');           
           let t7 = document.createElement('td');       
           t1.textContent = firstName.value;
           t2.textContent = lastName.value;
           t3.textContent = email.value;
           t4.textContent = birth.value;
           t5.textContent = position.value;
           t6.textContent = Number(salary.value);  
           let firedButton = document.createElement('button');
           let editButton = document.createElement('button');          
           firedButton.className = 'fired';
           firedButton.textContent = 'Fired';
           firedButton.type = 'button';         
           editButton.className = 'edit';
           editButton.textContent = 'Edit';
           editButton.type = 'button';
           t7.appendChild(editButton);
           t7.appendChild(firedButton);                        
           let tr = document.createElement('tr');
           tr.appendChild(t1);
           tr.appendChild(t2);
           tr.appendChild(t3);
           tr.appendChild(t4);
           tr.appendChild(t5);
           tr.appendChild(t6);           
           tr.appendChild(t7);
          
           let tbody = document.createElement('tbody');
           tbody.id = 'tbody';
           tbody.appendChild(tr);
           let table = document.createElement('table');
           table.appendChild(tbody);
           let div = document.createElement('div');
           div.className = 'tbl-content';
           div.appendChild(table);
           let a = document.querySelector('.tbl-header');
           a.appendChild(div);  
           let sum = document.getElementById('sum');        
           rp += Number(salary.value);
           sum.textContent = rp.toFixed(2);    
           firstName.value = '';
           lastName.value = '';           
           email.value = '';
           birth.value = '';
           position.value = '';
           salary.value = '';
           
           editButton.addEventListener('click', function(){
            let sum = document.getElementById('sum');  
            console.log(sum.textContent)
            rp -= Number(t6.textContent);   
            sum.textContent = rp.toFixed(2);
            firstName.value = t1.textContent;
            lastName.value = t2.textContent;           
            email.value = t3.textContent;
            birth.value = t4.textContent;
            position.value = t5.textContent;
            salary.value = t6.textContent;
            tbody.remove();
           });
           firedButton.addEventListener('click', function(){
            let sum = document.getElementById('sum');  
            console.log(sum.textContent)
            rp -= Number(t6.textContent);   
            sum.textContent = rp.toFixed(2);
            tbody.remove();

           });

});
}
solve();