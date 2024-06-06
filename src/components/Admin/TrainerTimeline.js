import React from 'react';
import data from '../Admin/data.json';
import '../../Styles/TrainerTimeline.scss';

function TrainerTimeline() {
  const { trainers } = data;

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

  // Function to get client data for a given trainer at a given time
  const getClientData = (trainer, time) => {
    return trainer.clients.find(client => time >= client.assignedTime && time < client.assignedTill);
  };

  return (
    <div className="container">
      <div className="timeline">
        <div className="time-slots">
          {timeSlots.map(time => (
            <div key={time} className="time-slot">{time}</div>
          ))}
        </div>

        {/* Render trainer shifts and events */}
        {trainers.map(trainer => (
          <div key={trainer.id} className="trainer">
            <div className="trainer-info">
              <div className="trainer-name">{trainer.name}</div>
              <div className="shift-time">{trainer.shiftFrom} - {trainer.shiftTo}</div>
            </div>
            <div className="events">
              {timeSlots.map(time => {
                const clientData = getClientData(trainer, time);
                const isActiveHour = time >= trainer.shiftFrom && time < trainer.shiftTo;
                return (
                  <div key={`${trainer.id}-${time}`} className={`event ${clientData ? 'active' : ''} ${isActiveHour ? 'shift-active' : ''}`}>
                    {clientData && (
                      <>
                        <div>{clientData.name}</div>                       
                      </>
                    )}
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
