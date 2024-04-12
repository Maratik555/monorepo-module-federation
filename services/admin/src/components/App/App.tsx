import { Outlet } from "react-router-dom";

export const App = () => {

    return (
        <div>
            <h1>Admin module</h1>
            <Outlet/>
        </div>
    );
};
