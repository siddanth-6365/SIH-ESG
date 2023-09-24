import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

const Container = () => {
  const [modals, setModals] = useState({});

  const openModal = (modalId) => {
    setModals({ ...modals, [modalId]: true });
  };

  const closeModal = (modalId) => {
    setModals({ ...modals, [modalId]: false });
  };

  const cards = [
    {
      id: 'myModal1',
      title: 'Waste Management - Waste Diversion Rate: ',
      content: 'Measures how effectively waste is recycled or diverted from landfills.',
    },
    {
      id: 'myModal2',
      title: 'Greenhouse Gas Mitigation Plan:',
      content: 'Evaluates the presence of a formal plan to reduce greenhouse gas emissions.',
    },
    {
      id: 'myModal3',
      title: 'Renewable Energy Usage:',
      content: 'Assesses the percentage of energy from renewable sources, compares change over years.',
    },
    {
      id: 'myModal4',
      title: 'Investment in Sustainable Research:',
      content: 'Part of total budget which was used to promote Sustainable Research inside and outside institution',
    },
    {
      id: 'myModal5',
      title: 'Water Management:',
      content: 'Analyzes water use and wastage over years, methods to prevent excess consumption.',
    },
    {
      id: 'myModal6',
      title: 'Student Group for Sustainability:',
      content: 'Reviews the presence and activity of student sustainability groups.',
    },
    {
      id: 'myModal7',
      title: 'Building Design and Construction - Compliance with Green Norms(GRIHA):',
      content: 'Evaluates adherence to eco-friendly building standards(GRIHA) for all new construction.',
    },
    {
      id: 'myModal8',
      title: 'Landscape Management:',
      content: 'Assesses eco-friendly landscaping practices and maintenance of biodiversity.',
    },
    {
      id: 'myModal9',
      title: 'Biodiversity:',
      content: 'Measures tree count and biodiversity conservation efforts for protected areas(if any)',
    }
    ,
    {
      id: 'myModal10',
      title: 'Single-Use Plastic Ban:',
      content: 'Evaluates the depth and implementation of ban on single-use plastics.',
    }
    ,
    {
      id: 'myModal1',
      title: 'Sustainable Procurement:',
      content: 'Reviews eco-friendly procurement practices for food supplies and construction raw materials.',
    },
    {
      id: 'myModal12',
      title: 'Support for Sustainable Transportation: ',
      content: 'Assesses usage and awareness towards environmental friendly modes of tranportation, support measures for EV transportations.',
    },
    {
      id: 'myModal13',
      title: 'Student Survey Methodology',
      content: 'The survey includes 30+ questions across four sections, covering personal info, academics, campus life, and more. Students use a five-point Likert scale for responses, which are the basis for verifying rankings.',
    }
    // Add more card objects here with unique ids, titles, and content
  ];
  return (
    <div className="containerParam">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          content={card.content}
          onClick={() => openModal(card.id, card.content)}
        />
      ))}

      {/* {cards.map((card) => (
        <Modal
          key={card.id}
          id={card.id}
          content={modals[card.id].content}
          onClose={closeModal}
          isOpen={modals[card.id].isOpen}
        />
      ))} */}
    </div>
  );
};

export default Container;
