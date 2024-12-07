import React from "react";

export const MadeWithLove: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-sm">
      <p
        className="focus-ring group block rounded text-center"
        aria-label="Made with love by Soorria"
      >
        <span className="text">Made with</span>
        <span className="relative inline-block h-5 w-5 align-middle">
          <svg
            className="absolute inset-0 fill-current text-drac-purple"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364l6.364 6.364 6.364-6.364a4.5 4.5 0 000-6.364 4.5 4.5 0 00-6.364 0l-.318.318-.318-.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <svg
            className="absolute inset-0 fill-current text-drac-red animate-ping-slow"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ animationDelay: "150ms" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364l6.364 6.364 6.364-6.364a4.5 4.5 0 000-6.364 4.5 4.5 0 00-6.364 0l-.318.318-.318-.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <svg
            className="absolute inset-0 fill-current text-drac-pink animate-ping-slow"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364l6.364 6.364 6.364-6.364a4.5 4.5 0 000-6.364 4.5 4.5 0 00-6.364 0l-.318.318-.318-.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </span>
        <span className="text">
          by <span className="author">Audrey</span>
        </span>
      </p>
    </div>
  );
};
