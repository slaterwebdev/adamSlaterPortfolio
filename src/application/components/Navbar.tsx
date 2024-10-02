import { NavLink, useLocation } from "react-router-dom";

type NavProps = {
    links: string[],
    title: string,
    logo: string
}

export const Navbar = ({links, title, logo}: NavProps) => {
    const { pathname } = useLocation()

    const formattedLinks = links.map(link => {
        const formattedLink = link === '' ? 'Home' : link.charAt(0).toUpperCase() + link.slice(1);
        const linkStatus = `hover:text-cyan-500 px-2 ${pathname.slice(1) === link ? 'text-cyan-400' : ''}`
        return { link, formattedLink, linkStatus };
    })

    return (
        <div className="navbar bg-transparent shadow-none z-10 max-w-screen-xl">
            <div className="navbar-start">
                <NavLink className="navbar-item pl-2 flex items-center" to={'/'}>
                    <img className="w-12" src={logo} alt={`${title} logo`}/>
                    <span className="font-semibold invisible sm:visible">{title}</span>
                </NavLink>
            </div>
            <div className="navbar-end gap-5">
                {formattedLinks.map(({link, formattedLink, linkStatus}) => (
                        <NavLink 
                            key={`link-${link}`} 
                            className={linkStatus} 
                            to={`/${link}`}
                        >
                            {formattedLink}
                        </NavLink>
                    )
                )}
            </div>
        </div>
)}
 