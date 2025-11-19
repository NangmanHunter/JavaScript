# 엄밀
prototype▶클래스-설계도
instance ▶객체
# 같음
결국
ㄴ같음.
ㄴ자체는다르나.
ㄴ표현함에있어.
ㄴ특히
ㄴ분류에있어
ㄴ당해
ㄴ실제사용에있어
ㄴString.prototype
ㄴ형식아닌.
ㄴstr=``;
ㄴ선언후.
ㄴ여기서.
ㄴ.replace()
ㄴ이런형태로감.
#
설계관점▶String.prototype.replace()
실제관점▶string.replace()
#
실제관점▶string.replace()
실제관점▶인스턴스.replace()
실제관점▶instance.replace()
실제관점▶new.replace()

#
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};
#
const person1 = new Person("John", 30);
person1.greet(); 


# 일원
통합화
ㄴ통합.
ㄴ일원화.
ㄴ일원.
ㄴ공통화.
ㄴ공통.
ㄴ최적화.
ㄴㄱㄱ.!!!
정해보자.
ㄴ음.
ㄴ설계자체는
ㄴ.prototype이맞음.
ㄴ그러나.
ㄴ음.
ㄴ실사용은
ㄴinstance식.
ㄴnew식.
ㄴ소문자처리.

음.
ㄴ다시보면
ㄴ설게관점은
ㄴ확실히
ㄴprototype쪽이
ㄴ맞나봄.
ㄴ엄밀히는.
그러나
ㄴ실제씀에는.
ㄴ비직감적임.
ㄴ길어짐.
ㄴ축약형>>길어짐.
같은용어.
ㄴ동일용어.
ㄴ택일>>부가.
ㄴ택일>>중첩.
ㄴ택일>>병렬.
나머지
ㄴ숨김처리
ㄴ혹은연관처리.
ㄴ부연처리.
ㄴ관계처리.


# 소문자
소문자.
ㄴinstance
ㄴnew
ㄴprototype
ㄴ.prototype
ㄴclass-대문자
ㄴ객체-소문자
String↔string
String↔String.prototype

다른게아니라
ㄴ인스턴스
ㄴ인스턴스속성
ㄴ인스턴스메소드
ㄴ줄줄이다길어짐.
ㄴ걍.
ㄴ숨김처리.
ㄴ이런걸로가고.
ㄴ걍.
ㄴ축약형.
ㄴ혹은
ㄴ대칭형.
ㄴ유관형.
ㄴ이런식으로ㄱㄱ.!!!
#
String.prototype↔string
string↔String.prototype
string>>String.prototype
# 택일결론
instance▶소문자
ㄴ줄일말ㄴㄴ.
ㄴ줄임말
ㄴ혼선올수있음.
ㄴ특히
ㄴ규칙성이더없음.
클래스명
ㄴ무조건
ㄴ대문자임.
ㄴ그렇다면
ㄴ대문자에따른
ㄴ인스턴스
ㄴ걍
ㄴ소문자로ㄱㄱ.!!!
ㄴ무조건ㄱㄱ.
ㄴ암묵적합의로ㄱㄱ.
ㄴ암묵적규칙으로ㄱㄱ.
최적화.
ㄴ단순성.
ㄴ단순규칙성.
ㄴ규칙성.
ㄴ규칙화.
ㄴ이것으로부터기인.
그렇다면
ㄴ클래스-객체
ㄴ대문자-소문자
ㄴ이들관계로
ㄴ단번에
ㄴ아주간단히
ㄴ아주간략히
ㄴㄱㄱ.
ㄴ최적화
ㄴ바로도달ㄱㄱ.!!!

#  
규격화
ㄴ통일화
ㄴ동일화
ㄴString.prototype▶string
ㄴResponse. ... ▶response. ...
ㄴResponse인스턴스부분
#
오.
ㄴ이러면
ㄴ더좋은게.
ㄴ인스턴스
ㄴ:length
ㄴ이부분
ㄴ계속애매했음.
그러나
ㄴ이조차도
ㄴ단번에
ㄴ싹.
ㄴ인스턴스
ㄴ소문자.
ㄴ이걸로
ㄴ단번에
ㄴ딱잡힘.!!!
ㄴㅎㅎㅎㅎㅎ.
ㄴ나이수.
ㄴ이거구만.ㅎㅎㅎ.
ㄴㄱㄱ.!!!

# 결론
instance
ㄴprototype
ㄴ비줄임말.
ㄴ소문자.