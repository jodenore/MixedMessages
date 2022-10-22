const getRandomArray = (arr) => {
  let randArr = arr[Math.floor(Math.random() * arr.length)];
  return randArr;
};
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

const playerLocation = [
  "Duke",
  "Murray State",
  "Virginia",
  "Vanderbilt",
  "North Carolina",
  "Texas Tech",
  "Texas",
  "Limoges CSP France",
  "Gonzaga",
  "Kentucky",
  "Indiana",
  "USC",
  "Georgia",
  "Oregon",
  "Villanova",
  "Iowa",
  "Baylor",
  "New Zealand",
  "Memphis",
];

const scoutSayings = ["says", "reports", "thinks", "expresses", "prediction"];

const draftProspect = {
  _playerName: "",
  _currentLocation: "",
  _age: "",
  _ppg: 0,
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
    switch (true) {
      case this._ppg > 19:
        scoutOpinion =
          "which shows how gifted at scoring and has the ceiling to be one of the league's best superstars";
        break;
      case this._ppg <= 19 && this._ppg > 15:
        scoutOpinion =
          "which shows his ceiling could be an consistent starter for teams in the league";
        break;
      case this._ppg <= 15 && this._ppg > 13:
        scoutOpinion =
          "meaning he can create shots and score while being an sixth man or bench player";
        break;
      case this._ppg <= 13 && this._ppg > 10:
        scoutOpinion =
          "to me personally shows he can score points when needed but not on a consistent basis";
        break;
      case this._ppg <= 10 && this._ppg > 8:
        scoutOpinion =
          "which proves to me that he has the talents to score but isn't very confident at doing that";
        break;
      case this._ppg <= 8 && this._ppg > 5:
        scoutOpinion =
          "This is very bad due to the fact he showed signs of consistent signs of scoring in Div 1";
        break;

      case this._ppg <= 5 && this._ppg >= 0:
        scoutOpinion = `${this._playerName} clearly struggled at ${this._currentLocation} this season. Very raw prospect`;
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
      this._currentLocation = currentLocation.toUpperCase;
    } else {
      return false;
    }
  },

  get eligibleAge() {
    if (typeof draftAge === "string") {
      return this._age;
    } else {
      return false;
    }
  },

  set eligibleAge(draftAge) {
    if (typeof draftAge === "string") {
      this._age = draftAge;
    } else {
      return false;
    }
  },

  get pointsPerGame() {
    if (typeof ppg === "number") {
      return this._ppg;
    } else {
      return false;
    }
  },

  set pointsPerGame(ppg) {
    if (typeof ppg === "number") {
      this._ppg = ppg;
    } else {
      return false;
    }
  },

  generateScoutReport() {
    if (this._playerName && this._age && this._ppg) {
      console.log(
        `${getRandomArray(draftScout)} ${getRandomArray(scoutSayings)}: ${
          this._playerName
        } is a ${this.getSkillSet()}. He is only ${
          this._age
        } years old and tends to use his ${this.getSecondSkill()} a lot in games. He Averaged ${
          this._ppg
        } points at ${
          this._currentLocation
        } this season, ${this.getScoutOpinion()}.
     `
      );
    } else {
      console.log("Missing information on prospect");
    }
  },

  willMakeNba() {
    let nbaReadyPer = "Draft Projection: ";
    switch (true) {
      case this._ppg > 20:
        nbaReadyPer += "Lottery Pick";
        break;
      case this._ppg < 20 && this._ppg >= 15:
        nbaReadyPer += "Top 10 Pick";
        break;
      case this._ppg < 15 && this._ppg >= 9:
        nbaReadyPer += "Late 1st Round Pick";
        break;
      case this._ppg < 8 && this._ppg >= 6:
        nbaReadyPer += "2nd Round Pick";
        break;

      case this._ppg < 5 && this._ppg >= 0:
        nbaReadyPer += "Undrafted / G-League";
        break;
      default:
        nbaReadyPer += "Out Of League";
        break;
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
draftProspect._currentLocation = getRandomArray(playerLocation);
draftProspect._age = generateEligibleAge(18, 23);
draftProspect._ppg = 19.9;
draftProspect.generateScoutReport();
console.log(draftProspect.willMakeNba());
console.log(generateEligibleAge(18, 23));
