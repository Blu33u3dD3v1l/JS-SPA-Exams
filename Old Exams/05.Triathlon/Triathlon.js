class Triathlon{
    constructor(competitionName){
     this.competitionName = competitionName;
     this.participants = {};
     this.listOfFinalists = [];       
    }
    addParticipant(participantName, participantGender){
       if(!this.participants.hasOwnProperty(participantName)){
           this.participants[participantName] = participantGender;
           return `A new participant has been added - ${participantName}`;
       }     
        return `${participantName} has already been added to the list`;               
    }
    completeness(participantName, condition){
        if(!this.participants.hasOwnProperty(participantName)){
           throw new Error(`${participantName} is not in the current participants list`);
        }        
        if(condition < 30){
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        if(condition / 30 < 2 && console / 30 >= 1){
            return `${participantName} could only complete 1 of the disciplines`;
        }
        if((condition / 30 < 3) && condition / 30 >= 2){
            return `${participantName} could only complete 2 of the disciplines`;
        }          
            let gend = this.participants[participantName];
            let partic = {participantName,gend};
            this.listOfFinalists.push(partic);             
             return `Congratulations, ${participantName} finished the whole competition`;           
               
    }
    rewarding(participantName){
      if(!this.listOfFinalists.some(x => x.participantName == participantName)){
           return `${participantName} is not in the current finalists list`;
        }     
           return `${participantName} was rewarded with a trophy for his performance`;          
    }
    showRecord(criteria){
        
         if(this.listOfFinalists.length == 0){
            return `There are no finalists in this competition`;
         }
         else{
             
             if(!this.listOfFinalists.some(x => x.gend == criteria) && criteria !== 'all'){
                return `There are no ${criteria}'s that finished the competition`;
             }
             if(criteria == 'male' || criteria == 'female'){
                let first = this.listOfFinalists.find(x => x.gend == criteria);             
                return `${first.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
             }            
                let result = [];
                result.push(`List of all ${this.competitionName} finalists:`);
                this.listOfFinalists.sort().forEach(element => {
                    result.push(element.participantName);
                });
                return result.join('\n');            
        }
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));







