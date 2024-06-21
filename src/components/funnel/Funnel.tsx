"use client"
import { useEffect } from "react";
import getUserId from "@/lib/ga";

export default function LeadFunnel({ funnelName }: { funnelName: "ener_beratung" | "ener-sanier" }) {
  
  
  useEffect(() => {
    const heyflow_wrapper = document.getElementsByTagName("heyflow-wrapper")[0];

    const currentUrl = new URL(window.location.href);
    const shortUrl = currentUrl.pathname.substring(1);
    const userId = getUserId();

    if (heyflow_wrapper) {
      const heyflowWrapperElement = document.getElementsByTagName("heyflow-wrapper")[0];
      if (heyflowWrapperElement) {
        heyflowWrapperElement.setAttribute("url-parameters", "utm_source=organic&utm_medium=article-funnel&utm_url=" + shortUrl + "&userId=" + userId);
        heyflowWrapperElement.setAttribute("funnel", funnelName);
      }
    }

  }, [funnelName]);



  return (
    <div id={`funnel`} className="bg-gray-50 border border-neutral-200 p-4 sm:p-10 rounded-2xl m-1">
      {/* <script src="https://eu.clients.heyflow.app/util-maps/heyflow-maps.js?version=0.2.6" async></script> */}
      {/* @ts-expect-error: heyflow-wrapper not native react element */}
      <heyflow-wrapper flow-id={funnelName} style-config='{"width": "100%",  "border-radius": "1rem", "padding": "0.5rem"}'></heyflow-wrapper>
    </div>
  );
}
