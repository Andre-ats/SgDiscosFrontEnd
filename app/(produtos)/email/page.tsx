import { Fragment } from "react/jsx-runtime";
import { CardEnviarEmail } from "./component/CardEnviarEmail";

export default function EnviarEmail() {
    return (
        <Fragment>
            <div className="flex w-full justify-center bg-fundoPrimaria">
                <div className="flex w-3/4 flex-row">
                    <CardEnviarEmail/>
                </div>
            </div>
        </Fragment>
    )
}