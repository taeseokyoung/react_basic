const Main = ({ tae, work }) => {
    return (
        <main>
            {tae}은 {work} 좋아해
        </main>
    )
}

// 전달 받은 값이 없을 때 기본으로 출력된다.
Main.defaultProps = {
    work: '놀기'
}
export default Main;