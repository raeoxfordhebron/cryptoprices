import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Main from "./pages/main"
import Currencies from "./pages/currencies"
import Price from "./pages/price"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<h1>Hello World</h1>}>
            <Route path="" element={<Main/>}/>
        </Route>
    )
)


export default router 