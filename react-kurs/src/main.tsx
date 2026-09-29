import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AbortControllerExercise from './features/AbortControllerExercise/index.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import { Fragment } from 'react/jsx-runtime'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
    <MainLayout>
        <> {/* Fragment */}
            <App />
            <h1>hallo ich bin child</h1>
        </>
    </MainLayout>
)
