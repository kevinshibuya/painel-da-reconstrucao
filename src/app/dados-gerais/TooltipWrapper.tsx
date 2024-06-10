/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function TooltipWrapper({ content, img, size }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip content={content} isOpen={isOpen}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={img.src}
          className="caption_tooltip"
          width={size}
          height={size}
        />
      </button>
    </Tooltip>
  );
}
