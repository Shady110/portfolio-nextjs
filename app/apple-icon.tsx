import { ImageResponse } from 'next/og';

// Served as /apple-icon.png — used by iOS Safari "Add to Home Screen".
// 180×180 is the standard Apple touch icon size.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          // iOS adds its own rounded mask — no need to over-round here.
          // Using 38px (≈21%) to match standard iOS corner radius feel.
          borderRadius: 38,
          background: '#18261A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Same S path, scaled up proportionally to 180px canvas */}
        <svg
          width="112"
          height="98"
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
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
