"use client";
import { Star } from "lucide-react";
import Image from "next/image";

export const StarRating = ({
  count = 5,
  googleUrl,
}: {
  count: number;
  googleUrl: string;
}) => {
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className={
              index < count
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 hover:opacity-80"
      >
        <Image
          src="/google-icon.svg"
          alt="Google Review"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
};
