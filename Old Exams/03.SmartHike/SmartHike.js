class SmartHike{
    constructor(userName){
       this.userName = userName;
       this.goals = {};
       this.listOFHikes = [];
       this.resources = 100;
    }
    addGoal(peak, altitude){
        if(this.goals[peak] === undefined){          
            this.goals[peak] = Number(altitude);                        
            return `You have successfully added a new goal - ${peak}`;             
        }       
        return (`${peak} has already been added to your goals`); 
    }
    hike(peak, time, difficultyLevel){
        
        if(this.goals[peak] == undefined){
                  throw new Error(`${peak} is not in your current goals`);
        }   
        else{
            if(this.resources == 0){
            throw new Error("You don't have enough resources to start the hike");
        }
        if(this.resources - time * 10 < 0){
            return "You don't have enough resources to complete the hike";
        }
            let currResurse = this.resources - time * 10;
             this.resources -= time * 10;
             let hike = {peak,time,difficultyLevel};
             this.listOFHikes.push(hike);
             return `You hiked ${peak} peak for ${time} hours and you have ${currResurse}% resources left`;
        }                   
    }
    rest(time){
        this.resources += time * 10;
        if(this.resources >= 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
          return `You have rested for ${time} hours and gained ${time*10}% resources`
    }
    showRecord(criteria){
      
        if(this.listOFHikes.length == 0){
            return `${this.userName} has not done any hiking yet`;
        }
        if(criteria == 'hard' || criteria == 'easy'){
          
            if(this.listOFHikes.some(x => x.difficultyLevel == criteria) == true){
                let a = [];
                a.push(this.listOFHikes.filter(x => x.difficultyLevel == criteria));
                return `${this.userName}'s best ${criteria} hike is ${a[0][0].peak} peak, for ${a[0][0].time} hours`               
            }          
            return `${this.userName} has not done any ${criteria} hiking yet`;
           
        }       
            let arr = [];
             arr.push("All hiking records:");
            this.listOFHikes.forEach(element => {
                   arr.push(`${this.userName} hiked ${element.peak} for ${element.time} hours`);
            });
            return arr.join("\n");       
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));





