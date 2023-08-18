// - Hexadecimal escape sequences=> '\x7A'
// - unicode escape sequences => '\u007A'


const ch1 = '\x7A';
console.log("Hexadecimal char ", ch1);  //z

const ch2 = '\u007A';
console.log("unicode char ", ch2);  //z

if('\x7A' == '\u007A'){
    console.log("Yes");
}