// Good day Software Angels Technologies Team, below is my solution to the Junior Software Engineer Task

const express = require("express");

const app = express();

app.get("/calculateDisselUsageForDistance", (req, res) => {
  // function that calculates how much disel is consumed by the PeopleCar PasWagon C6 for a particular distance travelled in KM

  const distanceInKM = Number(req.query.distance);
  const carYearOfProduction = req.query.yearOfProduction;
  const carFuelUsagePer100KM = Number(req.query.fuelUsagePer100KM);

  let carFuelUsage;

  function calcFuelUsage(distanceTraveledInKM, fuelUsagePer100KM) {
    // using some cross multiplication I can calculate the amount of disel consumed by this car, from past information provided on how much disel it consumes per 100KM
    return ((distanceTraveledInKM * fuelUsagePer100KM) / 100).toString();
  }

  carFuelUsage = calcFuelUsage(distanceInKM, carFuelUsagePer100KM);

  res.send(carFuelUsage);
});

app.get("/probabilityOfUnitInjectorFail", (req, res) => {
  // function that returns a random percentage of the chance that the engine of the PeopleCar PasWagon C6 will fail
  const VIN = req.query.VIN;

  const randomPercentage = Math.floor(Math.random() * 101);

  function convertPercentageToRequiredFormat(percentage) {
    if (percentage === 0) {
      return "0";
    } else {
      return `0,${percentage}`; // convert percentage number to the required strinf format
    }
  }

  c6EngineFailProbability = convertPercentageToRequiredFormat(randomPercentage);

  res.send(c6EngineFailProbability);
});

app.listen(3000); // the app runs on http://localhost:3000

// Thank You, SAT Team.
// Adeyemo OlaOluwa
