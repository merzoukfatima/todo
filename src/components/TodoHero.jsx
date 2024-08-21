import React from "react";

const TodoHero = ({ totalTasks, tasksCompleted }) => {
  return (
    <section className="todoHero-section">
      <div>
        <p className="text_large">Task Done</p>
        <p className="text_small">Keep it up</p>
      </div>
      <div>
        {tasksCompleted}/{totalTasks}
      </div>
    </section>
  );
};

export default TodoHero;
