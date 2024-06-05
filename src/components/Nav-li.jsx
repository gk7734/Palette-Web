const NavLi = (props) => {
    return (
        <li>
            <a href={`/${props.url}`}>{props.title}</a>
        </li>
    )
}

export default NavLi;