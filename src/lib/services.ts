import {
  Wrench,
  Car,
  Zap,
  Camera,
  Wind,
  ArrowUpDown,
  DoorClosed,
  Building2,
  Server,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: LucideIcon;
  overview: string;
  benefits: string[];
  useCases: string[];
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "mechanical-equipment",
    name: "Mechanical Equipment & Industrial Machinery",
    shortDescription: "Industrial machinery and power tools, sourced from vetted suppliers.",
    icon: Wrench,
    overview:
      "Sourcing mechanical equipment and industrial machinery often means dealing with multiple manufacturers and importers, each with their own lead times and quality standards. SureProcure sources these on your behalf, from power tools to larger industrial machinery, and manages the process from quotation through delivery.",
    benefits: [
      "One partner for equipment sourcing across manufacturers",
      "Access to global suppliers without managing them directly",
      "Choice of air freight or standard shipment based on your timeline",
      "Procurement-only or procurement-plus-installation, your decision",
    ],
    useCases: [
      "Power tools and workshop equipment",
      "Industrial machinery for manufacturing operations",
      "Equipment replacement and upgrades",
    ],
    relatedSlugs: ["automobile-parts", "it-procurement"],
  },
  {
    slug: "automobile-parts",
    name: "Automobile Parts",
    shortDescription: "Vehicle parts sourced and delivered without vendor-chasing.",
    icon: Car,
    overview:
      "Fleet operators and organisations with vehicle assets need dependable access to parts, often on short notice. SureProcure sources automobile parts from trusted suppliers and coordinates delivery, so your operations team isn't chasing multiple vendors for a single part.",
    benefits: [
      "Sourcing across a global supplier network",
      "Air freight available for urgent part needs",
      "Consistent quality checks before delivery",
    ],
    useCases: [
      "Fleet maintenance and repair parts",
      "Replacement parts for operational vehicles",
    ],
    relatedSlugs: ["mechanical-equipment", "facility-management"],
  },
  {
    slug: "electrical-equipment-solar",
    name: "Electrical Equipment & Solar Systems",
    shortDescription: "Reliable power infrastructure, sourced and delivered without the guesswork.",
    icon: Zap,
    overview:
      "Organisations across Nigeria face a common challenge: sourcing electrical components and solar equipment from suppliers who can guarantee quality and consistency. SureProcure removes that uncertainty. We source electrical components, solar panels, inverters, and related equipment from vetted global suppliers, manage logistics, and coordinate installation where required.",
    benefits: [
      "One partner for equipment sourcing and installation coordination",
      "Access to global suppliers without managing them directly",
      "Choice of air freight or standard shipment based on your timeline",
      "Procurement-only or procurement-plus-installation, your decision",
    ],
    useCases: [
      "Backup and solar power systems for facilities",
      "Electrical component sourcing for ongoing operations",
      "Equipment upgrades and replacements",
    ],
    relatedSlugs: ["hvac", "cctv-security", "facility-management"],
  },
  {
    slug: "cctv-security",
    name: "CCTV & Security Systems",
    shortDescription: "Surveillance and security equipment, sourced and coordinated end to end.",
    icon: Camera,
    overview:
      "Security infrastructure needs consistent, reliable equipment. SureProcure sources CCTV cameras and related security systems from vetted suppliers, and coordinates installation where required.",
    benefits: [
      "Consistent equipment quality across installations",
      "Procurement-only or procurement-plus-installation",
      "Logistics options matched to your timeline",
    ],
    useCases: [
      "Facility and perimeter surveillance systems",
      "Security system upgrades",
    ],
    relatedSlugs: ["electrical-equipment-solar", "gates-access-control"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    shortDescription: "Heating, ventilation, and cooling equipment and parts.",
    icon: Wind,
    overview:
      "HVAC systems require both the right equipment and dependable parts sourcing over time. SureProcure sources HVAC units and components from trusted suppliers and manages delivery and, where needed, installation coordination.",
    benefits: [
      "Sourcing across HVAC equipment and parts",
      "Procurement-only or procurement-plus-installation",
      "Consistent supplier quality standards",
    ],
    useCases: [
      "New HVAC installations",
      "Ongoing parts and maintenance sourcing",
    ],
    relatedSlugs: ["electrical-equipment-solar", "facility-management"],
  },
  {
    slug: "lift-installation-maintenance",
    name: "Lift Installation & Maintenance",
    shortDescription: "Lift and escalator equipment, installation, and servicing.",
    icon: ArrowUpDown,
    overview:
      "Lift and escalator projects require precise equipment sourcing and coordinated installation. SureProcure sources lift equipment and coordinates installation and servicing, so your project has a single accountable partner.",
    benefits: [
      "Sourcing for lift and escalator equipment",
      "Installation and maintenance coordination available",
      "One partner across equipment and servicing",
    ],
    useCases: [
      "New lift installations",
      "Lift servicing and maintenance",
    ],
    relatedSlugs: ["gates-access-control", "facility-management"],
  },
  {
    slug: "gates-access-control",
    name: "Gates, Barriers & Access Control",
    shortDescription: "Automatic gates, barriers, and Salto access control systems.",
    icon: DoorClosed,
    overview:
      "Access control is a facility's first line of security. SureProcure sources automatic gates, barriers, and Salto access control systems, and coordinates installation and maintenance where required.",
    benefits: [
      "Equipment sourced from vetted suppliers",
      "Installation and maintenance coordination available",
      "Consistent standards across access points",
    ],
    useCases: [
      "Automatic gate and barrier installations",
      "Salto access control system deployment",
    ],
    relatedSlugs: ["cctv-security", "lift-installation-maintenance"],
  },
  {
    slug: "facility-management",
    name: "Facility Management",
    shortDescription: "Keep your operations running, without managing a dozen vendors to do it.",
    icon: Building2,
    overview:
      "Facility management often means juggling separate contracts for maintenance, equipment, and services. SureProcure consolidates this. We source the equipment, materials, and services your facility needs, so your team manages one relationship instead of many.",
    benefits: [
      "Consolidated sourcing across facility needs",
      "Consistent supplier quality standards",
      "Flexible engagement: procurement only, or procurement plus installation",
    ],
    useCases: [
      "Ongoing facility equipment and materials sourcing",
      "Support for facility upgrades and refurbishments",
    ],
    relatedSlugs: ["hvac", "gates-access-control", "lift-installation-maintenance"],
  },
  {
    slug: "it-procurement",
    name: "IT Procurement",
    shortDescription: "Hardware and IT equipment, sourced and delivered reliably.",
    icon: Server,
    overview:
      "IT infrastructure needs dependable sourcing, from individual hardware to larger deployments. SureProcure sources IT equipment from trusted suppliers and manages delivery logistics.",
    benefits: [
      "Sourcing across IT hardware categories",
      "Air freight available for time-sensitive needs",
      "Consistent quality checks before delivery",
    ],
    useCases: [
      "Office and operational IT hardware",
      "IT infrastructure upgrades",
    ],
    relatedSlugs: ["mechanical-equipment", "hr-staffing-recruitment"],
  },
  {
    slug: "hr-staffing-recruitment",
    name: "HR Staffing & Recruitment",
    shortDescription: "Staffing and recruitment support alongside your procurement needs.",
    icon: Users,
    overview:
      "Beyond equipment and materials, organisations often need staffing support. SureProcure offers HR staffing and recruitment services alongside our procurement categories, giving you one additional partner rather than another vendor to manage separately.",
    benefits: [
      "Staffing support alongside procurement services",
      "One additional partner, not another vendor to manage",
    ],
    useCases: [
      "Operational staffing needs",
      "Recruitment support for growing teams",
    ],
    relatedSlugs: ["facility-management", "it-procurement"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}
