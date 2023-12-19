import React from 'react';
import './App.css';
const Projet = () => {


    return(
        <>
          <section className={'projet mt-6 '}>

              <h2>Projets récents</h2>

              <div className={""}>


              <div className={"grid grid-cols-2 container mx-auto gap-5 "}>

              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                  <div
                      className="relative w-5/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                      <img
                          src="src/assets/lové-logo.png"
                          alt="card-image-projetNft" className=" object-cover w-80 h-full" />
                  </div>
                  <div className="p-6">
                      <h6
                          className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                          Lové NFT
                      </h6>
                      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          Projets personnel durant ma formation
                      </h4>
                      <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                      Lové NFT est une application web qui permet de des NFT et bien plus encore...
                      </p>
                      <div>


                      <a href="#" className={"me-4"}>Code</a>
                      <a href="#">Live</a>
                      </div>
                  </div>
              </div>

                  <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                      <div
                          className="relative w-5/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                          <img
                              src="src/assets/mmalogo.PNG"
                              alt="card-image-projetNft" className="object-cover w-80 h-full" />
                      </div>
                      <div className="p-6">
                          <h6
                              className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                              MMA PULSE
                          </h6>
                          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                              Projets que j'ai réalisé durant mon stage
                          </h4>
                          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                              MMA PULSE est un site pour explorer le club, ses sports et plus encore ...
                          </p>
                          <div>


                              <a href="#" className={"me-4"}>Code</a>
                              <a href="#">Live</a>
                          </div>
                      </div>
                  </div>

              </div>
              </div>
          </section>
        </>
    )
};

export default Projet;