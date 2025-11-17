import { useEffect, useRef } from "react";
import { createApp } from "vue";

import VueAppVue from "remote-vue/VueApp";

const VueApp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      if (containerRef.current && !appRef.current) {
        appRef.current = createApp(VueAppVue);
        appRef.current.mount(containerRef.current);
      }

      return () => {
        if (appRef.current) {
          appRef.current.unmount();
          appRef.current = null;
        }
      };
    })();
  }, []);

  return <div ref={containerRef}></div>;
};

export default VueApp;
