import { useEffect, useState } from "react";
import { getLanding } from "../../utils/api";

function Footer() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getLanding().then((res) => {
            setData(res.data[0])
            localStorage.setItem('email', res.data[0].mail)
        });
    }, [])

    const number = data?.number?.replaceAll(/\D/g, "")
    return (
        <>
            <footer className="px-4 md:px-[100px] text-[#FF5E00] bg-[#191919] pt-[30px] pb-[70px]">
                <h4 className="py-2">{new Date().getFullYear()} - by Bayram Musayev. All rights reserved</h4>
                <div className="flex items-end justify-between text-[]">
                    <div>
                        <h6>{data?.location}</h6>
                        <div className="flex flex-col">
                            <a href="">{data?.mail}</a>
                            <a href={`https://wa.me/${number}`}>{data?.number}</a>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <a href={data?.instagram} target="_blank" rel="noopener noreferrer">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.0588 2.21749L7.80899 2.28343C4.70244 2.30164 2.19884 4.83476 2.21705 7.94131L2.283 19.1911C2.30121 22.2977 4.83432 24.8013 7.94087 24.783L19.1907 24.7171C22.2972 24.6989 24.8008 22.1658 24.7826 19.0592L24.7167 7.80942C24.6985 4.70287 22.1653 2.19928 19.0588 2.21749Z" fill="#FF5E00" />
                                <path d="M18.0002 12.7912C18.139 13.7275 17.9791 14.6837 17.5431 15.5239C17.1072 16.364 16.4174 17.0453 15.572 17.4709C14.7265 17.8964 13.7684 18.0445 12.8339 17.8941C11.8994 17.7438 11.0361 17.3026 10.3669 16.6333C9.69757 15.964 9.25636 15.1007 9.10598 14.1662C8.95561 13.2317 9.10373 12.2736 9.52928 11.4281C9.95482 10.5827 10.6361 9.89293 11.4763 9.45699C12.3164 9.02106 13.2726 8.86113 14.2089 8.99997C15.1639 9.14159 16.0481 9.58662 16.7308 10.2693C17.4135 10.952 17.8585 11.8362 18.0002 12.7912Z" stroke="#7E2E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.6875 7.3125H19.6988" stroke="#7E2E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href={data?.tiktok} target="_blank" rel="noopener noreferrer">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.4419 7.5175C20.5591 6.50939 20.0726 5.21497 20.0727 3.875H16.0815V19.8917C16.0513 20.7586 15.6856 21.58 15.0614 22.1824C14.4373 22.7849 13.6035 23.1214 12.736 23.1208C10.9019 23.1208 9.3777 21.6225 9.3777 19.7625C9.3777 17.5408 11.5219 15.8746 13.7306 16.5592V12.4775C9.27437 11.8833 5.37354 15.345 5.37354 19.7625C5.37354 24.0637 8.93854 27.125 12.7231 27.125C16.779 27.125 20.0727 23.8312 20.0727 19.7625V11.6379C21.6912 12.8002 23.6343 13.4238 25.6269 13.4204V9.42917C25.6269 9.42917 23.1985 9.54542 21.4419 7.5175Z" fill="#FF5E00" />
                            </svg>
                        </a>
                        <a href={data?.payment} target="_blank" rel="noopener noreferrer">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 2.25V24.75H13.5V18H14.625C16.7136 18 18.7166 17.1703 20.1935 15.6935C21.6703 14.2166 22.5 12.2136 22.5 10.125C22.5 8.03642 21.6703 6.03338 20.1935 4.55653C18.7166 3.07969 16.7136 2.25 14.625 2.25H4.5Z" fill="#FF5E00" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer