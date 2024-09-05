import Link from "next/link";

interface Prop {
    [key: string]: any
}
const LeaderBoardIcon = ({ name, path = "/" }: Prop) => {
    return (
        <Link href={path}>
            <div className="group flex items-center gap-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_272)">
                        <path d="M6.3998 23.2H17.5998M11.9998 23.2V15.2M11.9998 15.2C13.6972 15.2 15.3251 14.5258 16.5253 13.3255C17.7255 12.1253 18.3998 10.4974 18.3998 8.80005V2.40005C18.3998 1.9757 18.2312 1.56874 17.9312 1.26868C17.6311 0.96862 17.2242 0.800049 16.7998 0.800049H7.1998C6.77546 0.800049 6.36849 0.96862 6.06843 1.26868C5.76838 1.56874 5.5998 1.9757 5.5998 2.40005V8.80005C5.5998 10.4974 6.27409 12.1253 7.47432 13.3255C8.67455 14.5258 10.3024 15.2 11.9998 15.2ZM5.5998 4.00005H3.9998C3.15111 4.00005 2.33718 4.33719 1.73706 4.93731C1.13695 5.53742 0.799805 6.35136 0.799805 7.20005C0.799805 8.04874 1.13695 8.86267 1.73706 9.46279C2.33718 10.0629 3.15111 10.4 3.9998 10.4H5.5998M18.3998 4.00005H19.9998C20.8485 4.00005 21.6624 4.33719 22.2625 4.93731C22.8627 5.53742 23.1998 6.35136 23.1998 7.20005C23.1998 8.04874 22.8627 8.86267 22.2625 9.46279C21.6624 10.0629 20.8485 10.4 19.9998 10.4H18.3998" className="stroke-white group-hover:stroke-accent-300" strokeOpacity="0.8" strokeWidth="2" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_272">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                {name && <p className="group-hover:text-accent-300 text-[18px] font-[400] leading-[27px]" >{name}</p>}
            </div>
        </Link>
    )
}

export { LeaderBoardIcon };