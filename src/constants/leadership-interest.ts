export const LEADERSHIP_ROLES = [
  {
    id: "chairperson",
    title: "Chairperson",
    description: "Leads the community, chairs meetings, provides overall direction and represents Mulembe.",
  },
  {
    id: "vice-chairperson",
    title: "Vice-Chairperson",
    description: "Supports the Chairperson and takes over their responsibilities when they are unavailable.",
  },
  {
    id: "secretary",
    title: "Secretary",
    description: "Manages minutes, correspondence, meeting notices, records and general administration.",
  },
  {
    id: "treasurer",
    title: "Treasurer",
    description: "Manages finances, payments, financial records and reports.",
  },
  {
    id: "public-officer",
    title: "Public Officer",
    description: "Handles official/statutory matters and ensures required Association records and obligations are maintained.",
  },
  {
    id: "events-coordinator",
    title: "Events Coordinator",
    description: "Coordinates community events and leads event planning and organising teams.",
  },
  {
    id: "welfare-coordinator",
    title: "Welfare Coordinator",
    description: "Coordinates welfare activities, member support and the Welfare Team.",
  },
  {
    id: "social-media-coordinator",
    title: "Social Media Coordinator",
    description: "Manages social media, community announcements, promotions and online engagement.",
  },
  {
    id: "advisory-representative",
    title: "Advisory Representative",
    description: "Provides advice, guidance and support to the Committee.",
  },
] as const;

export type LeadershipRoleId = (typeof LEADERSHIP_ROLES)[number]["id"];

export const CONSTITUTION_VERSION = "2026";
