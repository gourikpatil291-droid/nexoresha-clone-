import React from "react";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "NEXORESHA — Analytics & Performance Tracking",
  description: "Real-time analytics and performance tracking to measure, optimize, and grow your digital business with data-driven insights.",
};

export default function AnalyticsPage() {
  return (
    <ServiceDetailPage
      title={
        <>
          Analytics{" "}
          <span className="font-light opacity-75">&amp;</span>
          <br />
          Performance{" "}
          <span className="font-light opacity-75">Tracking</span>
        </>
      }
      breadcrumb="Analytics Services"
      approachTitle={
        <>
          Our{" "}
          <span className="font-light">Approach</span>
          <br />
          and{" "}
          <span className="font-light">Work Specifics</span>
        </>
      }
      approachDescription="We help businesses unlock the full power of their data through comprehensive analytics and performance tracking solutions. By implementing the right tools and frameworks, we give you real-time visibility into user behavior, system performance, and campaign effectiveness. Our data-driven approach ensures every business decision is backed by accurate insights. From setting up tracking infrastructure to building executive dashboards and delivering actionable reports, we make analytics a strategic advantage for your organization."
      accordionItems={[
        {
          title: "WEB AND APP ANALYTICS SETUP",
          content: `We configure and optimize analytics platforms including Google Analytics 4, Mixpanel, and Amplitude to accurately capture user interactions across your web and mobile applications. Proper setup ensures you collect clean, reliable data from day one.\n\nOur analytics setup includes event tracking, conversion funnels, user segmentation, and behavior mapping. We ensure all tags and tracking codes are deployed securely without slowing down your site load times.`
        },
        {
          title: "DASHBOARD CREATION AND DATA VISUALIZATION",
          content: `We build custom, interactive dashboards using tools like Google Looker Studio, Tableau, or Power BI. We consolidate data from multiple sources — including Google Ads, CRM platforms, and databases — into a single, intuitive interface.\n\nOur dashboards display key performance indicators (KPIs) in real-time, helping executive teams, marketers, and product managers monitor performance, track conversion goals, and make informed business decisions instantly.`
        },
        {
          title: "USER BEHAVIOR AND HEATMAP ANALYSIS",
          content: `We implement heatmap and session recording tools like Hotjar or Microsoft Clarity to visualize how users navigate your pages, where they click, and where they get stuck. This behavioral data provides qualitative context to your quantitative analytics.\n\nWe analyze form abandonment, scrolling depths, and navigation friction to identify usability issues, allowing us to recommend data-backed layout and UX changes that improve engagement and conversion rates.`
        },
        {
          title: "CONVERSION RATE OPTIMIZATION (CRO)",
          content: `We run data-driven conversion rate optimization programs to increase the percentage of website visitors who take desired actions. We formulate test hypotheses based on dashboard insights, analytics logs, and behavioral maps.\n\nWe set up and monitor A/B and multivariate tests for headings, button placements, forms, and pricing page designs. We analyze the outcomes to identify winning configurations and scale conversion growth across your platform.`
        }
      ]}
    />
  );
}