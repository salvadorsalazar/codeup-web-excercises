"use strict";
// function returnInputAsOutput(input) {
//     return input;
// }
//
// function custom_assert(original_function, original_input, expected_output) {
//     var true_output = original_function(original_input);
//     return expected_output === true_output;
// }
//
// console.log(custom_assert(returnInputAsOutput, 'bob', 'bob'));

describe('sayHello',function()){

    it('should be a function',function())
    expect(typeof sayHello).toBe('function');

}



function sayHello(){
    return 'hello';
}