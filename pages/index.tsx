import { Inter } from 'next/font/google';
import { styled } from 'styled-components';

import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('@/components/konva/index'), {
  ssr: false,
});

export default function Home() {
  return (
    <Wrap>
      <div className="canvas_wrap">
        <h1>My Konva App</h1>
        <Canvas />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid #222;
  padding: 50px;

  .canvas_wrap {
    overflow: hidden;
  }
`;
