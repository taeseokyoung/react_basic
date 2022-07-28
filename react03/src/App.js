import { useState } from 'react';
import './App.css';


// const만 썼다. = 이름을 안줬으니까 = 비구조할당
// react는 자기만이 가지고있는 변수가 있다.(useState = var,let = 0 과 같은상황)
// [state 변수, state 변수를 바꾸는 함수] = useState()
// const는 상수 ++ 가 될수가 없다. let은 변경이 가능하니까 ++(계속 증감 가능)

// setColor(!color)
function App() {

  const [num, setNum] = useState(0);
  const [hc, setHc] = useState(false);

  // 1. 클릭했을 때 컬러를 빨간색으로 변경
  // return (
  //   <div onClick={() => setHc(true)} style={{ color: hc && 'red' }}>
  //     <i className='xi-heart' onClick={() => setNum(num + 1, console.log(num))}></i> {num}
  //   </div>
  // );

  // 2. 클릭했을 때 하트만 빨간색으로 변경
  // return (
  //   <div>
  //     <i className='xi-heart' onClick={() => (setNum(num + 1), setHc(true))} style={{ color: hc && 'red' }}></i> {num}
  //   </div >
  // );

  return (
    <div>
      <i className='xi-heart'
        onClick={() => (setNum(num + 1), setHc(!hc))}
        style={{ color: hc && 'red' }}></i>
      {num}
    </div >
  );
}
export default App;
