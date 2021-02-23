function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

// => to this executes right away.
(function () {
  console.log("A cozy nest is ready");
})();