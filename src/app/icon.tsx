import { ImageResponse } from 'next/og';

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
          background: 'linear-gradient(135deg, #e8c06a, #c97833)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 600,
          fontSize: 21,
          color: '#0B0D10',
          paddingBottom: 2,
        }}
      >
        r
      </div>
    ),
    { ...size },
  );
}
