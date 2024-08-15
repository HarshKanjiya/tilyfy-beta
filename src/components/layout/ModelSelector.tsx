import { IModel } from "@/Interface/common.interface";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { setActiveModel } from "@/state/model.slice";

interface IModelSelector {
}

const ModelSelector: React.FC<IModelSelector> = () => {
    const { modelList, activeModel } = useSelector((state: RootState) => state.models)
    const dispatch = useDispatch()
    return <>
        <div className="flex w-64 flex-col border-r bg-background ">
            <div className="flex items-center gap-2 border-b p-4">
                <p className="text-lg font-semibold">Tilyfy</p><Badge variant="secondary" >beta</Badge>
            </div>
            <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-semibold">Model Selector</h2>
                {/* <Button variant="ghost" size="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                    <span className="sr-only">Add model</span>
                </Button> */}
            </div>
            <div className=" p-4  flex-1 overflow-auto">
                <div className="flex flex-col gap-2">
                    {
                        modelList.map((model: IModel) => (
                            <Button key={model.id} variant={activeModel?.name == model.name ? 'default' : 'secondary'} className="w-full transition-all duration-300" onClick={() => dispatch(setActiveModel(model))} >{model.name}</Button>
                        ))
                    }
                </div>
            </div>
        </div>
    </>;
};


ModelSelector.displayName = 'ModelSelector'
export default ModelSelector