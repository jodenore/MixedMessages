const draftScout = [
  "Burhan Ellwood",
  "Liam Pemberton",
  "Areeb Croft",
  "Zak Bean",
  "Archer York",
  "Priscilla Mcleod",
  "Harold Carney",
  "Jordan Tran",
  "Cinar Guthrie",
  "Abdi Cannon",
  "Marek Chambers",
  "Ubaid Lacey",
  "Cathal Monaghan",
  "Sidney Walsh",
  "Ishaq Klein",
  "Stan Evans",
  "Waseem Skinner",
  "Farhan Battle",
  "Terrell Rosario",
  "Tyson Gaines",
  "Sienna Hirst",
  "Jevan Blankenship",
  "Piotr Barnes",
  "Aron Drake",
  "Benedict Chase",
  "Dominic Richmond",
  "Maxwell Marshall",
  "Rhydian Ford",
  "Peyton Mohammed",
  "Herbie Colon",
];

let randomScout = draftScout[Math.floor(Math.random() * draftScout.length)];

const playerLocation = [
  "Duke",
  "Murray State",
  "Virginia ",
  "Vanderbilt",
  "North Carolina ",
  "Texas Tech",
  "Texas",
  "Limoges CSP France",
  "Gonzaga",
  "Kentucky",
  "Indiana ",
  "USC",
  "Georgia ",
  "Oregon",
  "Villanova",
  "Iowa",
  "Baylor",
  "New Zealand",
  "Memphis",
];

let randomLocation =
  playerLocation[Math.floor(Math.random() * playerLocation.length)];

const scoutSayings = ["says", "reports", "thinks", "expresses", "prediction"];

let randomSayings =
  scoutSayings[Math.floor(Math.random() * scoutSayings.length)];

const draftProspect = {
  _playerName: "",
  _currentLocation: "",
  _age: "",
  _ppg: 16,
  _skillSets: [
    "Versatile scorer",
    "Lethal spot-up shooter",
    "Elite ambidextrous shot blocker",
    "Bruising scorer",
    "Athletic rim protector",
    "Elite shooter",
    "Creative playmaker",
    "Consistent pick-and-roll defender",
    "3-and-D Wing",
    "Fearless shot-maker",
    "Impactful defender",
    "Floor general",
    "Pick-and Roll playmaker",
    "Spot-up 3-point shooter",
  ],
  _secondarySets: [
    "Interior Scoring",
    "Hustle",
    "Off-Ball Defense",
    "Ballhandling",
    "Athleticism",
    "Rebounding",
    "Playmaking",
  ],

  getSkillSet() {
    const randomSkill = this._skillSets[
      Math.floor(Math.random() * this._skillSets.length)
    ];
    return randomSkill;
  },
  getSecondSkill() {
    const randomSecondSkill = this._secondarySets[
      Math.floor(Math.random() * this._secondarySets.length)
    ];
    return randomSecondSkill;
  },
  getPlayerLocation() {
    const randomLocation =
      playerLocation[Math.floor(Math.random() * playerLocation.length)];
    return randomLocation;
  },

  getScoutOpinion() {
    let scoutOpinion;
    switch (this._ppg) {
      case 16:
        scoutOpinion =
          "which I think is very good this shows his ceiling for the league could be very high";
        break;

      default:
        break;
    }
    return scoutOpinion;
  },

  get name() {
    if (typeof playerName === "string") {
      return this._playerName;
    }
  },

  set name(playerName) {
    if (typeof playerName === "string") {
      this._playerName = playerName;
    } else {
      return false;
    }
  },

  get location() {
    if (typeof currentLocation === "string") {
      return this._currentLocation;
    } else {
      return false;
    }
  },

  set location(currentLocation) {
    if (typeof currentLocation === "string") {
      this._currentLocation = currentLocation;
    } else {
      return false;
    }
  },

  generateScoutReport() {
    console.log(
      `${randomScout} ${randomSayings}: ${
        this._playerName
      } is a ${this.getSkillSet()}. He Averaged ${this._ppg} at ${
        this._currentLocation
      } this season, ${this.getScoutOpinion()}.
     `
    );
  },

  willMakeNba() {
    let nbaReadyPer = "";
    if (this._ppg >= 15.5) {
      nbaReadyPer = "Lottery Pick";
    }
    return nbaReadyPer;
  },
};

const generateEligibleAge = (minA, maxA) => {
  minA = Math.ceil(minA);
  maxA = Math.floor(maxA);
  return Math.floor(Math.random() * (maxA - minA + 1)) + minA;
};

const generatePointsPerGame = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max) * 10;
  return Math.round(Math.random() * (max - min + 1 * 10) + min) / 10;
};

draftProspect.name = "Jalen Duren";
draftProspect._currentLocation = randomLocation;
draftProspect.generateScoutReport();
console.log(draftProspect.willMakeNba());
console.log(generateEligibleAge(18, 23));
