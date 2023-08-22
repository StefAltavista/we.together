import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";

import LandingPage from "./LandingPage";
import About from "./About";
import WorkInProgress from "./WorkInProgress";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/workinprogress"
                        element={<WorkInProgress />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
