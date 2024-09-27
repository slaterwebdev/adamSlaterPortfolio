import { NavLink, useLocation } from "react-router-dom";

type Props = {
    links: Array<string>,
    title: string,
    logo: string
}

const Navbar = ({links, title, logo}: Props) => {
    const { pathname } = useLocation()
    const getFormattedLink = (link: string) => 
        link === '' ? 'Home' : link.charAt(0).toUpperCase() + link.slice(1)
    const getLinkClass = (link: string) => 
        `hover:text-cyan-500 px-2 ${pathname.slice(1) === link ? 'text-cyan-400' : ''}`

    return (
        <div className="navbar shadow-none">
            <div className="navbar-start">
                <NavLink className="navbar-item pl-2 flex items-center" to={'/'}>
                    <img className="w-12" src={logo} alt={`${title} logo`}/>
                    <span className="font-semibold">{title}</span>
                </NavLink>
            </div>
            <div className="navbar-end">
                {links.map((link) => (
                        <NavLink 
                            key={`link-${link}`} 
                            className={getLinkClass(link)} 
                            to={`/${link}`}
                        >
                            {getFormattedLink(link)}
                        </NavLink>
                    )
                )}
            </div>
        </div>
)}
 
export default Navbar;