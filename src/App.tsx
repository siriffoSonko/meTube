import {GlobalStyle, MainScreenContainer} from './styles/GlobalStyle'

import Header from './components/Header/header';
import Sidebar from "./components/Sidebar/sidebar";
import HomeScreen from "./screens/homescreen/homeScreen";

export function App() {
    return (
        <GlobalStyle>
            <Header></Header>
            <MainScreenContainer>
                <Sidebar></Sidebar>
                <HomeScreen items={20}></HomeScreen>
            </MainScreenContainer>
        </GlobalStyle>
    )
}