import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

  const monga = '나는'
  const DATA = [
    { id: 1, name: '태서경' },
    { id: 2, name: '김서경' },
    { id: 3, name: '이서경' },
    { id: 4, name: '박서경' },
    { id: 5, name: '서경' },
    { id: 6, name: '경' },
    { id: 7, name: '떠경' },
  ]
  return (
    <>
      <Header monga={monga} member={DATA} />

      {/* <Header>
        <div>ccccc</div>
      </Header> 컴포넌트 안에 내용을 써서 전달할 수 없다. */}

      <Main />
      <Footer />

      <div>나는 컴포넌트가 아니야!</div>
    </>
  );
}

export default App;
