
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  imageHint: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "power-of-digital-presence",
    title: "The Power of a Strong Digital Presence for Small Businesses",
    author: "Phillip Otieno",
    date: "2024-07-28",
    description: "In today's market, a strong digital presence isn't just a nice-to-have; it's a necessity. Let's explore why and how you can build one.",
    image: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkaWdpdGFsJTIwcHJlc2VuY2V8ZW58MHx8fHwxNzU4NzM4NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "digital presence",
    content: `
      <p>In today's hyper-connected world, a strong digital presence is no longer optional for small businesses—it's essential for survival and growth. Your digital presence is the collection of your online identity, from your website and social media profiles to your search engine rankings and online reviews. It's how new customers discover you, and how existing customers stay engaged.</p>
      <h3 class="font-bold text-xl my-4">Why It Matters</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Increased Visibility:</strong> A well-optimized website and active social media profiles make it easier for potential customers to find you through search engines like Google.</li>
        <li><strong>Credibility and Trust:</strong> A professional-looking website and positive online reviews build credibility and trust with your audience. It shows that you are a legitimate and reliable business.</li>
        <li><strong>Wider Reach:</strong> Unlike a physical storefront, your digital presence is accessible to a global audience, 24/7. This allows you to reach new markets and customers beyond your geographical location.</li>
        <li><strong>Direct Customer Engagement:</strong> Social media and blogs provide a direct channel to communicate with your customers, gather feedback, and build a loyal community around your brand.</li>
      </ul>
      <h3 class="font-bold text-xl my-4">Building Your Digital Presence: First Steps</h3>
      <p>Getting started can feel overwhelming, but focusing on a few key areas can make a big impact. Start with a professional, mobile-friendly website. Secure your social media handles on platforms where your target audience spends their time. Finally, set up your Google Business Profile to appear in local search results. These foundational elements will set you on the path to digital success.</p>
    `,
  },
  {
    slug: "boosting-business-with-seo",
    title: "A Beginner's Guide to Boosting Your Business with SEO",
    author: "Phillip Otieno",
    date: "2024-07-25",
    description: "Search Engine Optimization (SEO) is the key to unlocking organic growth. This guide breaks down the basics for anyone looking to get started.",
    image: "https://images.unsplash.com/photo-1599690945535-94e9f02a0b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxTRU8lMjBzdHJhdGVneXxlbnwwfHx8fDE3NTg3Mzg1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "SEO strategy",
    content: `
      <p>Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. In simpler terms, it's about making your website more attractive to search engines like Google. When done correctly, SEO can be one of the most powerful tools in your digital marketing arsenal.</p>
      <h3 class="font-bold text-xl my-4">The Core Pillars of SEO</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>On-Page SEO:</strong> This involves optimizing the content and structure of your website. It includes using relevant keywords, writing compelling meta descriptions, and ensuring your site has a logical hierarchy with clear headings.</li>
        <li><strong>Off-Page SEO:</strong> This refers to activities outside of your website that impact your rankings, primarily through building high-quality backlinks. When other reputable websites link to yours, it signals to search engines that your content is valuable.</li>
        <li><strong>Technical SEO:</strong> This ensures that your website can be crawled and indexed by search engines without any issues. Key aspects include site speed, mobile-friendliness, and having a secure (HTTPS) connection.</li>
      </ul>
      <h3 class="font-bold text-xl my-4">Where to Begin?</h3>
      <p>Start with keyword research. Understand what terms your potential customers are searching for and create high-quality content around those topics. Ensure your website is technically sound—fast, mobile-friendly, and secure. From there, you can begin to build your authority through consistent content creation and earning backlinks. SEO is a marathon, not a sprint, but the long-term rewards are well worth the effort.</p>
    `,
  },
];
