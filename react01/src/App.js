import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

// 컴포넌트 : 파일을 갈라 쓴다.

// const App = function(){}
const App = () => {
    return (
        //Fragments
        <Wrapper>
            <Header />
            <Main tae="태서경" work="노래" />
            <Main tae="서경" work="술" />
            <Main tae="경" work="춤" />
            <Main tae="태" />
            <Footer />
        </Wrapper>
    )
}
// 위 컴포넌트 하나만 내보낼 때
export default App;