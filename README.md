# react_basic 처음으로 배워보는 리엑트

## react00
react 설치, 연결 및 첫 실행!  
https://tae-seokyoung.tistory.com/57?category=1024100  
  
## react01
UI 라이브러리인 REACT  
component : 파일을 따로따로 쓴다. (header, main, footer 페이지들 ) 이를 통해 모듈화가 가능하다.   
props : 객체이며 데이터를 전달한다.  
fragments : <React.Fragment> 또는 <></> 태그생성하지 않고 부모요소 1개로 싸줄 수 있는 방법.    
https://tae-seokyoung.tistory.com/56  
  
## react02  
react에서는 a태그를 대체하여 다른 것을 사용한다.
컴포넌트(ex <App />) 자체에 스타일 을 주는 것이 안된다. (하위 태그에게 줘야 한다)
export default function Header(props){ } 로 사용하는 방법
header 가 가진  attribute(속성) > react에서는 property (자바스크립트 객체가 가지고 있어서)