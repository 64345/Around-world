import ThemeSwitcher from "./ThemeSwitcher"
import Logo from "./Logo"

const Header = () => {
    return (
        <header className="mb-6 bg-white shadow dark:bg-gray-800 md:mb-12">
            <div className="container px-5 mx-auto md:px-20 ">
                <div className="flex h-20 items-center justify-between">
                    <Logo/>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}

export default Header