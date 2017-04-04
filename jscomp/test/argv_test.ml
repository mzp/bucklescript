

let anno_fun arg = Js.log arg 
let usage_msg = "Usage:\n";;
Arg.parse [] anno_fun usage_msg
