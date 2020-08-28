import React from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const DroppableComponent = (onDragEnd: (result: DropResult, provided: ResponderProvided) => void) => 
  (props: any) => 
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'droppableId'}>
          {(provided) => {
              return (
                  <div ref={provided.innerRef} {...provided.droppableProps} {...props}>
                      {props.children}
                      {provided.placeholder}
                  </div>
              );
          }}
      </Droppable>
    </DragDropContext>

export const DraggableComponent = (id: string, index: number) => (props: any) => {

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => {
                return <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                {...props}
                style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}>
                {props.children}
                
            </div>
            }}
        </Draggable>
    );
};

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 1,
    margin: `0 0 ${0}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgrey" : "white",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });