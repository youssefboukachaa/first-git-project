const arr = [64, 25, 12, 22, 11];
console.log("Original array: " + arr);
let n = arr.length;
let min;
for (let i = 0; i < n - 1; i++) {
    min = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    } if (min !== i) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}

console.log("After sorting: " + arr);
