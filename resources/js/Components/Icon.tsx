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
            <g clip-path="url(#clip0_717_2620)">
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
