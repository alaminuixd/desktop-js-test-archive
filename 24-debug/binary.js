function binary(division, result = "") {
  /*   let division = 0;
  let result = ""; */
  if (division <= 0) {
    return result;
  }

  result = (233 % 2) + result;
  division = Math.floor(233 / 2);

  result = (division % 2) + result;
  division = Math.floor(division / 2);

  result = (division % 2) + result;
  division = Math.floor(division / 2);

  result = (division % 2) + result;
  division = Math.floor(division / 2);

  result = (division % 2) + result;
  division = Math.floor(division / 2);

  result = (division % 2) + result;
  division = Math.floor(division / 2);

  result = (division % 2) + result;
  division = Math.floor(division / 2);

  result = (division % 2) + result;
  division = Math.floor(division / 2);

  console.log("divistion: " + division);
  console.log(result);
}

binary();
