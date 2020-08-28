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
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    {...props}>
                    {props.children}
                </div>
            )}
        </Draggable>
    );
};