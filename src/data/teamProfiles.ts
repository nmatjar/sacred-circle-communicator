import type { TeamMember } from "@/types/team";

export const teamProfiles: TeamMember[] = [
  // Engineering Team
  {
    id: "1",
    name: "Alex Chen",
    email: "alex.chen@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Senior Frontend Developer",
    department: "Engineering",
    profileCoder: "📄{VR=3.3;PI=alex-chen;OW=Alex Chen} ▪ 💼{WS=🔄^5;NL=🔇^4} ▪ 🏅{SK=[\"React\",\"TypeScript\",\"UX\"];EX=5} ▪ 🟢{ST=A~Energetic;AC=COLLAB;IP=SYNC^4;IT=IMP} ▪ 🧠{CL=M^3;AS=AVA^4;EL=H^5;OT=CR;FS=NA} ▪ 🤝{CM=OFFER^4;SB=H^4;SO=OPEN^3} ▪ 🏙️{EI=ACTIVE;RR=[\"QUIET\"];LA=true} ▪ 🤖{DL=R^4;AV=DISC;AT=[\"email_triage\",\"calendar_mgmt\"]}",
    lastSeen: new Date(Date.now() - 5 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "collaboration"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Data Scientist",
    department: "Engineering",
    profileCoder: "📄{VR=3.3;PI=sarah-johnson;OW=Sarah Johnson} ▪ 💼{WS=🏠^4;NL=🔊^3} ▪ 🏅{SK=[\"Python\",\"Data Science\",\"ML\"];EX=7} ▪ 🟡{ST=B~Deep Work;AC=DEEP;IP=ASYNC^5;IT=URG} ▪ 🧠{CL=H^4;AS=FOC^5;EL=M^3;OT=AN;FS=MAINTAIN} ▪ 🤝{CM=LIMIT^2;SB=L^2;SO=CLOSED^1} ▪ 🏙️{EI=PASSIVE;RR=[\"QUIET\",\"FOCUS\"];LA=false} ▪ 🤖{DL=A^5;AV=HIDDEN;AT=[\"data_analysis\",\"report_gen\"]}",
    lastSeen: new Date(Date.now() - 2 * 60 * 1000),
    status: "busy",
    cognitiveLoad: "high",
    activity: "deep_work"
  },
  {
    id: "3",
    name: "Marcus Rodriguez",
    email: "marcus.rodriguez@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Backend Engineer",
    department: "Engineering",
    profileCoder: "📄{VR=3.3;PI=marcus-rodriguez;OW=Marcus Rodriguez} ▪ 💼{WS=🏢^5;NL=🔊^4} ▪ 🏅{SK=[\"Node.js\",\"PostgreSQL\",\"AWS\"];EX=6} ▪ 🟢{ST=A~Available;AC=MEETING;IP=SYNC^3;IT=IMP} ▪ 🧠{CL=L^2;AS=AVA^4;EL=H^4;OT=ST;FS=NA} ▪ 🤝{CM=SEEK^4;SB=H^5;SO=OPEN^4} ▪ 🏙️{EI=ACTIVE;RR=[\"COLLAB\"];LA=true} ▪ 🤖{DL=M^3;AV=DISC;AT=[\"scheduling\"]}",
    lastSeen: new Date(Date.now() - 15 * 60 * 1000),
    status: "available",
    cognitiveLoad: "low",
    activity: "meeting"
  },
  {
    id: "4",
    name: "Emma Thompson",
    email: "emma.thompson@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "DevOps Engineer",
    department: "Engineering",
    profileCoder: "📄{VR=3.3;PI=emma-thompson;OW=Emma Thompson} ▪ 💼{WS=🔄^4;NL=🔇^5} ▪ 🏅{SK=[\"Kubernetes\",\"Docker\",\"CI/CD\"];EX=5} ▪ 🔴{ST=B~Incident Response;AC=URGENT;IP=SYNC^5;IT=CRIT} ▪ 🧠{CL=H^5;AS=FOC^4;EL=M^3;OT=OP;FS=ENTER} ▪ 🤝{CM=LIMIT^1;SB=L^1;SO=CLOSED^2} ▪ 🏙️{EI=ACTIVE;RR=[\"URGENT_ONLY\"];LA=true} ▪ 🤖{DL=A^4;AV=DISC;AT=[\"monitoring\",\"alerts\"]}",
    lastSeen: new Date(Date.now() - 1 * 60 * 1000),
    status: "busy",
    cognitiveLoad: "high",
    activity: "urgent_work"
  },
  {
    id: "5",
    name: "David Kim",
    email: "david.kim@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Mobile Developer",
    department: "Engineering",
    profileCoder: "📄{VR=3.3;PI=david-kim;OW=David Kim} ▪ 💼{WS=🏠^5;NL=🔇^4} ▪ 🏅{SK=[\"React Native\",\"Swift\",\"Kotlin\"];EX=4} ▪ 🟢{ST=A~Creative;AC=DEV;IP=ASYNC^4;IT=NORM} ▪ 🧠{CL=M^3;AS=AVA^3;EL=H^4;OT=CR;FS=NA} ▪ 🤝{CM=OFFER^3;SB=M^3;SO=OPEN^3} ▪ 🏙️{EI=PASSIVE;RR=[\"QUIET\"];LA=false} ▪ 🤖{DL=M^3;AV=DISC;AT=[\"testing\"]}",
    lastSeen: new Date(Date.now() - 30 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "development"
  },

  // Product Team
  {
    id: "6",
    name: "Lisa Wang",
    email: "lisa.wang@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Product Manager",
    department: "Product",
    profileCoder: "📄{VR=3.3;PI=lisa-wang;OW=Lisa Wang} ▪ 💼{WS=🏢^4;NL=🔊^3} ▪ 🏅{SK=[\"Product Strategy\",\"Analytics\",\"User Research\"];EX=6} ▪ 🟢{ST=A~Strategic;AC=PLAN;IP=SYNC^4;IT=IMP} ▪ 🧠{CL=M^3;AS=AVA^4;EL=H^4;OT=ST;FS=NA} ▪ 🤝{CM=SEEK^5;SB=H^5;SO=OPEN^5} ▪ 🏙️{EI=ACTIVE;RR=[\"COLLAB\"];LA=true} ▪ 🤖{DL=M^3;AV=DISC;AT=[\"metrics_tracking\"]}",
    lastSeen: new Date(Date.now() - 10 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "planning"
  },
  {
    id: "7",
    name: "James Miller",
    email: "james.miller@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "UX Designer",
    department: "Product",
    profileCoder: "📄{VR=3.3;PI=james-miller;OW=James Miller} ▪ 💼{WS=🔄^5;NL=🔇^5} ▪ 🏅{SK=[\"Figma\",\"User Research\",\"Prototyping\"];EX=5} ▪ 🟡{ST=B~Design Flow;AC=DESIGN;IP=ASYNC^5;IT=LOW} ▪ 🧠{CL=M^3;AS=FOC^4;EL=H^5;OT=CR;FS=MAINTAIN} ▪ 🤝{CM=LIMIT^2;SB=M^3;SO=SELECTIVE^2} ▪ 🏙️{EI=PASSIVE;RR=[\"CREATIVE_SPACE\"];LA=false} ▪ 🤖{DL=L^2;AV=HIDDEN;AT=[\"design_assets\"]}",
    lastSeen: new Date(Date.now() - 45 * 60 * 1000),
    status: "busy",
    cognitiveLoad: "medium",
    activity: "creative_work"
  },
  {
    id: "8",
    name: "Rachel Green",
    email: "rachel.green@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Product Analyst",
    department: "Product",
    profileCoder: "📄{VR=3.3;PI=rachel-green;OW=Rachel Green} ▪ 💼{WS=🏠^4;NL=🔊^2} ▪ 🏅{SK=[\"SQL\",\"Tableau\",\"A/B Testing\"];EX=4} ▪ 🟢{ST=A~Analytical;AC=ANALYSIS;IP=ASYNC^4;IT=NORM} ▪ 🧠{CL=L^2;AS=AVA^4;EL=M^3;OT=AN;FS=NA} ▪ 🤝{CM=OFFER^4;SB=H^4;SO=OPEN^4} ▪ 🏙️{EI=ACTIVE;RR=[\"DATA_ACCESS\"];LA=true} ▪ 🤖{DL=H^4;AV=DISC;AT=[\"data_viz\",\"reporting\"]}",
    lastSeen: new Date(Date.now() - 20 * 60 * 1000),
    status: "available",
    cognitiveLoad: "low",
    activity: "analysis"
  },

  // Design Team
  {
    id: "9",
    name: "Sofia Andersson",
    email: "sofia.andersson@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Senior UI Designer",
    department: "Design",
    profileCoder: "📄{VR=3.3;PI=sofia-andersson;OW=Sofia Andersson} ▪ 💼{WS=🔄^5;NL=🔇^4} ▪ 🏅{SK=[\"UI Design\",\"Design Systems\",\"Branding\"];EX=7} ▪ 🟢{ST=A~Inspired;AC=DESIGN;IP=SYNC^3;IT=NORM} ▪ 🧠{CL=L^2;AS=AVA^4;EL=H^5;OT=CR;FS=NA} ▪ 🤝{CM=OFFER^5;SB=H^4;SO=OPEN^4} ▪ 🏙️{EI=ACTIVE;RR=[\"INSPIRATION\"];LA=true} ▪ 🤖{DL=L^2;AV=DISC;AT=[\"asset_mgmt\"]}",
    lastSeen: new Date(Date.now() - 8 * 60 * 1000),
    status: "available",
    cognitiveLoad: "low",
    activity: "creative_work"
  },
  {
    id: "10",
    name: "Tom Wilson",
    email: "tom.wilson@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Motion Designer",
    department: "Design",
    profileCoder: "📄{VR=3.3;PI=tom-wilson;OW=Tom Wilson} ▪ 💼{WS=🏢^3;NL=🔊^4} ▪ 🏅{SK=[\"After Effects\",\"Cinema 4D\",\"Animation\"];EX=5} ▪ 🟡{ST=B~In the Zone;AC=ANIMATION;IP=ASYNC^5;IT=LOW} ▪ 🧠{CL=H^4;AS=FOC^5;EL=H^4;OT=CR;FS=DEEP} ▪ 🤝{CM=LIMIT^1;SB=L^2;SO=CLOSED^1} ▪ 🏙️{EI=PASSIVE;RR=[\"NO_INTERRUPTIONS\"];LA=false} ▪ 🤖{DL=L^1;AV=HIDDEN;AT=[]}",
    lastSeen: new Date(Date.now() - 90 * 60 * 1000),
    status: "busy",
    cognitiveLoad: "high",
    activity: "deep_work"
  },

  // Marketing Team
  {
    id: "11",
    name: "Maria Garcia",
    email: "maria.garcia@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Marketing Manager",
    department: "Marketing",
    profileCoder: "📄{VR=3.3;PI=maria-garcia;OW=Maria Garcia} ▪ 💼{WS=🏢^4;NL=🔊^5} ▪ 🏅{SK=[\"Digital Marketing\",\"Content Strategy\",\"Analytics\"];EX=6} ▪ 🟢{ST=A~Energetic;AC=CAMPAIGN;IP=SYNC^4;IT=IMP} ▪ 🧠{CL=M^3;AS=AVA^4;EL=H^5;OT=ST;FS=NA} ▪ 🤝{CM=SEEK^5;SB=H^5;SO=OPEN^5} ▪ 🏙️{EI=ACTIVE;RR=[\"BRAINSTORM\"];LA=true} ▪ 🤖{DL=M^3;AV=DISC;AT=[\"social_media\",\"analytics\"]}",
    lastSeen: new Date(Date.now() - 3 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "collaboration"
  },
  {
    id: "12",
    name: "Kevin O'Connor",
    email: "kevin.oconnor@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Content Creator",
    department: "Marketing",
    profileCoder: "📄{VR=3.3;PI=kevin-oconnor;OW=Kevin O'Connor} ▪ 💼{WS=🏠^5;NL=🔇^3} ▪ 🏅{SK=[\"Copywriting\",\"Video Production\",\"SEO\"];EX=4} ▪ 🟢{ST=A~Creative;AC=CONTENT;IP=ASYNC^4;IT=NORM} ▪ 🧠{CL=L^2;AS=AVA^3;EL=M^3;OT=CR;FS=NA} ▪ 🤝{CM=OFFER^3;SB=M^3;SO=OPEN^3} ▪ 🏙️{EI=PASSIVE;RR=[\"QUIET\"];LA=false} ▪ 🤖{DL=M^3;AV=DISC;AT=[\"content_scheduling\"]}",
    lastSeen: new Date(Date.now() - 25 * 60 * 1000),
    status: "available",
    cognitiveLoad: "low",
    activity: "creative_work"
  },

  // Sales Team
  {
    id: "13",
    name: "Jennifer Lee",
    email: "jennifer.lee@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Sales Manager",
    department: "Sales",
    profileCoder: "📄{VR=3.3;PI=jennifer-lee;OW=Jennifer Lee} ▪ 💼{WS=🏢^5;NL=🔊^4} ▪ 🏅{SK=[\"B2B Sales\",\"CRM\",\"Negotiation\"];EX=8} ▪ 🟢{ST=A~Driven;AC=SALES;IP=SYNC^5;IT=IMP} ▪ 🧠{CL=M^3;AS=AVA^5;EL=H^5;OT=ST;FS=NA} ▪ 🤝{CM=SEEK^5;SB=H^5;SO=OPEN^5} ▪ 🏙️{EI=ACTIVE;RR=[\"CLIENT_CALLS\"];LA=true} ▪ 🤖{DL=M^3;AV=DISC;AT=[\"lead_scoring\",\"follow_ups\"]}",
    lastSeen: new Date(Date.now() - 5 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "client_work"
  },
  {
    id: "14",
    name: "Robert Taylor",
    email: "robert.taylor@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Business Development",
    department: "Sales",
    profileCoder: "📄{VR=3.3;PI=robert-taylor;OW=Robert Taylor} ▪ 💼{WS=🔄^4;NL=🔊^3} ▪ 🏅{SK=[\"Partnership\",\"Strategy\",\"Networking\"];EX=7} ▪ 🟡{ST=B~In Meeting;AC=MEETING;IP=SYNC^3;IT=IMP} ▪ 🧠{CL=M^3;AS=BUSY^2;EL=M^3;OT=ST;FS=NA} ▪ 🤝{CM=LIMIT^2;SB=M^3;SO=SELECTIVE^3} ▪ 🏙️{EI=ACTIVE;RR=[\"MEETING_ROOM\"];LA=true} ▪ 🤖{DL=L^2;AV=DISC;AT=[\"calendar_mgmt\"]}",
    lastSeen: new Date(Date.now() - 60 * 60 * 1000),
    status: "busy",
    cognitiveLoad: "medium",
    activity: "meeting"
  },

  // HR Team
  {
    id: "15",
    name: "Amanda Brown",
    email: "amanda.brown@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "HR Manager",
    department: "HR",
    profileCoder: "📄{VR=3.3;PI=amanda-brown;OW=Amanda Brown} ▪ 💼{WS=🏢^4;NL=🔊^3} ▪ 🏅{SK=[\"People Ops\",\"Recruitment\",\"Culture\"];EX=6} ▪ 🟢{ST=A~Supportive;AC=SUPPORT;IP=SYNC^4;IT=IMP} ▪ 🧠{CL=L^2;AS=AVA^4;EL=M^3;OT=SO;FS=NA} ▪ 🤝{CM=OFFER^5;SB=H^5;SO=OPEN^5} ▪ 🏙️{EI=ACTIVE;RR=[\"OPEN_DOOR\"];LA=true} ▪ 🤖{DL=L^2;AV=DISC;AT=[\"scheduling\"]}",
    lastSeen: new Date(Date.now() - 12 * 60 * 1000),
    status: "available",
    cognitiveLoad: "low",
    activity: "support"
  },
  {
    id: "16",
    name: "Michael Davis",
    email: "michael.davis@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Talent Acquisition",
    department: "HR",
    profileCoder: "📄{VR=3.3;PI=michael-davis;OW=Michael Davis} ▪ 💼{WS=🏠^4;NL=🔇^4} ▪ 🏅{SK=[\"Recruiting\",\"Interviewing\",\"Sourcing\"];EX=5} ▪ 🟢{ST=A~Focused;AC=RECRUIT;IP=ASYNC^4;IT=NORM} ▪ 🧠{CL=M^3;AS=AVA^3;EL=M^3;OT=SO;FS=NA} ▪ 🤝{CM=OFFER^4;SB=M^3;SO=OPEN^4} ▪ 🏙️{EI=PASSIVE;RR=[\"QUIET\"];LA=false} ▪ 🤖{DL=H^4;AV=DISC;AT=[\"candidate_tracking\",\"scheduling\"]}",
    lastSeen: new Date(Date.now() - 18 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "recruiting"
  },

  // Finance Team
  {
    id: "17",
    name: "Catherine Smith",
    email: "catherine.smith@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Finance Manager",
    department: "Finance",
    profileCoder: "📄{VR=3.3;PI=catherine-smith;OW=Catherine Smith} ▪ 💼{WS=🏢^5;NL=🔇^5} ▪ 🏅{SK=[\"Financial Analysis\",\"Excel\",\"Budgeting\"];EX=8} ▪ 🟡{ST=B~Month End;AC=ANALYSIS;IP=ASYNC^5;IT=URG} ▪ 🧠{CL=H^4;AS=FOC^5;EL=M^3;OT=AN;FS=MAINTAIN} ▪ 🤝{CM=LIMIT^1;SB=L^2;SO=CLOSED^1} ▪ 🏙️{EI=PASSIVE;RR=[\"URGENT_ONLY\"];LA=false} ▪ 🤖{DL=H^4;AV=HIDDEN;AT=[\"reporting\",\"calculations\"]}",
    lastSeen: new Date(Date.now() - 35 * 60 * 1000),
    status: "busy",
    cognitiveLoad: "high",
    activity: "analysis"
  },
  {
    id: "18",
    name: "Daniel Johnson",
    email: "daniel.johnson@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Financial Analyst",
    department: "Finance",
    profileCoder: "📄{VR=3.3;PI=daniel-johnson;OW=Daniel Johnson} ▪ 💼{WS=🏠^3;NL=🔊^2} ▪ 🏅{SK=[\"Financial Modeling\",\"SQL\",\"PowerBI\"];EX=4} ▪ 🟢{ST=A~Analytical;AC=MODELING;IP=ASYNC^4;IT=NORM} ▪ 🧠{CL=M^3;AS=AVA^3;EL=M^3;OT=AN;FS=NA} ▪ 🤝{CM=OFFER^3;SB=M^3;SO=OPEN^3} ▪ 🏙️{EI=PASSIVE;RR=[\"DATA_ACCESS\"];LA=false} ▪ 🤖{DL=H^4;AV=DISC;AT=[\"data_analysis\",\"modeling\"]}",
    lastSeen: new Date(Date.now() - 22 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "analysis"
  },

  // Operations Team
  {
    id: "19",
    name: "Laura Martinez",
    email: "laura.martinez@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Operations Manager",
    department: "Operations",
    profileCoder: "📄{VR=3.3;PI=laura-martinez;OW=Laura Martinez} ▪ 💼{WS=🏢^4;NL=🔊^4} ▪ 🏅{SK=[\"Process Optimization\",\"Project Management\",\"Automation\"];EX=7} ▪ 🟢{ST=A~Organized;AC=COORD;IP=SYNC^4;IT=IMP} ▪ 🧠{CL=M^3;AS=AVA^4;EL=H^4;OT=OP;FS=NA} ▪ 🤝{CM=SEEK^4;SB=H^4;SO=OPEN^4} ▪ 🏙️{EI=ACTIVE;RR=[\"COORDINATION\"];LA=true} ▪ 🤖{DL=H^4;AV=DISC;AT=[\"workflow_automation\",\"tracking\"]}",
    lastSeen: new Date(Date.now() - 7 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "coordination"
  },
  {
    id: "20",
    name: "Steven Clark",
    email: "steven.clark@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Quality Assurance",
    department: "Operations",
    profileCoder: "📄{VR=3.3;PI=steven-clark;OW=Steven Clark} ▪ 💼{WS=🔄^4;NL=🔇^4} ▪ 🏅{SK=[\"Testing\",\"Automation\",\"Quality Control\"];EX=5} ▪ 🟡{ST=B~Testing;AC=QA;IP=ASYNC^4;IT=NORM} ▪ 🧠{CL=M^3;AS=FOC^4;EL=M^3;OT=OP;FS=MAINTAIN} ▪ 🤝{CM=LIMIT^2;SB=M^3;SO=SELECTIVE^2} ▪ 🏙️{EI=PASSIVE;RR=[\"TESTING_ENV\"];LA=false} ▪ 🤖{DL=H^4;AV=DISC;AT=[\"test_automation\",\"reporting\"]}",
    lastSeen: new Date(Date.now() - 40 * 60 * 1000),
    status: "busy",
    cognitiveLoad: "medium",
    activity: "testing"
  },

  // Customer Success Team
  {
    id: "21",
    name: "Nicole White",
    email: "nicole.white@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Customer Success Manager",
    department: "Customer Success",
    profileCoder: "📄{VR=3.3;PI=nicole-white;OW=Nicole White} ▪ 💼{WS=🏢^4;NL=🔊^4} ▪ 🏅{SK=[\"Customer Relations\",\"Support\",\"Training\"];EX=6} ▪ 🟢{ST=A~Helpful;AC=SUPPORT;IP=SYNC^5;IT=IMP} ▪ 🧠{CL=L^2;AS=AVA^5;EL=H^4;OT=SO;FS=NA} ▪ 🤝{CM=OFFER^5;SB=H^5;SO=OPEN^5} ▪ 🏙️{EI=ACTIVE;RR=[\"CLIENT_SUPPORT\"];LA=true} ▪ 🤖{DL=M^3;AV=DISC;AT=[\"ticket_routing\",\"follow_ups\"]}",
    lastSeen: new Date(Date.now() - 4 * 60 * 1000),
    status: "available",
    cognitiveLoad: "low",
    activity: "support"
  },
  {
    id: "22",
    name: "Andrew Wilson",
    email: "andrew.wilson@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Technical Support",
    department: "Customer Success",
    profileCoder: "📄{VR=3.3;PI=andrew-wilson;OW=Andrew Wilson} ▪ 💼{WS=🏠^4;NL=🔇^3} ▪ 🏅{SK=[\"Technical Support\",\"Troubleshooting\",\"Documentation\"];EX=4} ▪ 🟢{ST=A~Ready;AC=SUPPORT;IP=SYNC^4;IT=IMP} ▪ 🧠{CL=L^2;AS=AVA^4;EL=M^3;OT=OP;FS=NA} ▪ 🤝{CM=OFFER^4;SB=H^4;SO=OPEN^4} ▪ 🏙️{EI=ACTIVE;RR=[\"TECH_SUPPORT\"];LA=true} ▪ 🤖{DL=M^3;AV=DISC;AT=[\"troubleshooting\"]}",
    lastSeen: new Date(Date.now() - 14 * 60 * 1000),
    status: "available",
    cognitiveLoad: "low",
    activity: "support"
  },

  // Leadership Team
  {
    id: "23",
    name: "Victoria Chang",
    email: "victoria.chang@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "CTO",
    department: "Leadership",
    profileCoder: "📄{VR=3.3;PI=victoria-chang;OW=Victoria Chang} ▪ 💼{WS=🏢^5;NL=🔊^4} ▪ 🏅{SK=[\"Technology Strategy\",\"Leadership\",\"Architecture\"];EX=12} ▪ 🟢{ST=A~Visionary;AC=STRATEGY;IP=SYNC^4;IT=IMP} ▪ 🧠{CL=M^3;AS=AVA^4;EL=H^5;OT=ST;FS=NA} ▪ 🤝{CM=SEEK^5;SB=H^5;SO=OPEN^4} ▪ 🏙️{EI=ACTIVE;RR=[\"LEADERSHIP\"];LA=true} ▪ 🤖{DL=L^2;AV=DISC;AT=[\"strategic_insights\"]}",
    lastSeen: new Date(Date.now() - 30 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "strategy"
  },
  {
    id: "24",
    name: "Jonathan Park",
    email: "jonathan.park@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "VP of Product",
    department: "Leadership",
    profileCoder: "📄{VR=3.3;PI=jonathan-park;OW=Jonathan Park} ▪ 💼{WS=🏢^4;NL=🔊^5} ▪ 🏅{SK=[\"Product Vision\",\"Strategy\",\"Market Analysis\"];EX=10} ▪ 🟡{ST=B~Board Meeting;AC=MEETING;IP=SYNC^3;IT=IMP} ▪ 🧠{CL=H^4;AS=BUSY^2;EL=M^3;OT=ST;FS=NA} ▪ 🤝{CM=LIMIT^2;SB=M^3;SO=SELECTIVE^3} ▪ 🏙️{EI=ACTIVE;RR=[\"EXECUTIVE\"];LA=true} ▪ 🤖{DL=L^2;AV=DISC;AT=[\"market_analysis\"]}",
    lastSeen: new Date(Date.now() - 120 * 60 * 1000),
    status: "busy",
    cognitiveLoad: "high",
    activity: "meeting"
  },

  // Security Team
  {
    id: "25",
    name: "Hassan Ali",
    email: "hassan.ali@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Security Engineer",
    department: "Security",
    profileCoder: "📄{VR=3.3;PI=hassan-ali;OW=Hassan Ali} ▪ 💼{WS=🔄^4;NL=🔇^5} ▪ 🏅{SK=[\"Cybersecurity\",\"Penetration Testing\",\"Compliance\"];EX=6} ▪ 🟢{ST=A~Vigilant;AC=SECURITY;IP=ASYNC^4;IT=NORM} ▪ 🧠{CL=M^3;AS=AVA^3;EL=M^3;OT=OP;FS=NA} ▪ 🤝{CM=OFFER^3;SB=M^3;SO=SELECTIVE^3} ▪ 🏙️{EI=PASSIVE;RR=[\"SECURITY\"];LA=false} ▪ 🤖{DL=H^4;AV=DISC;AT=[\"threat_monitoring\",\"compliance\"]}",
    lastSeen: new Date(Date.now() - 28 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "monitoring"
  },

  // Data Team
  {
    id: "26",
    name: "Priya Sharma",
    email: "priya.sharma@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Data Engineer",
    department: "Data",
    profileCoder: "📄{VR=3.3;PI=priya-sharma;OW=Priya Sharma} ▪ 💼{WS=🏠^5;NL=🔇^4} ▪ 🏅{SK=[\"ETL\",\"Apache Spark\",\"Data Pipelines\"];EX=5} ▪ 🟢{ST=A~Systematic;AC=PIPELINE;IP=ASYNC^5;IT=NORM} ▪ 🧠{CL=L^2;AS=AVA^4;EL=H^4;OT=AN;FS=NA} ▪ 🤝{CM=OFFER^4;SB=H^4;SO=OPEN^4} ▪ 🏙️{EI=PASSIVE;RR=[\"DATA_FLOW\"];LA=false} ▪ 🤖{DL=H^5;AV=DISC;AT=[\"data_processing\",\"pipeline_monitoring\"]}",
    lastSeen: new Date(Date.now() - 16 * 60 * 1000),
    status: "available",
    cognitiveLoad: "low",
    activity: "development"
  },
  {
    id: "27",
    name: "Oliver Schmidt",
    email: "oliver.schmidt@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "ML Engineer",
    department: "Data",
    profileCoder: "📄{VR=3.3;PI=oliver-schmidt;OW=Oliver Schmidt} ▪ 💼{WS=🔄^4;NL=🔊^2} ▪ 🏅{SK=[\"TensorFlow\",\"PyTorch\",\"MLOps\"];EX=4} ▪ 🟡{ST=B~Model Training;AC=ML;IP=ASYNC^5;IT=LOW} ▪ 🧠{CL=H^4;AS=FOC^5;EL=M^3;OT=AN;FS=DEEP} ▪ 🤝{CM=LIMIT^2;SB=L^2;SO=CLOSED^2} ▪ 🏙️{EI=PASSIVE;RR=[\"NO_INTERRUPTIONS\"];LA=false} ▪ 🤖{DL=H^5;AV=HIDDEN;AT=[\"model_training\",\"experiments\"]}",
    lastSeen: new Date(Date.now() - 75 * 60 * 1000),
    status: "busy",
    cognitiveLoad: "high",
    activity: "deep_work"
  },

  // Legal Team
  {
    id: "28",
    name: "Isabella Rodriguez",
    email: "isabella.rodriguez@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Legal Counsel",
    department: "Legal",
    profileCoder: "📄{VR=3.3;PI=isabella-rodriguez;OW=Isabella Rodriguez} ▪ 💼{WS=🏢^4;NL=🔊^3} ▪ 🏅{SK=[\"Contract Law\",\"Compliance\",\"IP Law\"];EX=8} ▪ 🟢{ST=A~Precise;AC=LEGAL;IP=SYNC^4;IT=IMP} ▪ 🧠{CL=M^3;AS=AVA^4;EL=M^3;OT=AN;FS=NA} ▪ 🤝{CM=OFFER^4;SB=H^4;SO=SELECTIVE^3} ▪ 🏙️{EI=ACTIVE;RR=[\"LEGAL_MATTERS\"];LA=true} ▪ 🤖{DL=M^3;AV=DISC;AT=[\"contract_review\",\"compliance_tracking\"]}",
    lastSeen: new Date(Date.now() - 45 * 60 * 1000),
    status: "available",
    cognitiveLoad: "medium",
    activity: "review"
  },

  // Facilities Team
  {
    id: "29",
    name: "Carlos Mendoza",
    email: "carlos.mendoza@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Facilities Manager",
    department: "Facilities",
    profileCoder: "📄{VR=3.3;PI=carlos-mendoza;OW=Carlos Mendoza} ▪ 💼{WS=🏢^5;NL=🔊^4} ▪ 🏅{SK=[\"Facility Management\",\"Vendor Relations\",\"Safety\"];EX=6} ▪ 🟢{ST=A~Practical;AC=COORD;IP=SYNC^3;IT=NORM} ▪ 🧠{CL=L^2;AS=AVA^4;EL=M^3;OT=OP;FS=NA} ▪ 🤝{CM=OFFER^4;SB=H^4;SO=OPEN^4} ▪ 🏙️{EI=ACTIVE;RR=[\"FACILITIES\"];LA=true} ▪ 🤖{DL=M^3;AV=DISC;AT=[\"maintenance_scheduling\",\"vendor_mgmt\"]}",
    lastSeen: new Date(Date.now() - 32 * 60 * 1000),
    status: "available",
    cognitiveLoad: "low",
    activity: "coordination"
  },

  // Intern
  {
    id: "30",
    name: "Zoe Chen",
    email: "zoe.chen@company.com",
    avatar: "/placeholder.svg",
    relationship: "@Team",
    role: "Software Engineering Intern",
    department: "Engineering",
    profileCoder: "📄{VR=3.3;PI=zoe-chen;OW=Zoe Chen} ▪ 💼{WS=🏢^3;NL=🔊^2} ▪ 🏅{SK=[\"JavaScript\",\"Learning\",\"Git\"];EX=1} ▪ 🟢{ST=A~Eager;AC=LEARNING;IP=SYNC^5;IT=NORM} ▪ 🧠{CL=L^2;AS=AVA^5;EL=H^5;OT=CR;FS=NA} ▪ 🤝{CM=SEEK^5;SB=H^5;SO=OPEN^5} ▪ 🏙️{EI=ACTIVE;RR=[\"MENTORSHIP\"];LA=true} ▪ 🤖{DL=L^1;AV=DISC;AT=[\"learning_resources\"]}",
    lastSeen: new Date(Date.now() - 8 * 60 * 1000),
    status: "available",
    cognitiveLoad: "low",
    activity: "learning"
  }
];
