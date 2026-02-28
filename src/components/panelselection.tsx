import React from "react";

interface PanelSelectionProps {
  children: React.ReactNode;
  spans?: number[];
  showBorders?: boolean;
  panelGap?: string;
  classNames?: string[];
  rowSpans?: number[];
  borders?: string,
}

const PanelSelection = ({ children, spans = [], rowSpans = [], panelGap="pt-0", classNames = [], borders="" }: PanelSelectionProps) => {
  const childArray = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child)
  );

  const panelCount = spans.length || childArray.length;
  const selectedChildren = childArray.slice(0, panelCount);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 border ${borders}`}>
      {selectedChildren.map((child, i) => {
        const span = spans[i] || 1;
        const rowSpan = rowSpans[i] || 1;
         const className = classNames[i] || "";
        
        return (
          <div
            key={i}
            className={`${panelGap} ${className}`}
            style={{
              gridColumn: `span ${span} / span ${span}`,
              gridRow: `span ${rowSpan} / span ${rowSpan}`
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default PanelSelection;