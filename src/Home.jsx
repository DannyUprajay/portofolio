import React from 'react';
import './App.css';


const Home = () => {

    return (
        <>
            <main>
                <section className="portofolio text-center ">

                        <h1 className="font-bold ">Portofolio <span>Danny</span></h1>


                    <img
                        src="src/assets/ezsn_zsmz_220227-removebg-preview.png"
                        alt="desing anime"
                        className="mx-auto my-4"
                    />

                </section>

                <section className={"presentation"}>
                    <h2 className={'text-center'}>Présentation </h2>
                    <div className={'grid grid-cols-2 mt-20 container mx-auto'}>
                        <div className={'text-center mt-20'}>
                            <p className={'text-center mb-10'}>
                              <span>Salut</span>, je m'appelle Danny, j'ai 27 ans et je suis développeur web.  J'ai récemment achevé ma formation en développement web chez Human Booster, validant ainsi le titre RNCP niveau 5 (BAC+ 2). Je souhaite désormais mettre en pratiques mes compétences dans le monde professionnel.
                            </p>
                            <p className={'mb-10'} >| Technologies :  <i
                                className="fa-brands fa-symfony"></i> <i className="fa-brands fa-angular"></i> <i className="fa-brands fa-react"></i> <i className="fa-solid fa-database"></i>
                                <i className="fa-brands fa-bootstrap"></i> <i className="fa-brands fa-figma"></i> |</p>
                            <a href="src/assets/Uprajay_danny_cv.pdf" download={"Cv"}>
                                <button className="font-bold py-2 px-4 rounded inline-flex items-center">
                                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                    <span>Télécharger mon CV</span>
                                </button></a>
                        </div>
                        <div className={"text-center flex items-center justify-center"}>
                            <img src="https://i.pinimg.com/originals/6a/72/7f/6a727fbad9da6105c529b6a9dacd2826.gif" alt=""/>
                        </div>
                    </div>

                </section>


                <section className="projet grid grid-cols-1 text-center justify-center items-center  relative">

                    <h2 className={"text-white text-start"}>Projets récents</h2>

                    <div className={"flex justify-center"}>
                        <h5>Lové NFT Lové NFT</h5>

                        <div className={"grid grid-cols-1 justify-center items-center gap-5 "}>

                            <div className="card relative flex bg-clip-border rounded-xl bg-white text-gray-700 border-white shadow-md w-full max-w-[48rem] flex-row">

                                <div
                                    className="relative w-5/5 m-0 overflow-hidden text-gray-700 rounded-r-none bg-clip-border rounded-xl shrink-0">
                                    <img
                                        src="src/assets/lové-logo.png"
                                        alt="card-image-projetNft" className=" object-cover w-80 h-full" />
                                </div>

                                <div className="p-6 bg-black text-white">
                                    {/*<h6*/}
                                    {/*    className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase">*/}
                                    {/*    Lové NFT*/}
                                    {/*</h6>*/}
                                    {/*<h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">*/}
                                    {/*    Projets personnel durant ma formation*/}
                                    {/*</h4>*/}
                                    {/*<p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed ">*/}
                                    {/*    Lové NFT est une application web qui permet de des NFT et bien plus encore...*/}
                                    {/*</p>*/}
                                    <div className={'mb-5 flex justify-around'}>
                                        <h3>Angular</h3>
                                        <h3>Typescript</h3>
                                        <h3>Symfony</h3>
                                    </div>
                                    <div>


                                        <a href="https://github.com/DannyUprajay/Angular_NFT_HOME" target="_blank" rel="noopener noreferrer" className={"me-4 font-bold"}>Code <small>(front Angular)</small></a>
                                        <a  href="https://github.com/DannyUprajay/NFT_business_case" target="_blank" rel="noopener noreferrer" className={"me-4 font-bold"}>Code <small>(Back API Symfony)</small> </a>
                                        <a className={'font-bold'} href="#">Live démo</a>
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


                                        <a href="https://github.com/DannyUprajay/Projet-stage" target="_blank" rel="noopener noreferrer" className={"me-4 font-bold"}>Code</a>
                                        <a href="#" className={'font-bold'}>Live démo</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg-amber-400" id="contact">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="mb-4">
                            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                                <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                                    Contact
                                </p>
                                <h2
                                    className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                                    Get in Touch
                                </h2>
                                <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
                                    dictumst
                                </p>
                            </div>
                        </div>
                        <div className="flex items-stretch justify-center">
                            <div className="grid md:grid-cols-2">
                                <div className="h-full pr-6">
                                    <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                        Class aptent taciti sociosqu ad
                                        litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                                        sagittis ante, ac tincidunt sem venenatis ut.
                                    </p>
                                    <ul className="mb-6 md:mb-0">
                                        <li className="flex">
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" className="h-6 w-6">
                                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                    <path
                                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Adresse :
                                                </h3>
                                                <p className="text-gray-600 dark:text-slate-400">20 rue de la république</p>
                                                <p className="text-gray-600 dark:text-slate-400">69190, saint-fons</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" className="h-6 w-6">
                                                    <path
                                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                    </path>
                                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                                </h3>
                                                <p className="text-gray-600 dark:text-slate-400">Mobile: 07-67-41-39-01</p>
                                                <p className="text-gray-600 dark:text-slate-400">E-mail: danny.uprajay@gmail.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                    <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                                    <form id="contactForm">
                                        <div className="mb-6">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                                </div>
                                                <div class="mx-0 mb-1 sm:mb-4">
                                                    <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                                </div>
                                            </div>
                                            <div class="mx-0 mb-1 sm:mb-4">
                                                <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </>


    );

};

export default Home;