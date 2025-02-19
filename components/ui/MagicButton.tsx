import Link from 'next/link';
import React from 'react';

export default function MagicButton({ title, icon, position, handleClick, otherClasses, href }: {
    title: string;
    icon: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;
    href?: string;
}) {
    const ButtonContent = (
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 border border-red-50 duration-200 hover:border-blue-900 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
        </span>
    );

    return href ? (
        <Link href={href} className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] md:w-60 md:mt-10">
            {ButtonContent}
        </Link>
    ) : (
        <button onClick={handleClick} className="relative inline-flex h-12 w-full  overflow-hidden rounded-lg p-[1px] md:w-60 md:mt-10">
            {ButtonContent}
        </button>
    );
}
