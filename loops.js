function forLoop(array) {
<<<<<<< HEAD
  for (var i=0; i<25;i++) {
    if (i===1) {
      array.push(`I am ${i} strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 || maybeTrue())

  return array
=======
  for (let i = 0; i < 25; i++) {
    console.log()
 }
>>>>>>> 249125b46d6669600e8098a094b3dae263aa0086
}