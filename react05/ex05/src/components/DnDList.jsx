// src/components/DnDList.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

export default function DnDList({ initial }) {
  const [items, setItems] = useState(initial);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setItems(newItems);
  };

  return (
    <div>
      <h2>Drag & Drop List</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul className="list" ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                  {(prov) => (
                    <li
                      className="list-item"
                      ref={prov.innerRef}
                      {...prov.draggableProps}
                      {...prov.dragHandleProps}
                    >
                      {item.name}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
