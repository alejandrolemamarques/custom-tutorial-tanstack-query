import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/star-wars-logo-crop.webp";

const NavBar = () => {
    
    // Helper function to determine the className for NavLink
    const getNavLinkClassName = ({
        isActive,
    }: {
        isActive: boolean;
    }): string => {
        return isActive ? styles.active : "";
    };

    return (
        <div className={styles.container}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="Star Wars Logo" />
            </Link>
            <div className={styles.links}>
                {/* Use the function form for className */}
                <NavLink to="/" className={getNavLinkClassName}>
                    HOME
                </NavLink>
                <NavLink to="/starships" className={getNavLinkClassName}>
                    STARSHIPS
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
