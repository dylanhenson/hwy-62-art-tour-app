import React, { useState, useEffect } from "react";

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  textClassName?: string;
  showText?: boolean;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export default function SafeImage({
  src,
  alt,
  className,
  fallbackClassName = "",
  textClassName = "text-[10px]",
  showText = true,
  onLoad,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  // Reset error state if src changes
  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-red-50 text-red-600 border border-red-200 p-1 font-mono uppercase font-bold text-center select-none w-full h-full ${fallbackClassName}`}
        title="Image Not Found"
      >
        {showText ? (
          <span className={`${textClassName} leading-tight`}>Image Not Found</span>
        ) : (
          <span className="text-[10px] leading-none text-red-600">N/A</span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      className={className}
      onError={() => setHasError(true)}
      onLoad={onLoad}
    />
  );
}
