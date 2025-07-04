                          // (current state, payload)
export function tasksReducer(tasks, action) {
  //returns the new state
    if (action.type === 'added') {
      return [
        ...tasks,
        {
          id: action.id,
          name: action.name,
          done: false,
        },
      ];
    } else if (action.type === 'edited') {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    } else if (action.type === 'deleted') {
      return tasks.filter((t) => t.id !== action.id);
    } else {
      throw Error('Unknown action: ' + action.type);
    }
  }