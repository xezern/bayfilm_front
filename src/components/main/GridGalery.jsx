import { axiosInstance } from "../../utils/instance";

function GridGalery({ data }) {
    if (!data) return null;

    return (
        <div className="py-[50px]">
            <div className="relative grid grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-3 lg:gap-4 md:px-[50px] lg:px-[100px]">
                {data.map((img, index) => (
                    <div
                        key={index}
                        className={`w-full h-[calc(574px/2)] rounded-[20px] overflow-hidden ${(index === 0 || index === 2) ? '!h-[calc(591px/2)] min-[500px]:!h-[calc(591px/1.5)]  md:!h-[591px]  row-span-2' : 'max-h-[calc(591px/4)] min-[500px]:max-h-[calc(591px/3)] md:max-h-[calc(591px/2)]'}`}
                    >
                        <img
                            src={`${axiosInstance.defaults.baseURL}${img}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridGalery;
