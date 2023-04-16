import {Container, Stage } from "@inlet/react-pixi";
import React, {useEffect, useState} from "react";
import {Provider, useSelector} from "react-redux";
import {showBg} from "@/features/bgSlice";
import {Background} from "@/components/MainStage/index";
import {rootReducer} from "@/app/store";
import {showObjs} from "@/features/objSlice";
import OnePixyObject from "@/components/Objects/OnePixyObject";

const MainStage = () => {
    const bg = useSelector(showBg);
    const objList = useSelector(showObjs)
    console.log(bg);
    console.log(objList)
    const [sizes, setSize] = useState({width: 0, height: 0})
    useEffect(() => {
        if (typeof window !== "undefined") {
            setSize({width: window.innerWidth, height: window.innerHeight - 90})
        }
    },[])

    return (
        <Stage width={sizes.width} height={sizes.height} options={{ backgroundColor: 0xFFFFFF }}>
            <Container width={sizes.width} height={sizes.height}>
                <Provider store={rootReducer}>
                    {
                        bg.image != null ? <Background /> : null
                    }
                </Provider>
                <Provider store={rootReducer}>
                    {objList.map((element: any)=><OnePixyObject props={element} key={element.id}/>) }
                </Provider>
            </Container>
        </Stage>
    )
}

export default MainStage