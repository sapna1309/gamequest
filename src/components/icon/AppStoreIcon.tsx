import Link from "next/link";

interface Prop {
    [key: string]: any
}
const AppStoreIcon = ({ name, path = "/" }: Prop) => {
    return (
        <Link href={path}>
            <div className="group flex items-center gap-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_270)">
                        <path d="M2.02 1.515C1.88607 1.515 1.75762 1.56821 1.66291 1.66291C1.56821 1.75762 1.515 1.88607 1.515 2.02V7.07C1.515 7.35 1.741 7.576 2.02 7.576H7.07C7.1364 7.57613 7.20218 7.56317 7.26356 7.53785C7.32495 7.51253 7.38074 7.47535 7.42774 7.42844C7.47473 7.38154 7.51202 7.32582 7.53746 7.26449C7.5629 7.20315 7.576 7.1374 7.576 7.071V2.02C7.57613 1.9536 7.56317 1.88782 7.53785 1.82644C7.51253 1.76505 7.47535 1.70926 7.42844 1.66226C7.38154 1.61526 7.32582 1.57798 7.26449 1.55254C7.20315 1.5271 7.1374 1.514 7.071 1.514L2.02 1.515ZM7.07 10.909C7.60574 10.909 8.11953 11.1218 8.49836 11.5006C8.87718 11.8795 9.09 12.3933 9.09 12.929V17.979C9.09013 18.2444 9.03798 18.5071 8.93652 18.7523C8.83507 18.9975 8.6863 19.2203 8.49871 19.408C8.31112 19.5957 8.08839 19.7446 7.84325 19.8461C7.59811 19.9477 7.33535 20 7.07 20H2.02C1.48426 20 0.970468 19.7872 0.591644 19.4084C0.212821 19.0295 0 18.5157 0 17.98V12.93C0 12.3943 0.212821 11.8805 0.591644 11.5016C0.970468 11.1228 1.48426 10.91 2.02 10.91L7.07 10.909ZM17.98 10.909C18.2454 10.909 18.5081 10.9613 18.7533 11.0629C18.9984 11.1644 19.2211 11.3133 19.4087 11.501C19.5963 11.6887 19.7451 11.9115 19.8465 12.1567C19.948 12.4019 20.0001 12.6646 20 12.93V17.98C20 18.5157 19.7872 19.0295 19.4084 19.4084C19.0295 19.7872 18.5157 20 17.98 20H12.93C12.3943 20 11.8805 19.7872 11.5016 19.4084C11.1228 19.0295 10.91 18.5157 10.91 17.98V12.93C10.91 12.3943 11.1228 11.8805 11.5016 11.5016C11.8805 11.1228 12.3943 10.91 12.93 10.91L17.98 10.909ZM7.07 12.424H2.02C1.88607 12.424 1.75762 12.4772 1.66291 12.5719C1.56821 12.6666 1.515 12.7951 1.515 12.929V17.979C1.515 18.259 1.741 18.485 2.02 18.485H7.07C7.1364 18.4851 7.20218 18.4722 7.26356 18.4468C7.32495 18.4215 7.38074 18.3843 7.42774 18.3374C7.47473 18.2905 7.51202 18.2348 7.53746 18.1735C7.5629 18.1122 7.576 18.0464 7.576 17.98V12.93C7.57613 12.8636 7.56317 12.7978 7.53785 12.7364C7.51253 12.6751 7.47535 12.6193 7.42844 12.5723C7.38154 12.5253 7.32582 12.488 7.26449 12.4625C7.20315 12.4371 7.1364 12.424 7.07 12.424ZM17.98 12.424H12.93C12.8636 12.4239 12.7978 12.4368 12.7364 12.4622C12.6751 12.4875 12.6193 12.5247 12.5723 12.5716C12.5253 12.6185 12.488 12.6742 12.4625 12.7355C12.4371 12.7968 12.424 12.8626 12.424 12.929V17.979C12.424 18.259 12.65 18.485 12.929 18.485H17.979C18.0454 18.4851 18.1112 18.4722 18.1726 18.4468C18.2339 18.4215 18.2897 18.3843 18.3367 18.3374C18.3837 18.2905 18.421 18.2348 18.4465 18.1735C18.4719 18.1122 18.485 18.0464 18.485 17.98V12.93C18.4851 12.8636 18.4722 12.7978 18.4468 12.7364C18.4215 12.6751 18.3843 12.6193 18.3374 12.5723C18.2905 12.5253 18.2348 12.488 18.1735 12.4625C18.1122 12.4371 18.0464 12.424 17.98 12.424ZM7.07 0C7.60574 0 8.11953 0.212821 8.49836 0.591644C8.87718 0.970468 9.09 1.48426 9.09 2.02V7.07C9.09 7.60574 8.87718 8.11953 8.49836 8.49836C8.11953 8.87718 7.60574 9.09 7.07 9.09H2.02C1.48426 9.09 0.970468 8.87718 0.591644 8.49836C0.212821 8.11953 0 7.60574 0 7.07V2.02C0 1.48426 0.212821 0.970468 0.591644 0.591644C0.970468 0.212821 1.48426 0 2.02 0L7.07 0ZM17.98 0C18.5157 0 19.0295 0.212821 19.4084 0.591644C19.7872 0.970468 20 1.48426 20 2.02V7.07C20 7.60574 19.7872 8.11953 19.4084 8.49836C19.0295 8.87718 18.5157 9.09 17.98 9.09H12.93C12.3943 9.09 11.8805 8.87718 11.5016 8.49836C11.1228 8.11953 10.91 7.60574 10.91 7.07V2.02C10.91 1.48426 11.1228 0.970468 11.5016 0.591644C11.8805 0.212821 12.3943 0 12.93 0L17.98 0ZM17.98 1.515H12.93C12.8636 1.51487 12.7978 1.52783 12.7364 1.55315C12.6751 1.57847 12.6193 1.61565 12.5723 1.66256C12.5253 1.70946 12.488 1.76518 12.4625 1.82651C12.4371 1.88785 12.424 1.9536 12.424 2.02V7.07C12.424 7.35 12.65 7.576 12.929 7.576H17.979C18.0454 7.57613 18.1112 7.56317 18.1726 7.53785C18.2339 7.51253 18.2897 7.47535 18.3367 7.42844C18.3837 7.38154 18.421 7.32582 18.4465 7.26449C18.4719 7.20315 18.485 7.1374 18.485 7.071V2.02C18.4851 1.9536 18.4722 1.88782 18.4468 1.82644C18.4215 1.76505 18.3843 1.70926 18.3374 1.66226C18.2905 1.61526 18.2348 1.57798 18.1735 1.55254C18.1122 1.5271 18.0464 1.515 17.98 1.515Z" className="fill-white fill-opacity-80 group-hover:fill-accent-300" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_270">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                {name && <p className="group-hover:text-accent-300" >{name}</p>}
            </div>
        </Link>
    )
}

export { AppStoreIcon };