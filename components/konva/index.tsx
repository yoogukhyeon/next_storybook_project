import React, { useRef, useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import Konva from 'konva';
import { Stage, Layer, Rect, Circle, Image, Transformer } from 'react-konva';

const Index = () => {
  const stageRef = useRef<Konva.Stage | any>(null);
  const layerRef = useRef<Konva.Layer | any>(null);
  const imageRef = useRef<Konva.Image | any>(null);
  const transformerRef = useRef<Konva.Transformer | any>(null);
  const [shapes, setShapes] = useState<Konva.Shape[] | any>([]);
  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const layer = layerRef.current;
    if (!layer) return;

    const rect = new Konva.Rect({
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      fill: 'red',
      draggable: true,
    });

    const circle = new Konva.Circle({
      x: 200,
      y: 100,
      radius: 50,
      fill: 'blue',
      draggable: true,
    });

    layer.add(rect);
    layer.add(circle);
    setShapes([rect, circle]);
    layer.draw();

    stage.add(layer);

    return () => {
      layer.destroy();
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new window.Image();
        img.src = reader.result as string;
        img.onload = () => {
          const stage = stageRef.current;
          if (!stage) return;

          const layer = layerRef.current;
          if (!layer) return;

          const image = new Konva.Image({
            image: img,
            width: img.width,
            height: img.height,
            draggable: true,
          });

          layer.add(image);
          setShapes((prevShapes: any) => [...prevShapes, image]);
          layer.draw();
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShapeClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const shape = e.target;
    setSelectedShapeId(shape.id());
    if (transformerRef.current) {
      transformerRef.current.nodes([shape]);
      transformerRef.current.getLayer().batchDraw();
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <StyledCanvas width={window.innerWidth} height={window.innerHeight} ref={stageRef} onClick={handleShapeClick}>
        <Layer ref={layerRef}>
          {shapes?.map((shape: any, idx: number) => (
            <Fragment key={idx}>{selectedShapeId === shape.id() && <Transformer ref={transformerRef} node={shape} rotateEnabled={true} />}</Fragment>
          ))}
        </Layer>
      </StyledCanvas>
    </>
  );
};

const StyledCanvas = styled(Stage)`
  border: 1px solid #ccc;
`;

export default Index;
