const DARK_BLOBS = [
  {
    id: 1,
    style: {
      width: 950, height: 950,
      left: '-18%', top: '-22%',
      background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 68%)',
      animationName: 'blob-a',
      animationDuration: '22s',
      animationDelay: '0s',
    },
  },
  {
    id: 2,
    style: {
      width: 750, height: 750,
      right: '-12%', top: '8%',
      background: 'radial-gradient(circle, rgba(99,102,241,0.062) 0%, transparent 68%)',
      animationName: 'blob-b',
      animationDuration: '28s',
      animationDelay: '5s',
    },
  },
  {
    id: 3,
    style: {
      width: 680, height: 680,
      left: '-5%', bottom: '0%',
      background: 'radial-gradient(circle, rgba(139,92,246,0.055) 0%, transparent 68%)',
      animationName: 'blob-c',
      animationDuration: '20s',
      animationDelay: '10s',
    },
  },
  {
    id: 4,
    style: {
      width: 620, height: 620,
      right: '2%', top: '42%',
      background: 'radial-gradient(circle, rgba(34,211,238,0.045) 0%, transparent 68%)',
      animationName: 'blob-d',
      animationDuration: '34s',
      animationDelay: '7s',
    },
  },
  {
    id: 5,
    style: {
      width: 500, height: 500,
      left: '30%', top: '55%',
      background: 'radial-gradient(circle, rgba(99,102,241,0.038) 0%, transparent 68%)',
      animationName: 'blob-a',
      animationDuration: '26s',
      animationDelay: '14s',
    },
  },
];

const LIGHT_BLOBS = [
  {
    id: 1,
    style: {
      width: 620, height: 620,
      left: '-10%', top: '-14%',
      background: 'radial-gradient(circle, rgba(2,132,199,0.04) 0%, transparent 70%)',
      animationName: 'blob-a',
      animationDuration: '24s',
      animationDelay: '0s',
    },
  },
  {
    id: 2,
    style: {
      width: 480, height: 480,
      right: '-5%', top: '22%',
      background: 'radial-gradient(circle, rgba(99,102,241,0.025) 0%, transparent 70%)',
      animationName: 'blob-d',
      animationDuration: '30s',
      animationDelay: '9s',
    },
  },
];

export default function BackgroundMesh({ isDark }) {
  const blobs = isDark ? DARK_BLOBS : LIGHT_BLOBS;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {blobs.map((b) => (
        <div
          key={b.id}
          style={{
            position: 'absolute',
            width: b.style.width,
            height: b.style.height,
            left: b.style.left,
            right: b.style.right,
            top: b.style.top,
            bottom: b.style.bottom,
            borderRadius: '50%',
            background: b.style.background,
            filter: 'blur(60px)',
            willChange: 'transform',
            animationName: b.style.animationName,
            animationDuration: b.style.animationDuration,
            animationDelay: b.style.animationDelay,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationFillMode: 'both',
          }}
        />
      ))}
    </div>
  );
}
