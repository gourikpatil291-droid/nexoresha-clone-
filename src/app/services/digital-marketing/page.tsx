import React from "react";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "NEXORESHA — Digital Marketing Services",
  description: "Data-driven digital marketing services to increase brand visibility, reach the right audience, and deliver measurable growth.",
};

export default function DigitalMarketingPage() {
  return (
    <ServiceDetailPage
      title={
        <>
          Digital{" "}
          <span className="font-light opacity-75">Marketing</span>
          <br />
          <span className="font-light opacity-75">Services</span>
        </>
      }
      breadcrumb="Digital Marketing"
      approachTitle={
        <>
          Our{" "}
          <span className="font-light">Approach</span>
          <br />
          and{" "}
          <span className="font-light">Work Specifics</span>
        </>
      }
      approachDescription="We create data-driven digital marketing strategies that increase brand visibility, attract the right audience, and deliver measurable business growth. Our campaigns are built on thorough market research, audience analysis, and competitive intelligence to ensure every effort is targeted and effective. From content marketing and social media management to paid advertising and email campaigns, we handle every aspect of your digital presence. Our goal is to build lasting brand equity while continuously optimizing for maximum return on your marketing investment."
      accordionItems={[
        {
          title: "SOCIAL MEDIA MARKETING AND MANAGEMENT",
          content: `We create and manage engaging social media campaigns across platforms including Instagram, LinkedIn, Twitter, and Facebook. Our content strategy is tailored to your brand voice, audience preferences, and business objectives to drive meaningful engagement.\n\nOur social media management includes content creation, graphic design, copywriting, and community management. We monitor engagement metrics and optimize posting schedules to increase follower growth and build brand community.`
        },
        {
          title: "PAID ADVERTISING AND PPC CAMPAIGNS",
          content: `We design, execute, and monitor pay-per-click advertising campaigns across Google Search, Display, YouTube, Meta Ads, and LinkedIn Ads. We conduct thorough keyword research, write compelling ad copy, and create visual ad assets.\n\nWe manage budgets efficiently, setting up A/B testing for ad designs and landing pages, optimizing bids, and configuring conversion tracking to maximize conversions and minimize cost-per-acquisition (CPA).`
        },
        {
          title: "CONTENT MARKETING AND BRANDING",
          content: `We produce high-quality blog posts, articles, case studies, infographics, and newsletters that establish your brand as an authority in your industry. Our content is SEO-optimized and designed to solve user problems and drive organic interest.\n\nWe help you define a strong, consistent brand identity and visual language across all digital channels, ensuring that your company's values, mission, and unique selling propositions resonate with your target audience.`
        },
        {
          title: "EMAIL CAMPAIGNS & FUNNEL AUTOMATION",
          content: `We build and manage targeted email marketing campaigns that nurture leads, welcome new customers, and drive recurring sales. We design custom email templates, write engaging copy, and segment subscriber lists for maximum relevance.\n\nWe set up automated email funnels triggered by user actions, such as cart abandonment or newsletter signups, optimizing open rates, click-through rates, and conversions through ongoing testing and data analysis.`
        }
      ]}
    />
  );
}