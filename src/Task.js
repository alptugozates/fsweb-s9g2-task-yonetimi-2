import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const kalanGun = formatDistanceToNow(
    new Date(taskObj.deadline), {
    locale: tr,
    addSuffix: true,
  });
  console.log("kalanGün >", kalanGun)

  const aradakiGun = differenceInDays(new Date(taskObj.deadline), new Date());
  const styling = {
    background: aradakiGun <= 3 ? "#ffd9d4" : "#d4d7ff",
  };

  // const hedefTarih = new Date(2024, 3, 14);

  // // Şu anki tarih
  // const suAnkiTarih = new Date();

  // // Farkı hesapla
  // const gunFarki = differenceInDays(hedefTarih, suAnkiTarih);

  // console.log(`Bugünden itibaren ${gunFarki} gün kaldı.`);

  return (
    <div className="task" >
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span style={styling}>{kalanGun}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      }
    </div >
  );
};


export default Task;
