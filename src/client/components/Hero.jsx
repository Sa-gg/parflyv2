import React, { useState, useEffect } from "react";
import deliveryGuy from "../../assets/deliveryGuyWithLogo.svg";
import phone from "../../assets/phone.svg";
import background from "../../assets/background.svg";
import { toast } from 'react-toastify'; 
import { MdDownload } from "react-icons/md";

const Hero = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      console.log("beforeinstallprompt event fired");
      setDeferredPrompt(e); // Store in state
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    window.addEventListener("appinstalled", () => {
      console.log("PWA was installed");
      setIsInstalled(true);
      setDeferredPrompt(null); // Clear after install
    });

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", () => setIsInstalled(true));
    };
  }, []);

  const handleInstallClick = () => {
    console.log("Install button clicked");

    if (isInstalled) {
      openPWA();
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    } else {
      console.log("No deferred prompt available");
      openPWA(); // Try opening if installed
    }
  };

  const openPWA = () => {
    // window.location.href = `intent://${window.location.host}/#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.DEFAULT;end;`;
    toast.success('App is already installed');
  };

  return (
    <>
      <div className="relative flex flex-col items-center max-w-screen-xl px-10 mx-auto md:flex-row sm:px-6 md:py-[calc(77px_+_15vh)] py-[calc(77px_+_2vh)]">
        <div className="flex items-center py-10 md:w-1/2 md:pb-20 md:pt-10 md:pr-0 z-10">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl motion-translate-x-in-[-11%] motion-translate-y-in-[-1%] motion-opacity-in-[0%] motion-blur-in-[5px] dark:text-white">
              Deliver
              <span className="font-bold text-primary">Faster</span>
              <span className="text-xl font-semibold rounded-full text-blueGray-500"></span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-text sm:text-lg md:mt-5 md:text-xl md:max-w-3xl motion-scale-in-[0.5] motion-opacity-in-[0%] motion-ease-spring-bouncier">
              On-demand delivery platform. Get your order matched in 3 seconds.
              Experience the fastest and most reliable delivery service tailored
              to meet your needs.
            </p>
            <div className="mt-5 sm:flex md:mt-8">
              <div className="rounded-lg shadow motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px]">
                <a
                  href=""
                  onClick={(event) => event.preventDefault()}
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-primary border border-transparent rounded-lg hover:bg-primary-dark focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
                >
                  Book Now
                </a>
              </div>
              <div className="mt-3 rounded-lg shadow sm:mt-0 sm:ml-3 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-delay-[200ms]">
                <a
                  href=""
                  onClick={(event) => {
                    event.preventDefault();
                    handleInstallClick();
                  }}
                  className="flex gap-2 items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-primary transition duration-150 ease-in-out bg-white border border-transparent rounded-lg hover:text-primary-dark focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
                >
                  <MdDownload />
                  Install PWA App
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-36 md:w-1/2 md:pb-20 md:pt-10">
          <img
            src={background}
            alt="phone svg"
            className="w-[calc(24rem_+_10vw)] h-auto absolute "
          />
          <img
            src={phone}
            alt="phone svg"
            className="w-[calc(24rem_+_10vw)] h-auto absolute -motion-translate-y-loop-[5%] motion-duration-[.5s] motion-ease-spring-smooth "
          />
          <img
            src={deliveryGuy}
            alt="delivery guy svg"
            className="w-[calc(24rem_+_10vw)] h-auto absolute motion-translate-x-in-[-104%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-ease-spring-bouncy motion-rotate-loop-[-20deg] motion-loop-once motion-duration-[2000ms] motion-delay-[350ms] motion-delay-[500ms]/rotate"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
