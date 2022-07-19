import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounteters = counters.filter((c) => c.id !== id);
    setCounters(newCounteters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  const hadnleUpdateValues = (sign) => {
    const newValeu = (id) => {
      setCounters((prevState) =>
        prevState.map((count) => {
          if (count.id === id) count.value += Number(`${sign}1`);
          return count;
        })
      );
    };
    return newValeu;
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onIncrement={hadnleUpdateValues("+")}
          onDecrement={hadnleUpdateValues("-")}
          onDelete={handleDelete}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
