import * as React from "react";
import loadable from "@loadable/component";

import "../styles/App.css";
import PATHS from "routes";
import { Route, Routes } from "react-router-dom";
import useHandleConnectionStatus from "hooks/useHandleConnectionStatus";

const Results = loadable(() => import("pages/ResultsPage"));
const Search = loadable(() => import("pages/SearchPage"));
const NoPage = loadable(() => import("pages/NoPage"));

function App() {
    useHandleConnectionStatus();
    return (
        <main>
            <Routes>
                <Route path={PATHS.SEARCH} element={<Search />} />
                <Route path={PATHS.RESULTS} element={<Results />} />
                <Route path={PATHS.NOPAGE} element={<NoPage />} />
            </Routes>
        </main>
    );
}

export default App;
