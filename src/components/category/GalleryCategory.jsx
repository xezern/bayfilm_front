import { Link } from "react-router-dom";
import ScrollUp from "../scrollUp/ScrollUp";
import { useEffect, useState } from "react";
import { getCategory } from "../../utils/api";

const PATH = "https://api.bayfilm9.com"
function GalleryCategory() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getCategory().then((res) => setData(res.data));
    }, [])

    return (
        <>
            <div className="flex flex-col gap-2.5">
                {data?.filter(el => el.status)?.map((item) => {
                    return (
                        <Link
                            key={item.id}
                            to={`/galery/${item.id}`}
                            style={{ background: `url('${PATH}${item.image}') center/cover` }}
                            className="md:h-[calc(100vh-154px)] h-[calc((100vh-97px)/3)] category w-full flex items-center justify-center text-[#FFF7C9] text-[40px] md:text-[80px]">
                            <h3>{item.title}</h3>
                        </Link>
                    )
                })}
            </div>
            <ScrollUp />
        </>
    )
}

export default GalleryCategory;
