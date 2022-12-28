import * as React from "react";
import loadable from "@loadable/component";

import "../styles/App.css";
import Paths from "routes/paths";
import { Route, Routes } from "react-router-dom";

const Results = loadable(() => import("pages/ResultsPage"));
const Search = loadable(() => import("pages/SearchPage"));
const NoPage = loadable(() => import("pages/NoPage"));

function App() {
    return (
        <main>
            <Routes>
                <Route path={Paths.select} element={<Search />} />
                <Route path={Paths.images} element={<Results />} />
                <Route path={Paths.nopage} element={<NoPage />} />
            </Routes>
        </main>
    );
}

export default App;
