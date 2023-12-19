import React from 'react';
import './App.css';


const Home = () => {

    return (
        <>
            <main>
                <section className="portofolio text-center mt-40">

                        <h1 className="font-bold">Portofolio <span>Danny</span></h1>


                    <img
                        src="src/assets/ezsn_zsmz_220227-removebg-preview.png"
                        alt="desing anime"
                        className="mx-auto my-4"
                    />
                </section>

                <section>
                    <h2 className={'text-center'}>Présentation </h2>
                    <div className={'grid grid-cols-2 mt-20 container mx-auto'}>
                        <div className={'text-center mt-20'}>
                            <p className={'text-center mb-10'}>
                                Salut, je suis Danny, j'ai 27 ans et je suis développeur web.  J'ai récemment achevé ma formation en développement web chez Human Booster, validant ainsi le titre RNCP niveau 5 (BAC+ 2). Je souhaite désormais mettre en pratiques mes compétences dans le monde professionnel.
                            </p>
                            <a href="src/assets/Uprajay_danny_cv.pdf" download={"Cv"}>
                                <button className="bg-amber-400 hover:bg-amber-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                    <span>Télécharger mon CV</span>
                                </button></a>
                        </div>
                        <div className={"text-center"}>

                        </div>
                    </div>

                </section>

                <section className="projet grid grid-cols-1 text-center justify-center items-center  relative">

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
                                    <div className={'mb-5 flex justify-around'}>
                                        <h3>Angular</h3>
                                        <h3>Symfony</h3>
                                    </div>
                                    <div>


                                        <a href="#" className={"me-4"}>Code</a>
                                        <a href="#">Live démo</a>
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
                                    <div className={'mb-5 flex justify-around'}>
                                        <h3>Symfony</h3>
                                        <h3>Scss</h3>

                                    </div>
                                    <div>


                                        <a href="#" className={"me-4"}>Code</a>
                                        <a href="#">Live démo</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-red-600">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                        <form action="#" className="space-y-8 ">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                            </div>
                            <div>

                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        </form>
                    </div>
                </section>


            </main>
        </>


    );

};

export default Home;