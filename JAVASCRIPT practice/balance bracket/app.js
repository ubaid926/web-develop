var bracket = "{[()]}"
function bracketsfunc(bracket) {
    var arr = []
    for (i = 0; i < bracket.length; i++) {
        if (bracket[i] == "{" || bracket[i] == "(" || bracket[i] == "[") {
            arr.push(bracket[i])
        }
        if (arr.length === 0) {
            return "not balance"
        }
        var chek
        switch (bracket[i]) {
            case ")":
                chek = arr.pop()
                if (chek === "{" || chek ==="[") {
                    return "not balance"
                }
                break;
            case "]":
                chek = arr.pop()
                if (chek === "{" || chek ==="(") {
                    return "not balance"
                }
                break;
            case "}":
                chek = arr.pop()
                if (chek === "(" || chek ==="[") {
                    return "not balance"
                }
                break;
        }
    }
}
var result=bracketsfunc(bracket)
if (result=="not balance"){
console.log(result)}
else{console.log("balance")}



