//eksempel på en enkeltperson og vanlig måte å bruke objekter i javaskript.

const person = {
    navn: "Ola",
    fodeoaar: 1982,
    etternavn: "Olsen"
}

// vi får tilgang til person slik
// legg merke til at variabelen person etter fulgt av punktum gir tilgang på
// en underliggende verdi i objektet. 
console.log(person.navn, person.fodeaar, person.etternavn);

//dette skriver ut hele objektet slik som vi lagret det.
console.log(person)

let navn="geir"
// Literal objects kan også ha metoder tilknyttet seg. En metode er en funksjon som er tilknyttet et objekt
const person2 = {
    navn: "Kari",
    fodeaar: 1990,
    etternavn: "Fredheim",
    
    // toString metoden er fast i mange programeringsspråk og er en tekstreng representasjon av et objekt.
    // for å referere til variabler i et literal objekt må du bruke 'this' foran variabelen
    // 'this' indikerer at du forholder deg til OBJEKTET sin variabel, så det er viktig!
    toString: function() {
        return `${this.navn} ${this.etternavn} født: ${this.fodeaar} og er ${this.getAge()}år gammel`
    },
    getAge: function() {
        const d = new Date();
        return d.getFullYear() - this.fodeaar;
    }, 
    getFullName: function() {
        return `${this.navn} ${this.etternavn}`
    }
}

//vi kan nå bruke person2 sin toString metode for å skrive ut invo om objektet.
console.log(person2.toString());

// men hva nå om du vil lage fire personer? Skal vi virkelig skrive de samme funskjonene fire ganger? En gang for hver gang vi oppretter et objekt?
// Isåfall bryter vi med D.R.Y. prinsippet, så vi kan heller lage en "Factory metdode" som oppretter objektet for oss, og som hånderer alt det repetitive

const personFactory = (navn, etternavn, fodeaar) => {
    return {
        navn,
        etternavn, 
        fodeaar,
        toString: function() {
            return `${this.navn} ${this.etternavn} født: ${this.fodeaar} og er ${this.getAge()}år gammel`
        },
        getAge: function() {
            const d = new Date();
            //MERK! Ikke this inne i funksjonen
            return d.getFullYear() - this.fodeaar;
        }, 
        getFullName: function() {
            return `${this.navn} ${this.etternavn}`
        }
    }
}

// legg merke til at du ikke trenger å skrive navn: navn, etternavn:etternavn osv.. i ES6 forstår javaskript at det er det du mener. 
// alt du trenger å gjøre er å gi paramterne dine samme navn som objektet sine attributter.
// med den nye funksjonen kan vi opprette nye personer mye lettere.

const person3 = personFactory('geir', 'hilmersen', 1979);
const person4 = personFactory('sigrid', 'gurandsrud', 1995);
const person5 = personFactory('Halvard', 'Flatland', 1945);

console.log(person3.toString());
console.log(person4.toString());
console.log(person5.toString());
