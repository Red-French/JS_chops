const devs = [
  {
    "id": "red",
    "name": "Red French",
    "profession": "Software Developer",
    "company": "TN Farm Bureau",
    "technology": [
      {"primaryLanguage": "JavaScript"},
      {"otherTech":
        [
          "TypeScript",
          "Angular",
          "jQuery",
          "MEAN stack",
          "Java",
          "Hybrid development"
        ]
      }
    ],
    "onlineIdentity": {
        "MySite": "http://www.redfrench.net",
        "LinkedIn": "https://www.linkedin.com/in/red-french",
        "GitHub": "https://github.com/Red-French"
    },
    "sampleProjects": [
        {"hybrid":  "http://homtabl-app.herokuapp.com/"},
        {"java": "https://github.com/Red-French/HeadKnocker"},
        {"android": "https://github.com/Red-French/ScheduleIt"}
    ]
  },
  {
    "id": "red",
    "name": "Peter Falk",
    "profession": "Programmer",
    "company": "Dept of TN",
    "technology": [
      {"primaryLanguage": "JavaScript"},
      {"otherTech":
        [
          "COBOL",
          "Pascal",
          "React",
          "PHP"
        ]
      }
    ],
    "onlineIdentity": {
        "MySite": "http://www.somefakesite.com"
    }
  },
  {
    "id": "red",
    "name": "Bluto Brutus",
    "profession": "Software Developer",
    "company": "HCA",
    "technology": [
      {"primaryLanguage": "JavaScript"},
      {"otherTech":
        [
          ".NET",
          "Go",
          "R",
          "Angular",
          "Swift"
        ]
      }
    ],
    "onlineIdentity": {
        "MySite": "http://www.blahblah.biz"
    }
  }
]

let jsDev = [];
const findTheDev = {
  'locate': (devs, tech1, tech2) => {

  devs
    .filter(dev => dev.technology[0].primaryLanguage === tech1
    )
    .forEach(dev => {
      dev.technology[1].otherTech.forEach((el) => {
        if (el === tech2) {
          jsDev.push(dev);
        }
      })
    })
    return jsDev
  }
}

JSON.stringify(findTheDev.locate(devs, "JavaScript", "Angular"), null, 2);

jsDev.forEach((dev) => {
  console.log(dev.name);
})
