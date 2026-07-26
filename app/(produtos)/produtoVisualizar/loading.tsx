import { CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Fragment } from "react/jsx-runtime";

export default function LoadingProdutoCriar() {
    return (
        <Fragment>
            <div className="flex w-full justify-center bg-fundoPrimaria">
                <div className="sm:w-3/4 w-full">
                    <CardHeader>
                        <Skeleton className="h-9 w-1/6 md:w-1/6 bg-fundoTerciaria" />
                    </CardHeader>
                    <CardContent className="flex gap-5 mt-2 w-full 2xl:flex-row flex-col">
                        <Skeleton className="h-145 lg:col-span-2 2xl:w-237.75 w-full bg-fundoTerciaria" />

                        <div className="flex flex-col gap-3">
                            <Skeleton className="h-71 2xl:w-158.5 w-full bg-fundoTerciaria" />
                            <Skeleton className="h-71 2xl:w-158.5 w-full bg-fundoTerciaria" />
                        </div>
                    </CardContent>
                    <div>
                        <Skeleton className="h-71 w-full mt-5 bg-fundoTerciaria" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}