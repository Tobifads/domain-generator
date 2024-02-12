
function domainName(){
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let newArr= [];
    for (let i = 0; i< pronoun.length; i++){
        for (let j = 0; j< adj.length; j++ ){
            for (let k = 0; k< noun.length; k++){
                newArr.push(pronoun[i] + adj[j] + noun[k] + '.com');

            }
        }
    }

    return newArr

}


console.log(domainName());