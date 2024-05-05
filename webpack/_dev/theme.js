function num() {
  return (25 + 25);
}

function test () {
  let test = result();
  if (test === '100' ) {
    return "Is Boolean";
  }
  else {
    return "Is Not";
  }
}

function result() {
  let some =  num() * 10 / 10;

  if (some > 80)  {
    return "100";
  }
  else {
    return "200";
  }
}

parent.onmouseout = function(event) {
  /* event.target: parent element */
};
parent.onmouseover = function(event) {
  /* event.target: child element (bubbled) */
};
