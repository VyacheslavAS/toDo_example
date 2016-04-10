import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash/lang/isEqual';

// create a "selector creator" that uses lodash.isEqual instead of ===
const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
);

export const tasksSelector = state => state.tasks.tasksObject;

const tasksArraySelector = createDeepEqualSelector(
    [tasksSelector],
    tasks => Object.keys(tasks).map(id => tasks[id])
);

export const sortedTasksSelector = createDeepEqualSelector(
    [tasksArraySelector, tasksSelector],
    tasks => {
        const sortedTasks = tasks.sort((rowPrev, rowNext) => {
            const prev = rowPrev.title.trim().toLowerCase();
            const next = rowNext.title.trim().toLowerCase();

            if (prev > next) return 1;
            else if (prev < next) return -1;
            else return 0;
        });

        return { tasks: sortedTasks };
    }
);
