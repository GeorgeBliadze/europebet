//1
console.log(numJewelsInStones("aA","aAAbbb"))

function numJewelsInStones(jewels, stones) {
    let count=0
    for(let stone of stones){
       if(jewels.includes(stone))
          count++
    }

    return count
}

//2

console.log(isValid("()[]{{"))

function isValid(s) {
    let stack = [];
    for (let ch of s) {
        if (ch == '(' || ch == '[' || ch == '{') {
            stack.push(ch);
        }
        else {
            let tmp = stack.pop();
            switch (ch) {
                case ')':
                    if (tmp != '(')
                        return false;
                    break;
                case ']':
                    if (tmp != '[')
                        return false;
                    break;
                case '}':
                    if (tmp != '{')
                        return false;
                    break;
                default:
                    return false;
            }
        }
    }
    return stack.length == 0;
}