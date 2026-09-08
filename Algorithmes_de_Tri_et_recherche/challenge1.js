let n = [2, 1, 6, 9, 77]
for (var i = 0; i < n.length; i++) {
    for (var j = 0; j < (n.length - i - 1); j++) {
        if (n[j] > n[j + 1]) {
            var temp = n[j]
            n[j] = n[j + 1]
            n[j + 1] = temp
        }
    }
}
console.log(n);
