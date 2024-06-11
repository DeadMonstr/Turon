
import cls from "./app.module.sass"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Website from "pages/website/Website";
import Select from "../components/ui/select/select";


function App() {



    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path={"/"} element={<Website/>}/>
            <Route path={"/select"} element={<Select/>}/>
        </>
    ));





    return (
        <div className={cls.App}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
