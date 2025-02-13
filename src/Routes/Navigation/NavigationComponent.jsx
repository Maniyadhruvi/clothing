import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import '../../Routes/Navigation/NavigationStyle.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="Navigation">
                <div>
                    <Link className="logo-container" to='/home'>
                        <CrownLogo className='logo' />
                    </Link>
                </div>

                <div className="navigation-link-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>

                    <Link className="nav-link" to='/signin'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;