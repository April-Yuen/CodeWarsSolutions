// Surface Area and Volume of a Box

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    let array = []
    let sa = 2*width * height + 2* height * depth + 2*width * depth
    array.push(sa)
    let volume = width*height*depth
    array.push(volume)
    return array
  }