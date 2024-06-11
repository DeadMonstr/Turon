import cls from "./app.module.sass"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Website from "pages/website/Website";


function App() {



    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path={"/"} element={<Website/>}/>
        </>
    ));





    return (
        <div className={cls.App}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
