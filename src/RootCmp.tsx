import { Routes, Route } from 'react-router'
import Homepage from './pages/Home'
import { AppHeader } from './cmps/AppHeader'

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <main>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                </Routes>
            </main>
        </div>
    )
}


