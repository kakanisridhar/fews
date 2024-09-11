import { Route, Routes } from "react-router-dom";
import HelloWorld from "./lessons/Lesson1.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import Navbar from "./components/Navbar.tsx";

export default function App() {
    return (
        <main className="h-screen overflow-auto">
            <div className="flex h-screen items-start">
                <div className="h-full w-1/4 bg-gray-100">
                    <Navbar />
                </div>
                <div className="w-3/4">
                    <Routes>
                        <Route path="/" element={<HelloWorld />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </main>
    );
}
