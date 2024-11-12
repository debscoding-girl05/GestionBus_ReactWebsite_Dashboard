import React from 'react'
import './Middle.css'

const Middle = () => {
  return (
    <div className="middle section ">
      <div className="justify-center align-middle p-2 ">
        <div className="grid grid-cols-4 gap-4 mt-10 ml-10 mr-10 p-10 rounded-xl bg-blue-400 w-90 ">
          <span className="flex gap-1">
            <h1 className="font-extrabold text-3xl">10+</h1>
            <p className="text-wrap  w-36 font-normal">
              Agences Partout dans le Camroun
            </p>
          </span>
          <span className="flex gap-1">
            <h1 className="font-extrabold text-3xl">4K+</h1>
            <p className="text-wrap w-36 font-normal">
              Personnes qui nous ont fais Confiance
            </p>
          </span>
          <span className="flex gap-1">
            <h1 className="font-extrabold text-3xl text-center">500</h1>
            <p className="text-left w-36 font-normal">
              Bus a Disposition pour vous servir
            </p>
          </span>
          <span className="flex gap-1">
            <h1 className="font-extrabold text-3xl text-center">4.8</h1>
            <p className="text-wrap w-36 font-normal">
              Avis Partager par nos utilisateurs
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Middle
