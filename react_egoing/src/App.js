import React, { useState } from 'react'

function Header(props) {
    // console.log('props', props) = object>title REACT
    // console.log('props', props.title)
    return <header>
        <h1>
            <a href="/" onClick={e => {
                e.preventDefault();
                props.onChangeMode();
            }}>{props.title}</a>

            {/* {중괄호 사이의 값} = 표현식 */}
        </h1>
    </header >
}

const Nav = (props) => {
    const lis = [
        // <li><a href="/read/1">html</a></li>,
        // <li><a href="/read/2">css</a></li>,
        // <li><a href="/read/3">javascript</a></li>
    ]

    // topics의 원소의 숫자만큼 반복을 시켜라는 뜻
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/' + t.id} onClick={e => {
                e.preventDefault();
                props.onChangeMode(e.target.id);
                // target 이벤트를 유발시킨 태그 여기서는 a
            }}>
                {t.title}</a>
        </li>)
        // key 리액트 성능 높이고 정확한 동작 하는것에 협조한다.
    }

    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}


const Article = (props) => {
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}
// mode 값이 바뀔 때 app컴포넌트의 함수가 실행되면서 새로운 return값 mode이 만들어지고 이것이 ui에 반영될 수 있도록 한다. state!
const App = () => {
    // 모드의 값을 이벤트가 발생했을 때 변경해주자.

    // useState는 배열을 return : 배열[0] = 상태의 값을 읽는다. 배열[1]= 상태의 값을 변경한다.

    // console.log('_mode', _mode)

    // const mode = _mode[0];
    // const setMode = _mode[1];
    // const _mode = useState("WELCOME");
    const [mode, setMode] = useState("WELCOME");
    const [id, setId] = useState(null);


    // const mode = "WELCOME";
    const topics = [
        { id: 1, title: "html", body: "html is..." },
        { id: 2, title: "css", body: "css is..." },
        { id: 3, title: "javascript", body: "javascript is..." }
    ]
    let content = null;
    if (mode === "WELCOME") {
        content = <Article title="Welcome" body="Hello,WEB" />
    } else if (mode === "READ") {
        content = <Article title="Read" body="Hello,Read" />
    }

    return (
        // 리액트는 사용자정의태그=컴포넌트 를 만드는 기술이다.
        <>
            <Header title="WEB" onChangeMode={() => {
                setMode("WELCOME");
            }} />
            <Nav topics={topics} onChangeMode={(id) => {
                setMode("READ");
                setId(id)
            }} />
            {/* <Article title="Welcome" body="Hello,WEB" /> */}
            {content}
        </>
        // 우리의 컴포넌트에도 속성을=props 주고싶다

    )
}

export default App

// prop , state =  값이 변경되면서 새로운 ui를 만들어낸다
// props 컴포넌트를 사용하는 외부자를 위한
// state 컴포넌트를 만드는 내부자를 위한 데이터