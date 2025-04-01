"use client";

import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverLink } from "@/pages/IntroPage";
import { HoverCardContent } from "@radix-ui/react-hover-card";
import Image from "next/image";
import { JSX } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const HoverContent = ({
  link,
  icon,
  title,
  description,
  officialsite,
}: HoverLink): JSX.Element => {
  const router: AppRouterInstance = useRouter();

  return (
    <HoverCard>
      <HoverCardTrigger>
        <div
          className="grid place-items-center cursor-pointer"
          onClick={() => router.push(link)}
        >
          <Image src={icon} alt={title} className="size-16 sm:size-20" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 grid place-items-center rounded-lg border border-gray-600 bg-black p-4">
        <div className="space-y-3 text-sm">
          <Button
            variant="link"
            onClick={() => router.push(officialsite)}
            className="text-white font-semibold"
          >
            {title}
          </Button>
          <p>{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverContent;
