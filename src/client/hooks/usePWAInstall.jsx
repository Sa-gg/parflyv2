import React from 'react'

const usePwaInstall = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);
  
    useEffect(() => {
      const handleBeforeInstallPrompt = (e) => {
        e.preventDefault();
        console.log("beforeinstallprompt event fired");
        setDeferredPrompt(e);
      };
  
      const handleAppInstalled = () => {
        console.log("PWA was installed");
        setIsInstalled(true);
        setDeferredPrompt(null);
      };
  
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.addEventListener("appinstalled", handleAppInstalled);
  
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true);
      }
  
      return () => {
        window.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt
        );
        window.removeEventListener("appinstalled", handleAppInstalled);
      };
    }, []);
  
    const handleInstallClick = () => {
      if (isInstalled) {
        toast.success("App is already installed");
        return;
      }
  
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          setDeferredPrompt(null);
        });
      } else {
        toast.error("No install prompt available");
      }
    };
  
    return { handleInstallClick, isInstalled };
  };

export default usePwaInstall