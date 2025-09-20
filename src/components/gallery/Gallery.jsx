import { useEffect, useState } from "react";
import Nav from "../header/Nav"
import ScrollUp from "../scrollUp/ScrollUp"
import OneImg from "./OneImg"
import ThreeImg from "./ThreeImg"
import { getGallery } from "../../utils/api";
import { useParams } from "react-router-dom";
import FullImg from "./FullImg";
import VideoPlayer from "./VideoPlayer";
import GridImg from "./GridImg";
import Text from "./Text";

function Gallery() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getGallery(id).then((res) => setData(res));
    }, [id])

    return (
        <>
            <Nav />
            <div className="bg-[#0b0b0b] px-4 md:px-[50px] lg:px-[50px] w-full py-[10px]">
                <div className="gap-[12px] py-[50px] grid grid-cols-12">
                    {
                        data?.filter(el => el.status)?.map((item, index) => (
                            item.type === 'ONE' ? <OneImg key={index} {...item} className=' col-span-6 md:col-span-4 lg:col-span-3' />
                                : item.type === 'TREE' ?
                                    <ThreeImg key={index} {...item} />
                                    : item.type === 'FULL' ?
                                        <FullImg key={index} {...item} /> :
                                        item.type === 'VIDEO' ?
                                            <VideoPlayer key={index} {...item} /> :
                                            item.type === 'GRID' ?
                                                <GridImg key={index} {...item} /> :
                                                item.type === 'TEXT' ?
                                                    <Text key={index} {...item} />
                                                    : null
                        ))
                    }
                </div>
            </div>
            <ScrollUp />
        </>

    )
}

export default Gallery
