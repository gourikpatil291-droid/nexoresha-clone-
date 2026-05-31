import React from "react";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "NEXORESHA — High Performance Mobile Applications",
  description: "Custom Android and iOS mobile applications designed for performance, usability, and growth.",
};

export default function MobileAppsPage() {
  return (
    <ServiceDetailPage
      title={
        <>
          High{" "}
          <span className="font-light opacity-75">Performance</span>
          <br />
          Mobile{" "}
          <span className="font-light opacity-75">Applications</span>
        </>
      }
      breadcrumb="Mobile Services"
      approachTitle={
        <>
          Our{" "}
          <span className="font-light">Approach</span>
          <br />
          and{" "}
          <span className="font-light">Work Specifics</span>
        </>
      }
      approachDescription="We build fast, reliable, and scalable mobile applications designed to deliver exceptional user experiences and strong business results. Our apps are optimized for performance, security, and smooth functionality across all devices and platforms. From idea to launch, we focus on clean architecture, efficient code, and modern technologies to ensure quick load times, seamless navigation, and high responsiveness. Whether it's Android, iOS, or cross-platform solutions, our apps are built to handle real-world traffic and future growth with ease."
      accordionItems={[
        {
          title: "NATIVE AND CROSS-PLATFORM DEVELOPMENT",
          content: `We build high-performance native mobile applications specifically designed for Android and iOS platforms, ensuring maximum speed, stability, and seamless user experience. By leveraging platform-specific technologies, we deliver apps that fully utilize device capabilities such as camera, GPS, biometrics, and system-level integrations.\n\nWe also develop cross-platform solutions using frameworks like React Native or Flutter, allowing you to deploy to both major app stores from a single codebase. This approach accelerates time-to-market and reduces development cost while maintaining native-like feel and smooth 60fps animations.`
        },
        {
          title: "UI/UX DESIGN & INTERACTIVE PROTOTYPING",
          content: `Our mobile design process is centered on creating intuitive, human-centered user interfaces that make interaction delightful. We craft comprehensive wireframes, interactive user flows, and polished high-fidelity UI designs optimized for various screen resolutions and touch states.\n\nWe conduct user testing and sensory prototyping to refine layouts, gesture controls, and transition animations, ensuring your users enjoy a cohesive, visually stunning, and accessible interface from the first click.`
        },
        {
          title: "API INTEGRATION & REAL-TIME DATA SYNC",
          content: `We integrate robust RESTful and GraphQL APIs to sync your mobile apps with central cloud servers, databases, and third-party systems. We implement local storage, secure caching mechanisms, and offline sync strategies so the app remains usable even with spotty connectivity.\n\nWe optimize payloads, push notifications, and authentication schemes to keep communication fast and secure, protecting sensitive user data while maintaining low battery and network bandwidth usage.`
        },
        {
          title: "APP STORE DEPLOYMENT AND COMPLIANCE",
          content: `We guide your application through the rigorous review processes of both the Apple App Store and Google Play Store. We manage provisioning profiles, developer accounts, build configurations, and app store listings, including SEO-optimized descriptions and high-fidelity screenshots.\n\nOur team ensures all app privacy requirements, developer guidelines, and device-specific hardware rules are fully met, securing a smooth approval and launch phase for your product.`
        }
      ]}
    />
  );
}