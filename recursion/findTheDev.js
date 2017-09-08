let devs = [
  {id: "bluto",
    fullname: "Bluto Brutus",
    profession: "Software Engineer",
    company: "Blutos blutos",
    technology: "JavaScript",
    tech2: "AngularJS"},
  {id: "fred",
    fullname: "Fred Flintstone",
    profession: "Software Developer",
    company: "Walawala, Inc",
    technology: "Java",
    tech2: "Go"},
  {id: "george",
    fullname: "George Jetson",
    profession: "Software Developer",
    company: "Juko",
    technology: "Java",
    tech2: "COBOL"},
  {id: "herman",
    fullname: "Herman Munster",
    profession: "Software Engineer",
    company: "Number A Widgets",
    technology: "JavaScript",
    tech2: "AngularJS"},
  {id: "barney",
    fullname: "Barney Fife",
    profession: "Software Developer",
    company: "Boom Chaka Laka Co",
    technology: "Java",
    tech2: "SQL"},
  {id: "red",
    fullname: "Red French",
    profession: "Software Developer",
    company: "TN Farm Bureau",
    technology: "JavaScript",
    tech2: "Angular 2"},
  {id: "dean",
    fullname: "Dean Martin",
    profession: "FronSoftware Engineer",
    company: "Choo Choo Tobacco",
    technology: "JavaScript",
    tech2: "React"},
  {id: "lil joe",
    fullname: "Joe Cartwright",
    profession: "Back-End Programmer",
    company: "ZZZ Pillows",
    technology: "COBOL",
      tech2: "DB2"}
];

const findTheDev = {
  'locate': (devs, technology) => {
    let devObj = {};
  devs
    .filter(dev => dev.technology === technology)
    .forEach(dev => {
      devObj[dev.id] = findTheDev.locate(devs, dev.tech2)
      devObj[dev.id]['fullname'] = dev.fullname
      devObj[dev.id]['primary'] = dev.technology
      devObj[dev.id]['secondary'] = dev.tech2
    })
    return devObj
  }
}

// console.log(JSON.stringify(findTheDev.locate(devs, "JavaScript"), null, 2));

const ngDevs = findTheDev.locate(devs, "JavaScript");
// console.log(ngDevs);

Object.keys(ngDevs).forEach(key => {
  console.log(ngDevs[key].fullname + ": " + ngDevs[key].secondary);
})
