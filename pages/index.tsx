import { Inter } from 'next/font/google';
import React, { useRef, useEffect, useState } from 'react';
import { styled } from 'styled-components';

import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('@/components/konva/index'), {
  ssr: false,
});
import Konva from 'konva';

export default function Home() {
  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer | null>(null);

  const [selectedNode, setSelectedNode] = useState<Konva.Node | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new window.Image();
        img.src = reader.result as string;
        img.onload = () => {
          const stage = stageRef.current;
          if (!stage) return;

          const layer = new Konva.Layer();
          const photo = new Konva.Image({
            image: img,
            width: img.width,
            height: img.height,
            draggable: true,
          });

          layer.add(photo);
          stage.add(layer);
          layer.draw();

          // Attach transformer when the image is clicked
          photo.on('click', (e) => {
            setSelectedNode(photo);
            if (transformerRef.current) {
              transformerRef.current.nodes([photo]);
              transformerRef.current.getLayer()?.batchDraw();
            }
          });
        };
      };
      reader.readAsDataURL(file);
    });
  };

  const handleResizeIncreaseImage = () => {
    if (selectedNode instanceof Konva.Image) {
      // Resize the image by a factor of 1.2
      selectedNode.scaleX(selectedNode.scaleX() * 1.2);
      selectedNode.scaleY(selectedNode.scaleY() * 1.2);
      selectedNode.getLayer()?.batchDraw();
    } else {
      alert('이미지를 선택해주세요!');
    }
  };

  const handleResizeDecreaseImage = () => {
    if (selectedNode instanceof Konva.Image) {
      // Scale down the image by a factor of 0.8 (1 - 0.2)
      selectedNode.scaleX(selectedNode.scaleX() * 0.8);
      selectedNode.scaleY(selectedNode.scaleY() * 0.8);
      selectedNode.getLayer()?.batchDraw();
    } else {
      alert('이미지를 선택해주세요!');
    }
  };

  return (
    <Wrap>
      <div className="canvas_wrap">
        <h1>My Konva App</h1>
        <div>
          <input type="file" accept="image/*" multiple onChange={handleFileChange} />

          <button onClick={handleResizeIncreaseImage}>이미지 확대</button>
          <button onClick={handleResizeDecreaseImage} style={{ marginLeft: '10px' }}>
            이미지 축소
          </button>
        </div>
        <CanvasWrap>
          <Canvas stageRef={stageRef} transformerRef={transformerRef} />
        </CanvasWrap>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 50px;

  .canvas_wrap {
    overflow: hidden;
  }
`;

const CanvasWrap = styled.div`
  width: 1200px;
  height: 800px;
  border: 1px solid #222;
`;
