import React from 'react';
import CategoriesBar from "../../components/CategoriesBar/categoriesBar";
import Video from "../../components/Video/video";
import {ScreenGrid, ScreenContainer} from "./styles";

function HomeScreen(props) {
    return (
        <div>
            <ScreenContainer>
                <CategoriesBar/>
                <ScreenGrid>
                    {
                        [...new Array(props.items)].map(() => (
                            <Video/>
                        ))
                    }
                </ScreenGrid>
            </ScreenContainer>
        </div>
    )

}

export default HomeScreen;