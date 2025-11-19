음.

console.log(JSON);
console.log(JSON[Symbol.toStringTag]);
ㄴ이런식으로
ㄴ찍으면
ㄴ잡힘.!!!
ㄴ그리고
ㄴ그안에서
JSON {Symbol(Symbol.toStringTag): 'JSON', parse: ƒ, stringify: ƒ, rawJSON: ƒ, isRawJSON: ƒ}
isRawJSON: ƒ isRawJSON()
parse: ƒ parse()
rawJSON: ƒ rawJSON()
stringify: ƒ stringify()
Symbol(Symbol.toStringTag): "JSON"
[[Prototype]]: Object
ㄴ이런식으로
ㄴ잡힘.
ㄴㄱㄱ.
ㄴ속성
ㄴ맞긴한듯함.
ㄴㄱㄱ.

근데.
console.log(JSON[Symbol(Symbol.toStringTag)]);
ㄴ이렇게
ㄴ가버리면.
ㄴ여기는
ㄴ안잡힘.!!!
ㄴ끊김.
ㄴ이게
ㄴ상속받아서
ㄴ그래서
ㄴ오버라이딩이듯해서
ㄴ가는듯함.
#
아...
ㄴ되게
ㄴ애매하다.
ㄴ상속받은거같은데.
ㄴ여기서의
ㄴproperties
ㄴ맞기도해서.
그리고
ㄴ영문MDN >> 한글MDN
ㄴ한글
ㄴ누군가
ㄴ작업한건데.
ㄴ뭔가
ㄴ어설픔.
ㄴ걍.
ㄴ나사빠지듯.
ㄴ뭔가
ㄴ하나둘
ㄴ다빠져있음.
ㄴ비최적.
정해보자.
ㄴ넣냐vs.마냐
