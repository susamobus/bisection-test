var result = "Loading"
var accuracy = 0
var steps = 0
var arrow = 5
var x = 2
var y = 2
var a = ExpantaNum.div(y,2)

while (ExpantaNum.gt(ExpantaNum.arrow(a,arrow,x),y)) {
    steps = steps + 1
    a = ExpantaNum.div(a,2)
};

var b = ExpantaNum.mul(a,2)
var c = a

while (ExpantaNum.neq(ExpantaNum.div((ExpantaNum.add(a,b)),2),c)) {
    c = ExpantaNum.div((ExpantaNum.add(a,b)),2)
    steps = steps + 1
    if (ExpantaNum.lt(ExpantaNum.arrow(c,arrow,x),y)) {
        a = c
    } else {
        b = c
    }
};

result = c

accuracy = ExpantaNum.sub(y,ExpantaNum.arrow(c,arrow,x))

window.setInterval(function() {
    document.getElementById("result").innerHTML = result
    document.getElementById("steps").innerHTML = steps
    document.getElementById("accuracy").innerHTML = accuracy
},50)