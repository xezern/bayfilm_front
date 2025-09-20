function Text({ title }) {
    return (
        <div className="col-span-12">
            <h2 className='lg:text-[30px] md:text-[25px] text-[20px] capitalize text-[#fff6c3] my-2.5 py-[10px] border-r-0 border-l-0 border-[#fff6c3] border-[2px] text-center hover:text-[#fff6c3] transition-all'>
                {title}
            </h2>
        </div>
    )
}

export default Text