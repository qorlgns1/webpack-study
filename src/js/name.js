import * as _ from "lodash";

let minLen = 2;

function isValid() {
  console.log("_", _);
  console.log("name", name);

  return _.trim(name).length >= minLen;
}

export default {
  isValid,
};
