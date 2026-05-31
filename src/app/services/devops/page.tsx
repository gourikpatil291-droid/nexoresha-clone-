import React from "react";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "NEXORESHA — DevOps Automation and Deployment",
  description: "End-to-end DevOps automation and deployment services to reduce downtime, accelerate delivery, and scale with confidence.",
};

export default function DevOpsPage() {
  return (
    <ServiceDetailPage
      title={
        <>
          DevOps{" "}
          <span className="font-light opacity-75">Automation</span>
          <br />
          and{" "}
          <span className="font-light opacity-75">Deployment</span>
        </>
      }
      breadcrumb="DevOps Services"
      approachTitle={
        <>
          Our{" "}
          <span className="font-light">Approach</span>
          <br />
          and{" "}
          <span className="font-light">Work Specifics</span>
        </>
      }
      approachDescription="We build and manage automated DevOps pipelines that accelerate software delivery, improve system reliability, and reduce operational overhead. From CI/CD automation to cloud infrastructure provisioning, we help your team ship faster with confidence. Our DevOps approach bridges the gap between development and operations, enabling seamless collaboration, faster deployments, and proactive monitoring. We use industry-leading tools and best practices to create resilient, scalable infrastructure that grows with your business."
      accordionItems={[
        {
          title: "CI/CD PIPELINE AUTOMATION",
          content: `We design and implement continuous integration and continuous deployment pipelines that automate the build, test, and release process. By automating repetitive tasks and enforcing quality gates, we enable your team to ship code faster and with greater confidence.\n\nOur CI/CD pipelines include automated testing, code quality analysis, vulnerability scanning, and seamless deployment triggers. This ensures that every update is verified and ready for production, reducing the risk of manual deployment errors.`
        },
        {
          title: "INFRASTRUCTURE AS CODE (IAC)",
          content: `We provision and manage your cloud infrastructure using code tools like Terraform, CloudFormation, or Ansible. By defining servers, databases, networking, and security policies in declarative files, we make your infrastructure reproducible, version-controlled, and easy to scale.\n\nIaC eliminates manual configuration drift, speeds up environment provisioning for testing or staging, and ensures that your production environment remains perfectly aligned with your configurations.`
        },
        {
          title: "CONTAINERIZATION AND ORCHESTRATION",
          content: `We package your applications into lightweight, secure container images using Docker. We set up orchestration platforms like Kubernetes, AWS ECS, or Docker Swarm to automate container deployment, scaling, health monitoring, and routing.\n\nThis approach ensures consistent runtime behavior across development, staging, and production environments, while maximizing resource utilization and enabling zero-downtime rolling updates.`
        },
        {
          title: "CLOUD MIGRATION AND SCALING",
          content: `We help you migrate your workloads to leading cloud providers such as AWS, Google Cloud, or Azure, selecting the best hosting models for your budget and technical requirements. We design auto-scaling policies to handle spikes in traffic automatically.\n\nWe configure load balancers, database replication, CDN distribution, and multi-region availability to ensure high availability, low latency, and disaster recovery readiness for your global customer base.`
        }
      ]}
    />
  );
}