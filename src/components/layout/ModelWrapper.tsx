import { RootState } from "@/state/store";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import Loader from "../ui/Loader";
import Model from "./Model";


interface IModelWrapper {
}

const ModelWrapper: React.FC<IModelWrapper> = () => {
    const activeModel = useSelector((state: RootState) => state.models.activeModel)

    return (
        <>
            <div className="flex-1 flex items-center justify-center bg-muted/40 p-4 sm:p-4">
                <div className="flex h-full flex-col items-center justify-center w-full ">
                    <div className="flex items-center justify-between">
                        <h1 className="hidden sm:block sm:text-2xl font-bold">{activeModel?.name}</h1>
                        <div className="flex items-center gap-2">
                            {/* <Button variant="outline">Save</Button>
                    <Button>Publish</Button> */}
                        </div>
                    </div>
                    {
                        activeModel?.id
                            ?
                            <Suspense fallback={<Loader />} >
                                <div className="flex-1 h-full w-full rounded-lg border border-slate-200 bg-background overflow-hidden">
                                    <Model />
                                </div>
                            </Suspense>
                            :
                            <div className="h-full flex items-center justify-center">
                                <div>
                                    <h2 className="text-2xl font-semibold text-slate-400">Select Model</h2>
                                </div>
                            </div>
                    }
                </div>
            </div >
        </>
    )
        ;
};


ModelWrapper.displayName = 'ModelWrapper'
export default ModelWrapper