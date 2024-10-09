const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(driversArray, driver) {
  return driversArray.filter((name) => {
    return name.toLowerCase() === driver.toLowerCase();
  });
}

function fuzzyMatch(driversArray, driverString) {
  return driversArray.filter((name) => {
    return name.toLowerCase().startsWith(driverString.toLowerCase());
  });
}

const driversHometowns = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(driversObjectsInArray, driverString) {
  return driversObjectsInArray.filter((driver) => {
    return driver.name.toLowerCase() === driverString.toLowerCase();
  });
}
