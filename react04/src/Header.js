function Header(props) {

    return (
        <ul>
            {props.monga}
            {/* <li>{props.member[0].name}</li>
            <li>{props.member[1].name}</li>
            <li>{props.member[2].name}</li> */}

            {/* {props.member.map(el => el.name)} */}
            {/* jsx - inner html(html을 안에 때려 넣는것) */}
            {props.member.map(el => <li key={el.id}>{el.name}</li>)}
        </ul>
    )
}

export default Header;