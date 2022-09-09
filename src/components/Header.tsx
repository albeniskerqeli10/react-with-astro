 const Header = () => {
    return(
       <header className="w-full  flex items-center justify-between px-5 py-5 flex-wrap flex-row">
        <span className="font-bold text-xl">LOGO</span>
        <nav className="flex flex-row items-center justify-center list-none gap-10">
            <li><a href="">Home</a></li>
            <li><a href="">Blogs</a></li>

        </nav>
       </header>
    )
}
export default Header;