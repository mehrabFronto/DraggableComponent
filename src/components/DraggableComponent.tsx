import { ReactNode, useEffect, useRef, useState } from 'react';

const DraggableComponent = ({ children }: { children: ReactNode }) => {
  const [isDown, setIsDown] = useState(false);
  const [offset, setOffset] = useState<[number, number]>([0, 0]);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDown(true);
    const element = elementRef.current!;
    setOffset([element.offsetLeft - e.clientX, element.offsetTop - e.clientY]);
    document.body.style.pointerEvents = 'none'; // Disable pointer events for the entire body
  };

  const handleMouseUp = () => {
    setIsDown(false);
    document.body.style.pointerEvents = 'auto'; // Re-enable pointer events for the entire body
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown) return;

    const mousePosition = {
      x: e.clientX,
      y: e.clientY,
    };

    const element = elementRef.current!;
    element.style.left = mousePosition.x + offset[0] + 'px';
    element.style.top = mousePosition.y + offset[1] + 'px';
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDown, offset]);

  return (
    <div
      ref={elementRef}
      onMouseDown={handleMouseDown}
      className="absolute cursor-move select-none">
      {children}
    </div>
  );
};

export default DraggableComponent;
