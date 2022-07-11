// https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';

import initialData from './initial-data';
import Column from './column';

const App = () => {
  const [state, setState] = useState(initialData);

  const handleDragEnd = ({ source, destination, draggableId }) => {
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {state.columnOrder.map((columnId, index) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

        return (
          <Column key={column.id} column={column} tasks={tasks} index={index} />
        );
      })}
    </DragDropContext>
  );
};

const root = createRoot(document.getElementById('root'));
// NO Strict mode :(
// https://github.com/atlassian/react-beautiful-dnd/issues/2399#issuecomment-1111169234
root.render(<App />);
