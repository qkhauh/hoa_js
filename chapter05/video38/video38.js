const names = ["hoidanit", "eric", "bla bla", "nam", "nu"]

console.log("0 = ", names[0])
console.log("2 = ", names[2])

names[2] = "update name";

console.log("before", names)

names.push(true, 123)
names.unshift(null)

names.pop()
names.shift()
console.log("after", names)