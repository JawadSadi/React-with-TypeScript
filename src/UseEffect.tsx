import React, { useEffect, useState } from "react";

interface DataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const UseEffect = () => {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(function () {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/4"
        );
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.log("The Fetching data ha serror", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <p>ID : {data.id}</p>
          <p>Title : {data.title}</p>
          <p>Completed : {data.completed ? "✔" : "✖"}</p>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};
