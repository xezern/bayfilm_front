import OneImg from "./OneImg";

function ThreeImg({ galery, description, title }) {
    if (!galery) return null;
    return (
        <div className="col-span-12 gap-[12px] grid grid-cols-12">
            {galery.map((img, index) => (
                <OneImg key={index} title={title} galery={[img]} description={description} isShowDescription={false} className='col-span-4' />
            ))}
        </div>
    )
}


export default ThreeImg;
