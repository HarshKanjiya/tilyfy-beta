import { IModel } from "@/Interface/common.interface";

interface ModelProps {
    currentModel: IModel
}


const Model: React.FC<ModelProps> = ({ currentModel }) => {
    return <div>
        {currentModel.name}
    </div>;
};


Model.displayName = 'Model'
export default Model