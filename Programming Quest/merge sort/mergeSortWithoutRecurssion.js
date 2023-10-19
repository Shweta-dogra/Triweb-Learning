function mergeSort(array) {
    const subarrays = [];
  
    for (let i = 0; i < array.length; i++) {
      subarrays.push([array[i]]);
    }
  
    while (subarrays.length > 1) {
      const left = subarrays.pop();
      const right = subarrays.pop();
  
      const merged = merge(left, right);
      subarrays.push(merged);
    }
  
    return subarrays[0];
  }
  
  function merge(left, right) {
    const res = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) res.push(left.shift());
      else res.push(right.shift());
    }
    return [...res, ...left, ...right];
  }


var arr = [ 12, 11, 13, 5, 6, 7 ];
    var n = arr.length;
 
    console.log(  "Given array: ");
    console.log(arr);
 
    let sortedArr = mergeSort(arr);
 
    console.log( "Sorted array: ");
    console.log(sortedArr);