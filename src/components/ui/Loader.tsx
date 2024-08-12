interface LoaderProps {

}


const Loader: React.FC<LoaderProps> = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
            </div>
        </>
    );
};


Loader.displayName = 'Loader'
export default Loader