import Header from "./Header";

function App() {
    // jsx 밖의 주석
    return (

        <header>
            {/* jsx 안의 주석 */}
            <Header style={{ color: 'red' }} name="떠경" age={3} />
            <nav>
                <ul>
                    <li><a href="" style={{ color: 'red', fontSize: '20px' }}>menu01</a></li>

                    <li><a href="">menu02</a></li>
                    <li><a href="">menu03</a></li>
                    <li><a href="">menu04</a></li>
                </ul>
            </nav>
        </header >
    )
}
{/* 하이폰(- 대신 중간 첫자 대문자), 세미콜론(,로) 쓸 수 없다. */ }
// react에서는 a태그를 대체하여 다른 것을 사용한다.
// 컴포넌트 자체에 스타일 을 주는 것이 안된다. (하위 태그에게 줘야 한다)
export default App;