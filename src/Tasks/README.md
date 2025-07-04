# Implement task list with a reducer

## Steps:
1. Move from setting state to dispatching actions. <br />
 Instead of telling React “what to do” by setting state, you specify “what the user just did” by dispatching “actions” from your event handlers. setTasks will become dispatch (with a type)
2. Write a reducer function.<br />
A reducer function is where you will put your state logic. It takes two arguments, the current state and the action object, and it returns the next state
3. Use the reducer from your component.<br />
instead of useState we need to use useReducer


### Links
https://react.dev/learn/extracting-state-logic-into-a-reducer#step-1-move-from-setting-state-to-dispatching-actions