import { ImageResponse } from 'next/og';

// Next.js App Router picks this up automatically — no metadata config needed.
// Served as /icon.png and injected into <head> as a 32×32 favicon.
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: '#18261A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/*
          SVG S mark — same path as public/favicon.svg.
          ImageResponse supports inline SVG via img[src=data:] but renders
          foreign SVG elements directly in JSX too. Using the path directly
          ensures pixel-perfect match with the SVG version.
        */}
        <svg
          width="21"
          height="18"
          viewBox="11 7 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 20 10.75
               C 20 8.25 18.5 7.25 16 7.25
               C 13.5 7.25 11 8.75 11 11.25
               C 11 13.75 12.5 15.25 15 15.75
               L 17 16.25
               C 19.5 16.75 21 18.25 21 20.75
               C 21 23.25 19.5 24.75 16 24.75
               C 12.5 24.75 11 23.25 11 20.75"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
