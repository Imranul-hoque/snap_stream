"use client";

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Logo = ({ creator }:{ creator? : boolean }) => {
    return (
      <Link href={"/"} className={cn("lg:flex items-center gap-x-2", !creator && "hidden" )}>
        <Image src={"/logo.svg"} width={40} height={40} alt="Logo" />
        <p className="text-lg italic font-semibold hidden lg:block">Stream</p>
      </Link>
    );
}