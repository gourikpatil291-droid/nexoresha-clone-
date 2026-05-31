import React from "react";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "NEXORESHA — Industry Oriented Technical Training",
  description: "Practical, real-world technical training programs designed to prepare students and professionals for the modern industry.",
};

export default function TrainingPage() {
  return (
    <ServiceDetailPage
      title={
        <>
          Industry{" "}
          <span className="font-light opacity-75">Oriented</span>
          <br />
          Technical{" "}
          <span className="font-light opacity-75">Training</span>
        </>
      }
      breadcrumb="Technical Training"
      approachTitle={
        <>
          Our{" "}
          <span className="font-light">Approach</span>
          <br />
          and{" "}
          <span className="font-light">Work Specifics</span>
        </>
      }
      approachDescription="We provide practical, industry-oriented training programs built around real-world tools, technologies, and workflows used by leading companies. Our courses are designed to bridge the gap between academic learning and professional requirements, making students and professionals job-ready from day one. From web development and mobile apps to cloud computing and DevOps, our training covers the full software development lifecycle. We emphasize hands-on projects, mentorship, and collaborative learning to ensure skills are truly internalized and applicable to real work."
      accordionItems={[
        {
          title: "WEB AND MOBILE DEVELOPMENT TRAINING",
          content: `Our web and mobile development training covers the complete stack — from HTML, CSS, and JavaScript fundamentals to advanced frameworks like React, Next.js, and React Native. Students build real projects that simulate professional environments and best practices.\n\nTrainees learn state management, responsive designs, database integration, and deployment pipelines. By working on actual features and debugging real applications, they gain the skills and confidence required to join high-performing engineering teams.`
        },
        {
          title: "CLOUD COMPUTING AND DEVOPS CURRICULUM",
          content: `We teach the fundamentals of cloud infrastructure, virtualization, and deployment automation. Students learn how to configure AWS services, write Dockerfiles, build CI/CD pipelines, and monitor system health.\n\nOur program focuses on practical operations, introducing students to infrastructure as code, version control workflows, serverless hosting, and security best practices to prepare them for modern DevOps and site reliability roles.`
        },
        {
          title: "MENTORSHIP AND COLLABORATIVE WORKSHOPS",
          content: `We pair students with experienced industry professionals who provide code reviews, technical guidance, and career advice. We hold interactive workshops where students work in teams to solve complex problems and build shared products.\n\nThese collaborative sessions simulate professional agile development environments, teaching trainees how to use Git branching strategies, coordinate tasks on Kanban boards, and communicate effectively within engineering teams.`
        },
        {
          title: "CAREER PREPARATION AND PORTFOLIO BUILDING",
          content: `Our training includes dedicated sessions on resume writing, portfolio website development, and interview preparation. We host mock technical interviews, algorithmic coding challenges, and system design reviews.\n\nWe help trainees compile their projects into a professional portfolio, showcase their contributions on GitHub, and prepare for behavioral and technical interviews to secure engineering positions.`
        }
      ]}
    />
  );
}