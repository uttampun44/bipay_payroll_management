import clsx from "clsx";
import React, { SVGProps } from "react";

const Icons = {
    Dashboard: (
        <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_717_2620)">
                <path
                    d="M2.5 7.70853C2.5 7.06093 2.83437 6.45471 3.39435 6.08705L10 1.75L16.6057 6.08705C17.1656 6.45471 17.5 7.06093 17.5 7.70853V16.0303C17.5 17.1181 16.5737 18 15.431 18H4.56897C3.42631 18 2.5 17.1181 2.5 16.0303V7.70853Z"
                    stroke="#404040"
                    strokeWidth="1.50926"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.67241 12.5833C7.67241 12.0394 8.13557 11.5985 8.7069 11.5985H11.2931C11.8644 11.5985 12.3276 12.0394 12.3276 12.5833V18H7.67241V12.5833Z"
                    stroke="#404040"
                    strokeWidth="1.50926"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_717_2620">
                    <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    ),
    Employee: (
        <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_717_436)">
                <path
                    d="M13.25 4.95076C13.25 6.71849 11.7949 8.15152 10 8.15152C8.20507 8.15152 6.75 6.71849 6.75 4.95076C6.75 3.18303 8.20507 1.75 10 1.75C11.7949 1.75 13.25 3.18303 13.25 4.95076Z"
                    stroke="#404040"
                    strokeWidth="1.50926"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.75 16.3996C3.75 13.748 5.93261 11.5985 8.625 11.5985H11.375C14.0674 11.5985 16.25 13.748 16.25 16.3996C16.25 17.2835 15.5225 18 14.625 18H5.375C4.47754 18 3.75 17.2835 3.75 16.3996Z"
                    stroke="#404040"
                    strokeWidth="1.50926"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_717_436">
                    <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    ),
    arrowUp: (
        <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 10.5L8 6.5L12 10.5"
                stroke="#212143"
                strokeWidth="1.20741"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    arrowDown: (
        <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 6.5L8 10.5L12 6.5"
                stroke="#404040"
                strokeWidth="1.20741"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    appointment: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-app-window-icon lucide-app-window"
        >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M10 4v4" />
            <path d="M2 8h20" />
            <path d="M6 4v4" />
        </svg>
    ),
    notification: (
        <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_758_3041)">
                <path
                    d="M4.11584 4.25758C4.28455 2.64323 5.73825 1.5 7.47569 1.5H8.52431C10.2618 1.5 11.7155 2.64323 11.8842 4.25758L12.2348 7.80303C12.3619 9.01954 12.9113 10.2534 13.7994 11.1515C14.2434 11.6005 13.9022 12.5303 13.2477 12.5303H2.75233C2.09777 12.5303 1.75663 11.6005 2.20061 11.1515C3.08866 10.2534 3.63806 9.01954 3.76519 7.80303L4.11584 4.25758Z"
                    stroke="#212143"
                    strokeWidth="1.20741"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.13794 12.5303H9.86207V12.7273C9.86207 13.7063 9.0284 14.5 8.00001 14.5C6.97161 14.5 6.13794 13.7063 6.13794 12.7273V12.5303Z"
                    stroke="#212143"
                    strokeWidth="1.20741"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_758_3041">
                    <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    ),
};

export type IconType = keyof typeof Icons;

export type IconProps = {
    iconName: IconType;
    className?: string;
    onClick?: () => void;
} & SVGProps<SVGElement>;

export default function Icon({ iconName, className, onClick }: IconProps) {
    return (
        <React.Fragment>
            <span className={clsx(className)} onClick={onClick}>
                {Icons[iconName]}
            </span>
        </React.Fragment>
    );
}
