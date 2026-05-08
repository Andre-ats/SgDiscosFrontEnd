import { Fragment, type JSX } from "react/jsx-runtime";
import imgIconSG from "../../../public/assets/Icones/logo5.png"

interface ILayout {
    children?: JSX.Element;
}

export function Layout(props: ILayout) {
    return (
        <Fragment>
            <div className="w-screen h-screen">
                <div className="w-screen py-14">
                    <img className="h-40 ml-20" src={imgIconSG} alt="" />
                </div>
                <div className="children-full">
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}