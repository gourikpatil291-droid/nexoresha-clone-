import React from "react";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "NEXORESHA — Website Design and Development",
  description: "Premium website design and development services to build fast, secure, and scalable web applications tailored to your business.",
};

export default function WebDesignPage() {
  return (
    <ServiceDetailPage
      title={
        <>
          Website{" "}
          <span className="font-light opacity-75">Design</span>
          <br />
          and{" "}
          <span className="font-light opacity-75">Development</span>
        </>
      }
      breadcrumb="Web Design & Development"
      approachTitle={
        <>
          Our{" "}
          <span className="font-light">Approach</span>
          <br />
          and{" "}
          <span className="font-light">Work Specifics</span>
        </>
      }
      approachDescription="We design and develop high-performance websites and web applications tailored to your brand, audience, and business goals. Our team combines creative design with robust engineering to deliver digital experiences that are fast, secure, scalable, and visually compelling. From landing pages to complex enterprise platforms, we follow modern development practices including responsive design, accessibility standards, and performance optimization to ensure your web presence stands out and delivers real results."
      accordionItems={[
        {
          title: "CUSTOM WEB DESIGN & UI/UX",
          content: `We create bespoke website designs that reflect your brand identity and engage your target audience. Through detailed user research, wireframing, and prototyping, we build interfaces that are both visually stunning and highly intuitive to use.\n\nOur UI/UX process focuses on user journeys, conversion optimization, and accessibility. Every detail is refined to guarantee that your brand stands out, with custom components, typographic hierarchies, and micro-interactions that elevate your product's appeal.`
        },
        {
          title: "FRONTEND & BACKEND ARCHITECTURE",
          content: `We implement modern frontend technologies like React and Next.js alongside reliable backend architectures to build fast, secure, and dynamic web applications. We set up robust database schemas, write clean API endpoints, and structure our code to support modular development.\n\nBy focusing on modular components, server-side rendering, and clean separation of concerns, we build systems that are easily maintainable and can handle growing traffic spikes without compromising on stability.`
        },
        {
          title: "RESPONSIVE & MOBILE-FIRST LAYOUTS",
          content: `We build interfaces that adapt beautifully to all screen sizes — from large desktop monitors to tablets and smartphones. We follow a mobile-first design philosophy, ensuring the user experience is fluid, readable, and responsive on all devices.\n\nWe optimize image assets, configure flexible grid systems, and write device-specific CSS overrides to make sure your site loads fast and looks polished, no matter what browser or hardware your audience uses.`
        },
        {
          title: "SEO & PERFORMANCE ENHANCEMENTS",
          content: `A beautiful website is only effective if it can be found. We build websites with search engine visibility in mind, optimizing semantic markup, loading speeds, meta tags, and structured schema data from the ground up.\n\nWe run rigorous performance audits using tools like Lighthouse to optimize page load speeds, minimize bundle sizes, configure proper caching headers, and secure high-performance hosting configurations.`
        }
      ]}
    />
  );
}