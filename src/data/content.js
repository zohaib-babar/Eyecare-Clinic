// All the written content of the website lives in this file.
// Edit the text here and every page updates automatically.

export const clinic = {
  name: "EyeCare Clinic",
  phone: "+923248604353",
  phoneLink: "tel:+923248604353",
  email: "zohaibbabar3388@gmail.com",
  address: ["24 Vision Avenue", "Medical District, Your City"],
  hours: [
    { days: "Monday to Friday", time: "8:00 am to 7:00 pm" },
    { days: "Saturday", time: "9:00 am to 4:00 pm" },
    { days: "Sunday", time: "Emergency visits only" },
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const services = [
  {
    id: "eye-exams",
    title: "Comprehensive Eye Exams",
    meta: "About 45 minutes, all ages",
    summary:
      "A thorough check of your vision and eye health, using digital imaging to find changes years before they cause symptoms.",
    points: [
      "Prescription and visual acuity testing",
      "Digital retinal imaging",
      "Eye pressure screening",
      "A written care plan you can keep",
    ],
  },
  {
    id: "cataract-surgery",
    title: "Cataract Surgery",
    meta: "Day procedure",
    summary:
      "Modern, minimally invasive lens replacement with a choice of premium lenses, planned around how you live and see.",
    points: [
      "Precise pre-surgical measurements",
      "Standard and premium lens options",
      "Same-day procedure",
      "Follow-up visits during recovery",
    ],
  },
  {
    id: "laser-vision",
    title: "LASIK and Laser Vision Correction",
    meta: "Consultation first",
    summary:
      "Reduce your reliance on glasses and contact lenses with laser correction guided by detailed corneal mapping.",
    points: [
      "Corneal mapping and suitability check",
      "Custom treatment planning",
      "Clear explanation of risks and results",
      "Aftercare monitoring",
    ],
  },
  {
    id: "glaucoma",
    title: "Glaucoma Care",
    meta: "Ongoing monitoring",
    summary:
      "Regular monitoring and treatment to protect the optic nerve and keep your peripheral vision for as long as possible.",
    points: [
      "Optic nerve imaging",
      "Visual field testing",
      "Drop, laser and surgical options",
      "Scheduled progress reviews",
    ],
  },
  {
    id: "retina-care",
    title: "Retina and Diabetic Eye Care",
    meta: "Yearly screening available",
    summary:
      "Specialist assessment of the retina, with focused screening for patients who live with diabetes.",
    points: [
      "Wide-field retinal scans",
      "Diabetic eye screening",
      "Macular health assessment",
      "Updates shared with your doctor",
    ],
  },
  {
    id: "children",
    title: "Pediatric Eye Care",
    meta: "Infants to teenagers",
    summary:
      "Friendly, patient-paced examinations that support healthy visual development, from the first year onwards.",
    points: [
      "Early vision screening",
      "Lazy eye and squint assessment",
      "Myopia management",
      "Child-friendly testing rooms",
    ],
  },
  {
    id: "dry-eye",
    title: "Dry Eye Treatment",
    meta: "Treatment plans over several weeks",
    summary:
      "Targeted diagnosis and therapy for burning, irritation and blurred vision that comes and goes through the day.",
    points: [
      "Tear film analysis",
      "Eyelid and gland assessment",
      "In-clinic therapies",
      "Home care guidance",
    ],
  },
  {
    id: "optical",
    title: "Contact Lenses and Optical",
    meta: "Walk-ins welcome",
    summary:
      "Expert lens fitting for comfort and clarity, plus a considered range of frames and lenses for everyday wear.",
    points: [
      "Specialty contact lens fitting",
      "Daily and monthly lens options",
      "Quality frames and lens coatings",
      "Adjustments and repairs",
    ],
  },
];

export const whyUs = [
  {
    title: "One team, one record",
    text: "Your optometrist, surgeon and optician share the same notes, so you never repeat your story or wait for results to be passed along.",
  },
  {
    title: "Time to ask questions",
    text: "Appointments are scheduled with room to spare. We explain what we see, what it means and what your options are.",
  },
  {
    title: "Diagnostics on site",
    text: "Digital retinal imaging, corneal mapping and visual field testing are all in the building, which means answers in a single visit.",
  },
  {
    title: "Care across generations",
    text: "We look after toddlers, teenagers, parents and grandparents, and we keep a family-friendly schedule to match.",
  },
];

// Sample testimonials. Replace with real patient feedback (with permission).
export const testimonials = [
  {
    quote:
      "I put off my cataract surgery for two years because I was nervous. The team walked me through every step, and the next morning I could read the street signs from my window.",
    name: "Margaret H.",
    detail: "Cataract surgery patient",
  },
  {
    quote:
      "My son was scared of eye tests. They turned it into a game and he walked out asking when he could come back.",
    name: "Daniel R.",
    detail: "Parent",
  },
  {
    quote:
      "Years of dry eye, and finally someone explained why. The plan was simple and it worked.",
    name: "Priya S.",
    detail: "Dry eye patient",
  },
];

// Replace these figures with your clinic's real numbers.
export const stats = [
  { value: 18, suffix: "", label: "years caring for patients" },
  { value: 25000, suffix: "+", label: "eye examinations completed" },
  { value: 12, suffix: "", label: "specialist clinicians" },
  { value: 98, suffix: "%", label: "of patients would recommend us" },
];

export const values = [
  {
    title: "Precision",
    text: "We measure carefully and double-check our work, because small differences in the eye make a big difference in life.",
  },
  {
    title: "Patience",
    text: "Nobody should feel rushed about their eyesight. We take the time to listen first and examine second.",
  },
  {
    title: "Honesty",
    text: "We recommend treatment only when it will help, and we tell you plainly when waiting is the better choice.",
  },
];

export const milestones = [
  {
    year: "2007",
    title: "The clinic opens",
    text: "Two optometrists open a small practice with one examination room and a simple promise to take time with every patient.",
  },
  {
    year: "2012",
    title: "Surgical suite added",
    text: "A dedicated day-surgery suite allows cataract and laser procedures to be carried out in the same building as consultations.",
  },
  {
    year: "2016",
    title: "Digital imaging upgrade",
    text: "Wide-field retinal imaging and corneal mapping become part of routine examinations.",
  },
  {
    year: "2020",
    title: "Dry eye and myopia programmes",
    text: "Two specialist programmes launch for the conditions our patients ask about most.",
  },
  {
    year: "Today",
    title: "A team of twelve",
    text: "Surgeons, optometrists and opticians continue to work side by side, with the same promise we started with.",
  },
];

// Sample team. Replace with your own clinicians.
export const team = [
  { name: "Dr. Amelia Hart", role: "Lead Ophthalmologist", focus: "Cataract and lens surgery" },
  { name: "Dr. Rohan Mehta", role: "Refractive Surgeon", focus: "Laser vision correction" },
  { name: "Dr. Sofia Alvarez", role: "Retina Specialist", focus: "Retina and diabetic eye care" },
  { name: "Dr. Daniel Okafor", role: "Pediatric Optometrist", focus: "Children and myopia control" },
];

export const steps = [
  {
    title: "Book",
    text: "Choose a time online or by phone. Tell us what is bothering you, and we will make sure the right specialist is free.",
  },
  {
    title: "Assess",
    text: "Painless digital tests give us a precise picture of your vision and the health of each part of your eye.",
  },
  {
    title: "Plan",
    text: "Your clinician explains the results in plain language and agrees a plan with you, from glasses to surgery.",
  },
  {
    title: "Follow up",
    text: "We schedule reviews, send reminders and stay in touch, so small changes are caught early.",
  },
];

export const faqs = [
  {
    q: "How often should I have my eyes examined?",
    a: "Most adults benefit from an examination every one to two years. If you have diabetes, glaucoma in the family, or you are over 60, we usually recommend a visit every year. Children should have their first check before starting school.",
  },
  {
    q: "Do I need a referral to book an appointment?",
    a: "No. You can book any service directly. If you do have a referral letter from your doctor, bring it with you and we will include it in your record.",
  },
  {
    q: "Will my eyes be dilated, and can I drive afterwards?",
    a: "Dilating drops are only used when a detailed view of the retina is needed. They can blur near vision and increase light sensitivity for a few hours, so we suggest bringing sunglasses and, if you can, someone to drive you.",
  },
  {
    q: "Is laser vision correction suitable for everyone?",
    a: "Not always. Suitability depends on your prescription, corneal thickness and general eye health. A consultation with full measurements is the only way to know, and we will say so honestly if it is not the right option.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Bring your current glasses or contact lenses, a list of any medication you take, and any previous eye records. If you have insurance details, bring those too.",
  },
];
