import { useLogto } from '@logto/react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Callback from '../Callback';
import { useEffect } from 'react';

const Home = () => {
    const { isAuthenticated, signIn, signOut, isLoading } = useLogto();

    useEffect(() => {
        console.log("isAuthenticated", isAuthenticated, isLoading);
        if (!isAuthenticated && !isLoading) {
            signIn('http://localhost:5173/callback');
        }
    }, [isAuthenticated, isLoading, signIn]);

    return (
        <Routes>
            <Route path="/callback" element={<Callback />} />
            <Route path="/login" element={
                <div style={{
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "height": "100vh"
                }}>
                    {
                        <button onClick={() => {
                            console.log("signOut");
                            signOut('http://localhost:5173/')
                        }}>
                            Sign Out
                        </button>
                    }
                </div>
            } />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default Home;