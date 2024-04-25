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

  // Function to get client data including assigned till time
  const getClientData = (trainer, time) => {
    const assignedClient = trainer.clients.find(client => client.assignedTime === time);
    if (!assignedClient) return null;
    return {
      name: assignedClient.name,
      duration: assignedClient.assignedFor,
      from: assignedClient.assignedTime,
      till: assignedClient.assignedTill,
      width: calculateWidth(assignedClient.assignedFor)
    };
  };

  // Function to calculate width of event based on duration
  const calculateWidth = (duration) => {
    const hours = parseInt(duration);
    const widthPercentage = (hours / 18) * 100; // Assuming 18-hour timeline
    return `${widthPercentage}vw`;
  };

  // Function to check if there's free time between two events
  const hasFreeTime = (trainer, currentTimeSlotIndex) => {
    const currentSlot = timeSlots[currentTimeSlotIndex];
    const nextSlot = timeSlots[currentTimeSlotIndex + 1];
    const currentClient = trainer.clients.find(client => client.assignedTime === currentSlot);
    const nextClient = trainer.clients.find(client => client.assignedTime === nextSlot);
    if (!currentClient || !nextClient) return true; // If there's no next event, it means there's free time
    return currentClient.assignedTill !== nextClient.assignedTime;
  };

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
              {timeSlots.map((time, index) => {
                const isActiveHour = trainer.shiftFrom <= time && time < trainer.shiftTo;
                const clientData = getClientData(trainer, time);
                const hasNextEvent = index < timeSlots.length - 1 && getClientData(trainer, timeSlots[index + 1]);
                const hasGap = hasNextEvent && hasFreeTime(trainer, index);
                if (!clientData && !hasGap) return null;
                return (
                  <div
                    key={`${trainer.id}-${time}`}
                    className={`event ${isActiveHour ? 'active' : ''}`}
                    style={{ width: clientData ? clientData.width : 'auto' }} // Set width based on duration
                    colSpan={clientData !== null ? 2 : 1} // If clientData is null, merge two cells
                  >
                    {clientData && (
                      <>
                        <div>{clientData.name}</div>
                        <div>{clientData.duration}</div>
                        <div>{clientData.from} - {clientData.till}</div>
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
