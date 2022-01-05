let num = [5,8,4]
num.push(7)
num.sort()
/*
for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
*/

for(let pos in num) {
    console.log(num[pos])
}

ind = num.indexOf(10)
console.log(ind)


