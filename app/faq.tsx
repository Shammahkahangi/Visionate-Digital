import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = () => {
  return ( 
    <div className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">
          Got Questions?
        </div>
        <div className="font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
          Find Clarity.
        </div>
        
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What makes Visionate Digital different?</AccordionTrigger>
            <AccordionContent>
              We combine data-driven marketing strategies with custom web technology solutions. Our unique blend of digital expertise and technical development capabilities allows us to create fully integrated marketing ecosystems for our clients.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do you approach new projects?</AccordionTrigger>
            <AccordionContent>
              Every engagement starts with a comprehensive digital audit and strategy session. We then develop a phased roadmap including market research, technology stack selection, campaign planning, and measurable KPIs - all tailored to your business objectives.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What's included in your packages?</AccordionTrigger>
            <AccordionContent>
              Our solutions scale with your needs, offering:
              - Strategic marketing planning
              - Multi-channel campaign execution
              - Custom web application development
              - Real-time analytics dashboards
              - Monthly performance optimization
              - Dedicated account management
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do you measure success?</AccordionTrigger>
            <AccordionContent>
              We establish clear metrics upfront including ROI, CAC, LTV, and engagement rates. You'll receive transparent reporting through our custom analytics portals with real-time campaign performance data and actionable insights.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Can you integrate with our existing tech stack?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Our developers specialize in seamless integration with CRMs, ERPs, marketing automation tools, and legacy systems. We ensure all solutions work cohesively with your current technology investments.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>What ongoing support do you provide?</AccordionTrigger>
            <AccordionContent>
              Our premium support includes:
              - 24/7 system monitoring
              - Marketing strategy recalibration
              - Emergency technical support
              - Bi-weekly strategy calls
              - Platform updates & security patches
              Available through flexible SLA options to match your operational needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
 
export default FAQS;