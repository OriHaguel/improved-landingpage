import { Routes, Route } from 'react-router'
import Homepage from './pages/Home'
import { AppHeader } from './cmps/AppHeader'
import PrivacyPolicy from './cmps/PrivacyPolicy'

export function RootCmp() {
    return (
        <div className="main-container">
            {/* <AppHeader /> */}
            <main>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                </Routes>
            </main>
        </div>
    )
}


