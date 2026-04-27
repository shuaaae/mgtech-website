import { forwardRef, useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type ContainerType = {
  className?: string;
  largeImage?: string;
  name?: string;
  viceChairperson?: string;
  onClick?: () => void;
  isSelected?: boolean;

  /** Style props */
  containerGridColumn?: CSSProperties["gridColumn"];
  containerGridRow?: CSSProperties["gridRow"];
  containerPadding?: CSSProperties["padding"];
};

const Container = forwardRef<HTMLDivElement, ContainerType>(({
  className = "",
  largeImage,
  name,
  viceChairperson,
  onClick,
  isSelected = false,
  containerGridColumn,
  containerGridRow,
  containerPadding,
}, ref) => {
  const containerStyle: CSSProperties = useMemo(() => {
    return {
      gridColumn: containerGridColumn,
      gridRow: containerGridRow,
      padding: containerPadding,
      fontFamily: 'Ethnocentric',
    };
  }, [containerGridColumn, containerGridRow, containerPadding]);


  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-item-spacing-10 col-[2] row-[1] text-center text-[13px] text-color-white-solid ${isSelected ? 'cursor-default' : 'cursor-pointer'} ${className}`}
      style={containerStyle}
      onClick={isSelected ? undefined : onClick}
    >
      <div className={`grid-card w-full relative ${isSelected ? '' : 'cursor-pointer'}`} style={{ height: '255px', flexShrink: 0 }}>
        <Image
          className={`w-full h-full object-cover border-t-8 border-l-8 border-r-8 border-b-0 transition-all duration-200 ${isSelected ? 'border-amber-200 brightness-110' : 'border-amber-300'}`}
          alt=""
          src={largeImage || ""}
          width={241}
          height={255}
        />
        <div className={`grid-card-overlay ${isSelected ? 'grid-card-overlay--active' : ''}`} />
      </div>
      <div className={`flex flex-col items-center gap-1 w-full text-center transition-opacity duration-500 mt-3 ${isSelected ? 'opacity-0' : 'opacity-100'}`}>
        <div
          className="relative leading-tight text-[12px]"
        >
          {name}
        </div>
        <div
          className="relative leading-tight uppercase text-[9.5px]"
        >
          {viceChairperson}
        </div>
      </div>
    </div>
  );
});

Container.displayName = 'Container';

export default Container;
