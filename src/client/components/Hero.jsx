import React, { useState, useEffect } from 'react';
import deliveryGuy from "../../assets/deliveryGuyWithLogo.svg";
import phone from "../../assets/phone.svg";
import background from "../../assets/background.svg";

const Hero = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      console.log('beforeinstallprompt event fired');
      setDeferredPrompt(e); // Store in state
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      setIsInstalled(true);
      setDeferredPrompt(null); // Clear after install
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', () => setIsInstalled(true));
    };
  }, []);

  const handleInstallClick = () => {
    console.log('Install button clicked');
    if (isInstalled) {
      alert('App already installed');
      return;
    }
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null); // Reset after use
      });
    } else {
      alert('No install prompt available. Try refreshing the page or checking browser settings.');
      console.log('No deferred prompt available');
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center max-w-screen-xl px-10 mx-auto md:flex-row sm:px-6 md:py-[calc(77px_+_15vh)] py-[calc(77px_+_2vh)]">
        <div className="flex items-center py-10 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
              Deliver
              <span className="font-bold text-primary">Faster</span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              On-demand delivery platform. Get your order matched in 3 seconds. Experience the fastest and most reliable delivery service tailored to meet your needs.
            </p>
            <div className="mt-5 sm:flex md:mt-8">
              <div className="rounded-md shadow">
                <a href="#" onClick={(event) => event.preventDefault()} className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white bg-primary border border-transparent rounded-md hover:bg-primary-dark md:py-4 md:text-lg md:px-10">
                  Book Now
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#" onClick={(event) => { event.preventDefault(); handleInstallClick(); }} className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-primary bg-white border border-transparent rounded-md hover:text-primary-dark md:py-4 md:text-lg md:px-10">
                  Install PWA App
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-36 md:w-1/2 md:pb-20 md:pt-10">
          <img src={background} alt="background" className="w-[calc(24rem_+_10vw)] h-auto absolute" />
          <img src={phone} alt="phone" className="w-[calc(24rem_+_10vw)] h-auto absolute" />
          <img src={deliveryGuy} alt="delivery guy" className="w-[calc(24rem_+_10vw)] h-auto absolute" />
        </div>
      </div>
    </>
  );
}

export default Hero;
