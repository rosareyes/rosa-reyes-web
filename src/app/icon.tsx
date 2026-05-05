import { ImageResponse } from 'next/og';

export const size = { width: 48, height: 48 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 10,
          background: 'linear-gradient(135deg, #e8c06a, #c97833)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 600,
          fontSize: 32,
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
