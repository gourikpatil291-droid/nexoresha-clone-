import React from "react";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "NEXORESHA — Reliable Maintenance & Support",
  description: "Dependable maintenance and support services to keep your applications and systems running smoothly at all times.",
};

export default function MaintenancePage() {
  return (
    <ServiceDetailPage
      title={
        <>
          Reliable{" "}
          <span className="font-light opacity-75">Maintenance</span>
          <br />
          and{" "}
          <span className="font-light opacity-75">Support</span>
        </>
      }
      breadcrumb="Maintenance Services"
      approachTitle={
        <>
          Our{" "}
          <span className="font-light">Approach</span>
          <br />
          and{" "}
          <span className="font-light">Work Specifics</span>
        </>
      }
      approachDescription="We provide dependable maintenance and support services to ensure your applications and systems run smoothly at all times. Our team proactively monitors performance, fixes bugs, applies updates, and resolves issues quickly to minimize downtime and keep your business operations uninterrupted. With regular health checks and system optimization, we ensure long-term stability and consistent performance. Our support services are designed to grow with your business, offering flexible plans that include feature enhancements, security updates, and technical assistance whenever needed."
      accordionItems={[
        {
          title: "BUG FIXING AND ISSUE RESOLUTION",
          content: `We provide fast and effective bug fixing services to identify, diagnose, and resolve issues across your applications and systems. Using structured debugging, logging, and root-cause analysis, we ensure that problems are not just patched but permanently fixed to prevent repeat failures and improve application reliability.\n\nOur ongoing support team stands ready to respond to runtime errors and functional issues. We prioritize tickets based on severity, ensuring business-critical issues are addressed immediately, keeping your operations smooth and your users happy.`
        },
        {
          title: "PERFORMANCE TUNING AND HEALTH CHECKS",
          content: `We perform regular health audits and performance optimization to ensure your systems are running at peak efficiency. This includes analyzing database queries, optimizing server configurations, checking CPU and memory utilization, and identifying bottlenecks in your codebase.\n\nThrough continuous performance tuning, we help lower infrastructure costs, improve response times, and prevent unexpected system degradation, ensuring your software remains agile and responsive under heavy loads.`
        },
        {
          title: "SECURITY UPDATES AND COMPLIANCE",
          content: `We actively protect your platforms by applying the latest security patches, updates, and package upgrades. Our team conducts regular vulnerability scans, reviews authentication logs, and ensures all communication protocols are encrypted and secure.\n\nWe also help maintain compliance with data privacy regulations such as GDPR or HIPAA, implementing required security controls and access restrictions so your business and users remain fully protected.`
        },
        {
          title: "FEATURE ENHANCEMENTS AND CRITICAL UPDATES",
          content: `As your business evolves, your software needs to adapt. We provide ongoing development support to implement new feature requests, modify existing workflows, and keep your software aligned with your changing business requirements.\n\nWe ensure all minor updates and database migrations are handled seamlessly without interrupting your production environment, ensuring your platform continues to deliver value to your users.`
        }
      ]}
    />
  );
}