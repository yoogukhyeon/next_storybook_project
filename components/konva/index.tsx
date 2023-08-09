import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Stage, Layer, Transformer, Image, Text } from 'react-konva';

interface IProps {
  stageRef: any;
  transformerRef: any;
}

const Index = ({ stageRef, transformerRef }: IProps) => {
  return (
    <StyledCanvas width={1200} height={800} ref={stageRef}>
      <Layer>
        <Transformer ref={transformerRef} />
      </Layer>
    </StyledCanvas>
  );
};

const DivWrap = styled.div``;

const StyledCanvas = styled(Stage)``;

export default Index;
