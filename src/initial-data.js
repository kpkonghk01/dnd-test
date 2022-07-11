const initialData = {
  tasks: {
    task1: { id: 'task1', content: 'Take out the garbage' },
    task2: { id: 'task2', content: 'Take out the' },
    task3: { id: 'task3', content: 'Take out' },
    task4: { id: 'task4', content: 'Take' },
  },
  columns: {
    column1: {
      id: 'column1',
      title: 'Todo',
      taskIds: ['task1', 'task2', 'task3'],
    },
    column2: { id: 'column2', title: 'Done', taskIds: ['task4'] },
  },
  columnOrder: ['column1', 'column2'],
  // columnOrder: ['column1'],
};

export default initialData;
