
function Header(){

    return(
        <header>
            <h1>My Website</h1>
            <nav>
                {/* href for hyperlink */}
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    ); // you can write html within this
}

export default Header