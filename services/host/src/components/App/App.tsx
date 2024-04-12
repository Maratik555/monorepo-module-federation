import {Link, Outlet} from "react-router-dom";

export const App = () => {

    return (
        <div data-testid={'App.DataTestId'}>
            <h1>Page</h1>
            <Link to={'/admin'}>Admin</Link>
            <br/>
            <Link to={'/shop'}>Shop</Link>
            <Outlet/>
        </div>
    );
};
