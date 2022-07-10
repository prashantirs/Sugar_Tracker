import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';
import 'font-awesome/css/font-awesome.min.css';
const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => ( 
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem} 
        > 
            <div>
          {goal.text}
          <i className="icon fas fa-trash "/>
          </div>
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
