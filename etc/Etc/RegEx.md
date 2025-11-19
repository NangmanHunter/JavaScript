
let regex = new RegExp(/w+/);  
test=regex.test('item');
console.log(test);


let regex = new RegExp('\\w+');  
let regex = new RegExp(`\\w+`);  
test=regex.test('item');
console.log(test);


let variable=className;
let pattern=`ㄴ${variable}.\\w+()`;
let regex = new RegExp(pattern);  
test=regex.test(item);
console.log(test);


#
item==`ㄴ${className}()`


let variable=className;
let pattern=`ㄴ${variable}()`;
let regType01 = new RegExp(pattern);  
test=regType01.test(item);

let variable=className;
let regType02 = new RegExp(`ㄴ${variable}.\\w+()`);  
test=regType02.test(item);


let regType02 = new RegExp(`ㄴ${className}.\\w+()`);  
test=regType02.test(item);

#
let regType01 = new RegExp(`^ㄴ${className}\\(\\)$`);  

()
\\()
\\(\\)
