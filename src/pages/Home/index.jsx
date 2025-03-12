import { useLogto } from '@logto/react';
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
        <div style={{
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "height": "100vh"
        }}>
            <button onClick={() => {
                console.log("signOut");
                signOut('http://localhost:5173/')
            }}>
                Sign Out
            </button>
        </div>
    );
};

export default Home;