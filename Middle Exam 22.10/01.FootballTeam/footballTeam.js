class footballTeam{
    
    constructor(clubName,country){
        this.clubName = clubName;
        this.country = country;
        this.invlitedPlayers = [];
    }

    newAdditions(footballPlayers){
                 footballPlayers.forEach(footballPlayer => {
                   let [name, age, playerValue] = footballPlayer.split('/');
                   let currPlayer = this.invlitedPlayers.find(x => x.name == name);
                   if(!currPlayer){
                    this.invlitedPlayers.push({
                        name,
                        age: Number(age),
                        playerValue: Number(playerValue)
                    })
                   }else{
                    if(currPlayer.playerValue < playerValue){
                        currPlayer.playerValue = playerValue;
                    }                  
                   }
                 });
                 let result = [];
                 this.invlitedPlayers.forEach(player => result.push(player.name));
                 return `You successfully invite ${result.join(', ')}.`;
    }
    signContract (selectedPlayer){
        let theIndex = 0;
        let playersName = '';
        let age = 0;
        for (let index = 0; index < selectedPlayer.length; index++) {            
            if(selectedPlayer[index] == '/'){
                theIndex = index;
            }
            playersName = selectedPlayer.substring(0,theIndex);
            age = selectedPlayer.substring(theIndex + 1,selectedPlayer.length)

        }
        let currPlayer = this.invlitedPlayers.find(x => x.name == playersName)
        if(!currPlayer){
            throw new Error(`${playersName} is not invited to the selection list!`);
        }
        else{
            if(currPlayer.playerValue > age){
                      let area = currPlayer.playerValue - age;
                throw new Error(`The manager's offer is not enough to sign a contract with ${playersName}, ${area} million more are needed to sign the contract!`);
            }
            else{
                currPlayer.playerValue = 'Bought';
                return `Congratulations! You sign a contract with ${playersName} for ${age} million dollars.`;
            }
        }
    }
    ageLimit(name, age){
       
        let currPlayer = this.invlitedPlayers.find(x => x.name == name);       
        if(!currPlayer){
            throw new Error(`${name} is not invited to the selection list!`);
        }
        else{
            if(currPlayer.age < age){            
                if(age - currPlayer.age < 5){
                    return `${name} will sign a contract for ${age - currPlayer.age} years with ${this.clubName} in ${this.country}!`;
                }
                if(age - currPlayer.age > 5){
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                }
            }
            else{
                return `${name} is above age limit!`;
            }
           
        }
     
    }
    transferWindowResult(){
        let result = [];
        result.push("Players list:");
        this.invlitedPlayers.sort((a, b) => b.name - a.name).forEach(element => {
            result.push(`Player ${element.name}-${element.playerValue}`);
        });
        return result.join('\n');
    }

    

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());










