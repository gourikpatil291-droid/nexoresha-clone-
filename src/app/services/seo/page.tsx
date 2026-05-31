import React from "react";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata = {
  title: "NEXORESHA — Search Engine Optimization",
  description: "Strategic SEO services to improve your online visibility, attract high-quality organic traffic, and drive sustainable business growth.",
};

export default function SeoPage() {
  return (
    <ServiceDetailPage
      title={
        <>
          Search{" "}
          <span className="font-light opacity-75">Engine</span>
          <br />
          Optimization
        </>
      }
      breadcrumb="SEO Services"
      approachTitle={
        <>
          Our{" "}
          <span className="font-light">Approach</span>
          <br />
          and{" "}
          <span className="font-light">Work Specifics</span>
        </>
      }
      approachDescription="We help businesses improve their online visibility and attract high-quality, targeted traffic through strategic SEO practices. By optimizing your website's structure, content, and technical elements, we ensure search engines can easily crawl, index, and rank your pages for relevant keywords. Our goal is to increase organic traffic, enhance brand credibility, and drive sustainable growth over time. Our comprehensive SEO approach combines keyword research, on-page and off-page optimization, competitor analysis, and performance tracking."
      accordionItems={[
        {
          title: "ON-PAGE SEO (CONTENT & META OPTIMIZATION)",
          content: `We optimize your website's content and meta elements to improve search engine visibility and enhance user experience. By refining titles, headings, meta descriptions, image alt texts, and internal linking, we ensure your pages are structured for maximum SEO impact while delivering relevant and engaging content to your audience.\n\nOur on-page SEO approach also focuses on keyword optimization, content quality, and readability to drive higher organic rankings. By aligning technical SEO elements with user-focused content, we help search engines understand your pages better, attract targeted traffic, and increase engagement and conversions for your business.`
        },
        {
          title: "OFF-PAGE SEO (BACKLINK BUILDING & OUTREACH)",
          content: `We strengthen your website's authority and search engine rankings through strategic off-page SEO techniques. By building high-quality backlinks, engaging in outreach campaigns, and leveraging guest posting opportunities, we improve your site's credibility and visibility in your industry.\n\nOur off-page SEO approach focuses on acquiring relevant, authoritative links that drive referral traffic and enhance domain authority. Combined with relationship-building and digital PR strategies, we help your website gain recognition, trust, and higher search rankings, ultimately increasing organic traffic and business growth.`
        },
        {
          title: "TECHNICAL SEO (SITE SPEED, INDEXING & CRAWLING)",
          content: `We optimize the technical aspects of your website to ensure search engines can efficiently crawl, index, and rank your pages. By addressing site speed, mobile responsiveness, structured data, XML sitemaps, and URL architecture, we improve both user experience and search engine performance.\n\nOur technical SEO approach also includes monitoring crawl errors, fixing broken links, optimizing server response times, and implementing best practices for website architecture. By maintaining a technically sound website, we help improve search visibility, enhance page performance, and provide a strong foundation for all other SEO strategies.`
        },
        {
          title: "LOCAL SEO (BUSINESS LISTINGS & MAPS OPTIMIZATION)",
          content: `We help businesses increase their visibility in local search results and attract nearby customers through strategic local SEO practices. By optimizing Google Business Profiles, managing accurate business listings, and ensuring consistent NAP (Name, Address, Phone) information across directories, we make it easier for customers to find your business online.\n\nOur local SEO approach also includes maps optimization, localized keyword targeting, review management, and local link building. By enhancing your presence in map searches and local listings, we drive more foot traffic, generate leads from nearby customers, and strengthen your brand's reputation within your community.`
        },
        {
          title: "SEO ANALYTICS & PERFORMANCE TRACKING",
          content: `We provide comprehensive SEO analytics and performance tracking to measure the effectiveness of your search engine optimization efforts. By monitoring key metrics such as organic traffic, keyword rankings, bounce rates, and conversion rates, we gain actionable insights into your website's performance and identify opportunities for improvement.\n\nOur approach includes setting up analytics tools, generating detailed reports, and analyzing data to refine SEO strategies. By continuously tracking performance, we ensure your website maintains high visibility, improves search engine rankings, and achieves measurable results that drive business growth.`
        }
      ]}
    />
  );
}