"use strict";

var array = [4, 2, 7, 5, 9, -3, 10, 15, 45, 83, 128, -15, 95];
console.log("Original Array: " + array);
console.log("Original Array: " + array.length);

function swap(array, firstIndex, secondIndex){
	const temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

function partition(array, left, right) {
	var pivot   = array[Math.floor((right + left) / 2)],
		i       = left,
		j       = right;

	while (i <= j) {
		while (array[i] < pivot) {
			i++;
		}
		while (array[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(array, i, j);
			i++;
			j--;
		}
	}
	return i;
}

function quickSort(array, left, right) {
	var index;
	if (array.length > 1) {
		left = typeof left != "number" ? 0 : left;
		right = typeof right != "number" ? array.length - 1 : right;
		index = partition(array, left, right);
		if (left < index - 1) {
			quickSort(array, left, index - 1);
		}
		if (index < right) {
			quickSort(array, index, right);
		}
	}
	return array;
}

var result = quickSort(array);
console.log("Sorted Array: " + result);


// function quickSort(array, left, right) {
// 	var index;
// 	if (array.length > 1) {
// 		index = partition(array, left, right);
// 		if (left < index - 1) {
// 			quickSort(array, left, index - 1);
// 		}
// 		if (index < right) {
// 			quickSort(array, index, right);
// 		}
// 	}
// 	return array;
// }

// var result = quickSort(array, 0, array.length - 1);
// console.log("Sorted Array: " + result);