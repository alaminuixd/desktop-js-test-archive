/* // Simple useState implementation
const btn = document.getElementById("btn");
const result = document.getElementById("result");
function useState(initialValue) {
  let _state = initialValue;

  function getState() {
    return _state;
  }

  function setState(newValue) {
    _state = newValue;
    return _state;
  }

  return [getState, setState];
}

const [val, setVal] = useState(0);

result.innerText = `The current number is ${val()}`;

btn.addEventListener("click", (e) => {
  let incVal = val();
  result.innerText = `The current number is ${setVal(incVal + 1)}`;
});
 */

const btn = document.getElementById("btn");
const result = document.getElementById("result");

function useState(iniVal) {
  let _state = iniVal;
  function getState() {
    return _state;
  }
  function setState(newVal) {
    return (_state = newVal);
  }
  return [getState, setState];
}
const [val, setVal] = useState(0);

function incNum() {
  setVal(val() + 1);
  updateDOM(result);
}

function updateDOM(elm) {
  const message =
    val() <= 1 ? `You clicked ${val()} time.` : `You clicked ${val()} times.`;
  elm.innerText = message;
}

updateDOM(result);

btn.addEventListener("click", incNum);
