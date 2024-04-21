import React from 'react';
import data from '../Admin/data.json';
import '../../Styles/TrainerTimeline.scss';

function TrainerTimeline() {
  const { trainers } = data;

  // Function to generate time slots from 00:00 to 17:59
  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 6; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 60) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        timeSlots.push(time);
      }
    }
    return timeSlots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="container">
      <div className="timeline">
        {/* Render time slots */}
        <div className="time-slots">
          {timeSlots.map(time => (
            <div key={time} className="time-slot">{time}</div>
          ))}
        </div>

        {/* Render trainers and their assigned clients */}
        {trainers.map(trainer => (
          <div key={trainer.id} className="trainer">
            <div className="trainer-info">
              <div className="trainer-name">{trainer.name}</div>
              <div className="shift-time">{trainer.shiftFrom} - {trainer.shiftTo}</div>
            </div>
            <div className="events">
              {timeSlots.map(time => {
                const assignedClient = trainer.clients.find(client => client.assignedTime === time);
                const isActiveHour = trainer.shiftFrom <= time && time < trainer.shiftTo;
                const isAssignedAndActive = assignedClient && isActiveHour;
                return (
                  <div key={time} className={`event ${assignedClient ? 'assigned' : ''} ${isActiveHour ? 'active' : ''} ${isAssignedAndActive ? 'assigned-active' : ''}`}>
                    {assignedClient ? assignedClient.name : ''}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainerTimeline;
