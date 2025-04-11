import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
// Assuming the logo file is named tanstack-logo.svg or tanstack-logo.png
// Adjust the import path if the filename is different
import tanstackLogo from "@/assets/images/tanstack-logo.png";

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            {/* Logo linked to Home */}
            <NavLink to="/" className={styles.logoLink}>
                <img
                    src={tanstackLogo}
                    alt="TanStack Logo"
                    className={styles.logoImage}
                />
            </NavLink>

            {/* Navigation Links Container */}
            <div className={styles.navLinksContainer}>
                {/* Main Navigation Level */}
                <ul className={styles.navListMain}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.active : ""
                                }`
                            }
                            end // Ensure exact match for Home
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/guide"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.active : ""
                                }`
                            }
                        >
                            Guide
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/other-info"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.active : ""
                                }`
                            }
                        >
                            Other Info
                        </NavLink>
                    </li>
                </ul>
                {/* Examples Navigation Level */}
                <ul className={styles.navListExamples}>
                    <li>
                        <NavLink
                            to="/basic-query"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.active : ""
                                }`
                            }
                        >
                            Basics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pagination"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.active : ""
                                }`
                            }
                        >
                            Pagination
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/infinite-loading"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.active : ""
                                }`
                            }
                        >
                            Infinite Loading
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/optimistic-updates"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.active : ""
                                }`
                            }
                        >
                            Optimistic Updates
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/initial-data"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.active : ""
                                }`
                            }
                        >
                            Initial/Placeholder Data
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/prefetching"
                            className={({ isActive }) =>
                                `${styles.navLink} ${
                                    isActive ? styles.active : ""
                                }`
                            }
                        >
                            Prefetching
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
