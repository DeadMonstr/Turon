import cls from "./app.module.sass"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Website from "pages/website/Website";
import Select from "../components/ui/form/select/select";
import Register from "pages/register/register";
import Input from "components/ui/form/inputs/input";


function App() {



    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path={"/"} element={<Website/>}/>
            <Route path={"/select"} element={<Select/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/input"} element={<Input/>}/>
        </>
    ));





    return (
        <div className={cls.App}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;