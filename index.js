function generer() {
    let choses = ["le hamster", "le dromadaire", "le chameau", "le lion", "le poisson", "l'ours", "l'ornithorynque", "la loutre", "le chômeur", "le BB-8", "la table", "la chaise", "le lit", "le téléphone"]
    let situations = ["dans la roue", "dans le desert", "dans l'eau", "sur Twitter", "du troisième âge", "qui mange des pâtes", "dans sa chambre", "riche", "pauvre", "du coin", "qui doit arrêter de trainer sur des sites stupides comme <a href='https://phrasedemotivation.gougoule.ch'>celui-ci</a>"]
    const un = parseInt(Math.random() * choses.length)
    const deux = parseInt(Math.random() * choses.length)
    const trois = parseInt(Math.random() * situations.length)
    const quatre = parseInt(Math.random() * situations.length)
    const encoreUn = `${choses[un]} ${situations[trois]}`
    const encoreDeux = `${choses[deux]} ${situations[quatre]}`
    document.getElementById("un").innerHTML = encoreUn
    document.getElementById("deux").innerHTML = encoreDeux
}

function partager() {
    let phrase = `Est-ce que tu préfères être ${document.getElementById("un").innerHTML} ou ${document.getElementById("deux").innerHTML} ?`
    console.log(phrase)
    if (navigator.share) {
        navigator.share({
          title: document.title,
          text: phrase,
          url: window.location.href
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing:', error));
    
    }
    else {
        tweeter()
    }
}

function tweeter() {
    let phrase = `Est-ce que tu préfères être ${document.getElementById("un").innerHTML} ou ${document.getElementById("deux").innerHTML} ?`
    console.log(phrase)
    window.open(`https://twitter.com/intent/tweet?url=https://phrasedemotivation.gougoule.ch&text=${phrase}`)
}