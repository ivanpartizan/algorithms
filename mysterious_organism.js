// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, arrayOfBases) => {
  return {
    specimenNum: number,
    dna: arrayOfBases,
    mutate() {
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let randomBase = returnRandBase();
      while (this.dna[randomIndex] === randomBase) {
        randomBase = returnRandBase();
      }
      this.dna[randomIndex] = randomBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          identicalBases++;
        }
        let percentage = (identicalBases / this.dna.length) * 100;
        return percentage;
      }
    },
    willLikelySurvive() {
      let CbaseGbase = 0;
      this.dna.forEach((base) => {
        if (base === "C" || base === "G") {
          CbaseGbase++;
        }
        let CorGpercentage = (CbaseGbase / this.dna.length) * 100;
      });
      CorGpercentage > 60 ? true : false;
    },
    complementStrand() {
      let complement = [];
      this.dna.forEach((strand) => {
        switch (strand) {
          case "A":
            complement.push("T");
            break;
          case "T":
            complement.push("A");
            break;
          case "C":
            complement.push("G");
            break;
          case "G":
            complement.push("C");
            break;
        }
      });
    },
  };
};

const setup = () => {
  let sampleSet = [];
  let sampleIndex = 1;
  while (sampleSet.length < 30) {
    let currentSample = pAequorFactory(sampleIndex, mockUpStrand());
    if (currentSample.willLikelySurvive()) {
      sampleSet.push(currentSample);
    }
    sampleIndex++;
  }
  return sampleSet;
};
