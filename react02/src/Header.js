export default function Header(props) {
    return (
        <>
            <div style={props.style}>
                {props.name} 는 {props.age} 살이다.
            </div>

        </>
    )
}

//export를 바로 합쳐서 사용하기도 한다.
//header 가 가진 어트리뷰트(속성) > 프로퍼티(자바스크립트 객체가 가지고 있어서)