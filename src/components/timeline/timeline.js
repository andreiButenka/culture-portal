import React from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const TimeLine = ({ timeLine }) => {
    return (
        <Timeline lineColor={'#ddd'}>
        {timeLine.map(({ node: item }) => (
        <TimelineItem
          key={item.key}
          dateText={item.period}
          dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
        <p>
          {item.action}
        </p>
        </TimelineItem>
      ))}
      </Timeline>
    );
  };
  export default TimeLine;