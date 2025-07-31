import clsx from "clsx";
import React, { SVGProps } from "react";

const Icons = {
    dashboard: (
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
    employee: (
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
    administration: (
        <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.0985 6.10345L9.12879 3H3.2197C2.13186 3 1.25 3.92631 1.25 5.06897V6.10345M11.0985 6.10345H15.5303C16.6181 6.10345 17.5 7.02976 17.5 8.17241V15.931C17.5 17.0737 16.6181 18 15.5303 18H3.2197C2.13186 18 1.25 17.0737 1.25 15.931V6.10345M11.0985 6.10345H1.25"
                stroke="#404040"
                strokeWidth="1.50926"
                strokeLinejoin="round"
            />
        </svg>
    ),
    department: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-section-icon lucide-section"
        >
            <path d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" />
            <path d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" />
        </svg>
    ),
    action: (
        <svg
            width="4"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.28516 17.3604C2.47755 17.3604 2.87988 17.6009 2.87988 18.2275C2.87977 18.854 2.47753 19.0947 2.28516 19.0947C2.09279 19.0947 1.69054 18.854 1.69043 18.2275C1.69043 17.6009 2.09276 17.3604 2.28516 17.3604ZM2.28516 9.38281C2.47755 9.38281 2.87988 9.62337 2.87988 10.25C2.87988 10.8766 2.47755 11.1172 2.28516 11.1172C2.09276 11.1172 1.69043 10.8766 1.69043 10.25C1.69043 9.62337 2.09276 9.38281 2.28516 9.38281ZM2.28516 1.40527C2.47753 1.40527 2.87977 1.64603 2.87988 2.27246C2.87988 2.89909 2.47755 3.13965 2.28516 3.13965C2.09276 3.13965 1.69043 2.89909 1.69043 2.27246C1.69054 1.64603 2.09279 1.40527 2.28516 1.40527Z"
                stroke="#404040"
                strokeWidth="1.81111"
                strokeLinejoin="round"
            />
        </svg>
    ),
    jobDesk: (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5152 13.8521V16.3448C16.5152 16.9242 16.5152 17.2139 16.4078 17.4352C16.3134 17.6298 16.1627 17.7881 15.9774 17.8872C15.7667 18 15.491 18 14.9394 18H3.81061C3.25904 18 2.98326 18 2.77259 17.8872C2.58727 17.7881 2.43661 17.6298 2.34219 17.4352C2.23485 17.2139 2.23485 16.9242 2.23485 16.3448V13.8521M12.5758 6.10345V4.65517C12.5758 4.07581 12.5758 3.78613 12.4684 3.56484C12.374 3.37019 12.2233 3.21193 12.038 3.11275C11.8274 3 11.5516 3 11 3H7.75C7.19843 3 6.92265 3 6.71198 3.11275C6.52667 3.21193 6.37601 3.37019 6.28158 3.56484C6.17424 3.78613 6.17424 4.07581 6.17424 4.65517V6.10345M11.5909 12.3103V14.8966M7.15909 12.3103V14.8966M2.82576 13.8621H15.9242C16.4758 13.8621 16.7516 13.8621 16.9623 13.7493C17.1476 13.6501 17.2982 13.4919 17.3927 13.2972C17.5 13.0759 17.5 12.7863 17.5 12.2069V7.75862C17.5 7.17926 17.5 6.88957 17.3927 6.66829C17.2982 6.47364 17.1476 6.31538 16.9623 6.2162C16.7516 6.10345 16.4758 6.10345 15.9242 6.10345H2.82576C2.27419 6.10345 1.99841 6.10345 1.78774 6.2162C1.60243 6.31538 1.45176 6.47364 1.35734 6.66829C1.25 6.88957 1.25 7.17926 1.25 7.75862V12.2069C1.25 12.7863 1.25 13.0759 1.35734 13.2972C1.45176 13.4919 1.60243 13.6501 1.78774 13.7493C1.99841 13.8621 2.27419 13.8621 2.82576 13.8621Z" stroke="#404040" strokeWidth="1.50926" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    ),
    leave: (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_814_2271)">
                <path d="M1.25 18L1.25 1.75M4.20455 9.875L17.5 9.875M4.20455 9.875L8.14394 14.0606M4.20455 9.875L8.14394 5.68939" stroke="#404040" strokeWidth="1.50926" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_814_2271">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>

    ),
    attendance: (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_814_2278)">
                <path d="M9.12879 5.68939V10.1212H11.5909M17.5 9.875C17.5 14.3623 13.8623 18 9.375 18C4.88769 18 1.25 14.3623 1.25 9.875C1.25 5.38769 4.88769 1.75 9.375 1.75C13.8623 1.75 17.5 5.38769 17.5 9.875Z" stroke="#404040" strokeWidth="1.50926" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_814_2278">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>

    ),
    settings: (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_814_2305)">
                <path d="M11.3447 3.22727C11.3447 2.4114 10.6833 1.75 9.86742 1.75H8.88258C8.0667 1.75 7.4053 2.4114 7.4053 3.22727V3.93093C7.4053 4.36963 6.87489 4.58933 6.56468 4.27912L6.06714 3.78158C5.49023 3.20467 4.55487 3.20467 3.97796 3.78158L3.28157 4.47797C2.70465 5.05488 2.70465 5.99024 3.28157 6.56715L3.7791 7.06468C4.08931 7.37489 3.86961 7.9053 3.4309 7.9053L2.72727 7.9053C1.9114 7.9053 1.25 8.5667 1.25 9.38257L1.25 10.3674C1.25 11.1833 1.9114 11.8447 2.72727 11.8447H3.43087C3.86958 11.8447 4.08928 12.3751 3.77907 12.6853L3.28156 13.1828C2.70465 13.7597 2.70465 14.6951 3.28156 15.272L3.97795 15.9684C4.55486 16.5453 5.49022 16.5453 6.06713 15.9684L6.56468 15.4708C6.87489 15.1606 7.4053 15.3803 7.4053 15.819V16.5227C7.4053 17.3386 8.0667 18 8.88258 18H9.86742C10.6833 18 11.3447 17.3386 11.3447 16.5227V15.8191C11.3447 15.3804 11.8751 15.1607 12.1853 15.4709L12.6829 15.9685C13.2598 16.5454 14.1951 16.5454 14.7721 15.9685L15.4684 15.2721C16.0454 14.6952 16.0454 13.7598 15.4684 13.1829L14.9709 12.6853C14.6607 12.3751 14.8804 11.8447 15.3191 11.8447H16.0227C16.8386 11.8447 17.5 11.1833 17.5 10.3674V9.38258C17.5 8.5667 16.8386 7.9053 16.0227 7.9053L15.319 7.9053C14.8803 7.9053 14.6606 7.37489 14.9708 7.06468L15.4684 6.56709C16.0453 5.99018 16.0453 5.05482 15.4684 4.47791L14.772 3.78152C14.1951 3.20461 13.2598 3.20461 12.6829 3.78152L12.1853 4.27907C11.8751 4.58928 11.3447 4.36957 11.3447 3.93087V3.22727Z" stroke="#404040" strokeWidth="1.50926" strokeLinejoin="round" />
                <path d="M12.0833 9.875C12.0833 11.3708 10.8708 12.5833 9.375 12.5833C7.87923 12.5833 6.66667 11.3708 6.66667 9.875C6.66667 8.37923 7.87923 7.16667 9.375 7.16667C10.8708 7.16667 12.0833 8.37923 12.0833 9.875Z" stroke="#404040" strokeWidth="1.50926" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_814_2305">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>

    )
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
