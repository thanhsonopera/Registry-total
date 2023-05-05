import logo from "./logo.png"
import "./logo.css"

function Logo() {
    return (
        <div className="header__logo">
            <img src={logo} alt="logo" />
        </div>

    )
}

export default Logo;