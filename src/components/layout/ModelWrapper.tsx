import { IModel } from "@/Interface/common.interface";
import Model from "./Model";
import { Suspense } from "react";
import Loader from "../ui/Loader";


interface IModelWrapper {
    currentModel: IModel | null
}

const ModelWrapper: React.FC<IModelWrapper> = ({ currentModel }) => {
    return <div className="flex-1 bg-muted/40 p-4">
        <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{currentModel?.name}</h1>
                <div className="flex items-center gap-2">
                    {/* <Button variant="outline">Save</Button>
                    <Button>Publish</Button> */}
                </div>
            </div>
            {
                currentModel?.id
                    ?
                    <Suspense fallback={<Loader />} >
                        <div className="mt-4 flex-1 rounded-lg border bg-background overflow-hidden">
                            <Model currentModel={currentModel} />
                        </div>
                    </Suspense>
                    :
                    <div className="h-full p-4 flex items-center justify-center">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-400">Select Model</h2>
                        </div>
                    </div>
            }
        </div>
    </div >
        ;
};


ModelWrapper.displayName = 'ModelWrapper'
export default ModelWrapper