import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Headers from '../components/Headers'
import Home from '../view/Home'
import Email from '../view/Email'
import ExploreSpecies from '../view/ExploreSpecies'
import Stories from '../view/Stories'
import TakeAction from '../view/TakeAction'
import Wireframe from '../view/Wireframe'


const Layout = () => {
    return (
        <BrowserRouter>
            <Headers />

            <Routes>
                <Route index element={<Home />} />
                <Route path="email" element={<Email />} />
                <Route path="exploreSpecies" element={<ExploreSpecies />} />
                <Route path="stories" element={<Stories />} />
                <Route path="take-action" element={<TakeAction />} />
                <Route path="wireframe" element={<Wireframe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout