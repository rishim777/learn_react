import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, no} from 'reactstrap'


const Header=()=>{
    return (
        <div>
            <Navbar color="warning" light>

                <NavbarBrand className="me-auto" href="/">
                Movie Rater
                </NavbarBrand>

            </Navbar>
        </div>
    );
}

export default Header;