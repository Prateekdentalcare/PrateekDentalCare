import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import { renderLinkedTreatmentText } from './treatmentLinking';
import TreatmentDetailMotion from './TreatmentDetailMotion';
import TreatmentFaqAccordion from './TreatmentFaqAccordion';
import { siteConfig, toAbsoluteUrl } from '../data/site';
import rct1Image from '../assets/rct1.webp';
import rct2Image from '../assets/rct2.webp';
import df1Image from '../assets/df1.webp';
import df2Image from '../assets/df2.webp';
import wtr1Image from '../assets/wtr1.webp';
import wtr2Image from '../assets/wtr2.webp';
import ot1Image from '../assets/ot1.webp';
import ot2Image from '../assets/ot2.webp';
import di1Image from '../assets/di1.webp';
import di2Image from '../assets/di2.webp';
import sp1Image from '../assets/sp1.webp';
import sp2Image from '../assets/sp2.webp';
import d1Image from '../assets/d1.webp';
import d2Image from '../assets/d2.webp';
import db1Image from '../assets/db1.webp';
import db2Image from '../assets/db2.webp';
import dc1Image from '../assets/dc1.webp';
import dc2Image from '../assets/dc2.webp';
import dv1Image from '../assets/dv1.webp';
import dv2Image from '../assets/dv2.webp';
import tw1Image from '../assets/tw1.webp';
import tw2Image from '../assets/tw2.webp';
import te1Image from '../assets/te1.webp';
import te2Image from '../assets/te2.webp';
import kd1Image from '../assets/kd1.webp';
import kd2Image from '../assets/kd2.webp';
import pd1Image from '../assets/pd1.webp';
import pd2Image from '../assets/pd2.webp';
import { 
  Clock, 
  Check, 
  HelpCircle, 
  Plus, 
  Minus, 
  Phone, 
  Calendar, 
  ArrowLeft, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Stethoscope,
  Smile,
  AlertTriangle
} from 'lucide-react';

// Custom treatment details data
const treatmentDetails: Record<string, {
  title: string;
  icon: React.ReactNode;
  images: string[];
  subtitle: string;
  introduction: string;
  overview: string;
  timeRequired: string;
  benefits: string[];
  procedure: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  servicesIncluded?: string[];
  clinicalFocus: string;
  bgColor: string;
  textColor: string;
  illustrationClass: string;
}> = {
  'root-canal': {
    title: 'Root Canal Treatment (RCT) (रूट कॅनल उपचार)',
    icon: <Stethoscope className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      rct1Image.src,
      rct2Image.src,
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auhref=format&fit=crop&w=800&q=80'
    ],
    subtitle: 'Preserve Your Natural Teeth Painlessly',
    introduction: 'A root canal treatment is a specialized endodontic therapy designed to save a severely damaged, decayed, or infected tooth. Rather than extracting the tooth, RCT removes the infected pulp, disinfects the inner chambers, and seals the tooth, fully restoring its structure and function.',
    overview: 'When tooth decay penetrates deep into the inner layer (pulp), or when a tooth is fractured, bacteria can enter the pulp chamber. This causes painful inflammation, infection, and sometimes abscesses. If left untreated, the bone supporting the tooth will break down. Root canal therapy is the only way to save the natural tooth structure, relieve chronic toothaches, and prevent the spread of infection.',
    timeRequired: 'Usually completed in 1 to 2 visits. Each session takes about 45 to 60 minutes depending on the complexity of the root canals.',
    clinicalFocus: 'Endodontics & Pulp Therapy',
    bgColor: 'bg-emerald-50/50',
    textColor: 'text-emerald-600',
    illustrationClass: 'from-emerald-500/20 to-teal-500/10',
    benefits: [
      'Stops severe tooth pain and sensitivity to hot and cold almost instantly.',
      'Preserves your natural tooth, preventing surrounding teeth from drifting out of alignment.',
      'Restores normal biting and chewing forces so you can enjoy your favorite foods.',
      'Protects your jawbone from bone resorption caused by missing teeth.',
      'Virtually pain-free experience with state-of-the-art local anesthesia.'
    ],
    procedure: [
      { step: '01', title: 'Comprehensive Evaluation & Digital X-Ray', desc: 'Our specialist performs a thorough clinical examination and takes high-resolution digital X-rays to visualize the shape of your root canals and determine the extent of the infection.' },
      { step: '02', title: 'Anesthesia & Isolation', desc: 'Local anesthesia is carefully administered to completely numb the area, ensuring your procedure is as pain-free as a standard filling. A protective dental dam isolates the tooth.' },
      { step: '03', title: 'Accessing the Pulp Chamber', desc: 'A small access hole is created in the crown of the tooth. Using state-of-the-art micro-endodontic instruments, our dentist removes the inflamed, infected, or dead pulp tissue.' },
      { step: '04', title: 'Thorough Cleaning & Shaping', desc: 'The hollow root canals are meticulously cleaned, widened, and shaped. They are flushed with special antibacterial solutions to eliminate all traces of bacteria and debris.' },
      { step: '05', title: 'Sealing the Canals', desc: 'The sanitized canals are filled and sealed using a biocompatible, rubber-like material called gutta-percha to prevent future bacterial penetration.' },
      { step: '06', title: 'Final Restoration (Crown)', desc: 'The access opening is sealed with a permanent filling. Since a root-canaled tooth becomes brittle over time, a custom dental crown is placed to restore full strength and aesthetics.' }
    ],
    faqs: [
      { q: 'Is a root canal treatment painful?', a: 'No, with modern local anesthesia and advanced dental techniques, a root canal is no more painful than getting a simple filling. In fact, the procedure is done to relieve the severe pain caused by the tooth infection.' },
      { q: 'Why do I need a crown after a root canal?', a: 'After a root canal, the tooth no longer has its living pulp (which provides blood supply and nourishment). This makes the tooth structure more brittle and prone to fracturing. A custom crown acts as a protective helmet, restoring its full strength.' },
      { q: 'How long does a root-canaled tooth last?', a: 'With excellent oral hygiene, regular brushing, flossing, and routine dental cleanings, a tooth restored with a root canal and crown can last a lifetime.' }
    ]
  },
  'implants': {
    title: 'Dental Implants (दंत इम्प्लांट)',
    icon: <Layers className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      di1Image.src,
      di2Image.src,
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auhref=format&fit=crop&w=800&q=80'
    ],
    subtitle: 'The Permanent, Natural-Looking Solution for Missing Teeth',
    introduction: 'A dental implant is a revolutionary, high-tech solution for replacing missing teeth. It consists of a medical-grade titanium screw that is surgically placed into the jawbone, acting as a sturdy root for a custom-made crown that looks, feels, and functions exactly like a natural tooth.',
    overview: 'Whether you lost a tooth due to decay, gum disease, or an injury, dental implants offer the most durable restoration available. Unlike bridges, implants do not require grinding down adjacent teeth. They stimulate the jawbone just like a natural tooth root, preventing the bone loss and facial sagging that naturally occur after tooth loss.',
    timeRequired: 'Typically completed in phases over 3 to 6 months to allow the implant post to fuse securely with your jawbone.',
    clinicalFocus: 'Implantology & Restorative Surgery',
    bgColor: 'bg-blue-50/50',
    textColor: 'text-blue-600',
    illustrationClass: 'from-blue-500/20 to-indigo-500/10',
    benefits: [
      'Provides a virtually identical look, feel, and function to natural teeth.',
      'Prevents bone loss in the jaw, preserving your youthful facial contours.',
      'Does not compromise adjacent teeth (unlike dental bridges).',
      'Provides superior stability so you can chew, speak, and smile with absolute confidence.',
      'Boasts an outstanding success rate of over 95-98% and can last a lifetime with proper care.'
    ],
    procedure: [
      { step: '01', title: 'Initial Consultation & 3D Imaging', desc: 'We take highly detailed 3D CBCT scans of your jawbone to evaluate the bone density, map out nerves, and plan the precise depth and angle for the implant placement.' },
      { step: '02', title: 'Surgical Implant Placement', desc: 'Under local anesthesia, the titanium implant post is gently inserted into the jawbone. A protective cap is placed, and the area is allowed to heal.' },
      { step: '03', title: 'Osseointegration (Healing Period)', desc: 'Over the next 3 to 6 months, the bone grows around the titanium post in a process called osseointegration, creating an extremely strong, permanent biological bond.' },
      { step: '04', title: 'Abutment Attachment', desc: 'Once healing is complete, a small connector piece called an abutment is securely attached to the titanium post to support your upcoming crown.' },
      { step: '05', title: 'Custom Crown Fabrication', desc: 'We take high-precision digital impressions of your teeth to fabricate a bespoke porcelain crown that matches the shape, size, and exact shade of your adjacent teeth.' },
      { step: '06', title: 'Securing the Crown', desc: 'The custom porcelain crown is permanently attached to the abutment, completing your gorgeous, fully restored, high-strength dental restoration.' }
    ],
    faqs: [
      { q: 'Am I a candidate for dental implants?', a: 'Generally, anyone in good health who has lost one or more teeth is a candidate. The primary requirement is having adequate jawbone density to anchor the implant. If your bone density is low, bone grafting can be performed to make you an ideal candidate.' },
      { q: 'How long do dental implants last?', a: 'The titanium implant screw itself is designed to last a lifetime because it fuses biologically with your jawbone. The crown placed on top may experience normal wear and tear and might need replacement after 15-20 years.' },
      { q: 'Is the dental implant surgery painful?', a: 'No, the surgery is performed under local anesthesia so you will feel no pain during the procedure. Most patients report that any post-operative discomfort is very mild and can be easily managed with over-the-counter pain relievers for 2-3 days.' }
    ]
  },
  'kids-dentistry': {
    title: 'Kids Dentistry (लहान मुलांचे दंत उपचार)',
    icon: <Smile className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      kd1Image.src,
      kd2Image.src
    ],
    subtitle: 'Gentle, Fun, and Preventive Dental Care for Growing Smiles',
    introduction: 'Kids Dentistry (Pediatric Dentistry) provides gentle, specialized, and highly engaging oral care for infants, children, and teenagers. Our focus is on preventing cavities, monitoring growth, and making sure your child feels completely safe and excited about visiting the dentist.',
    overview: 'Children\'s primary teeth (baby teeth) are crucial for speaking, chewing, and holding space for upcoming permanent teeth. Early childhood tooth decay can occur quickly, which is why specialized pediatric care is vital. We utilize gentle techniques, positive reinforcement, and interactive education to ensure your child develops healthy, lifelong brushing and flossing habits.',
    timeRequired: 'Each pediatric checkup and cleaning takes about 30 to 45 minutes. Routine visits are recommended every 6 months.',
    clinicalFocus: 'Pediatric Dentistry & Prevention',
    bgColor: 'bg-amber-50/50',
    textColor: 'text-amber-600',
    illustrationClass: 'from-amber-500/20 to-orange-500/10',
    benefits: [
      'Prevents early childhood cavities through professional cleanings and fluoride therapies.',
      'Maintains primary teeth to ensure proper speech development and permanent teeth alignment.',
      'Fosters a warm, positive, fear-free relationship with dental visits to eliminate anxiety.',
      'Provides dental sealants that act as a shield to block 80% of cavities on back molars.',
      'Early detection and guidance for developmental habits like thumb sucking or tongue thrusting.'
    ],
    servicesIncluded: [
      'Infant Oral Health Check-up',
      'Routine Dental Check-up',
      'Preventive Dental Care',
      'Dental Cleaning (Scaling & Polishing)',
      'Fluoride Treatment',
      'Pit & Fissure Sealants',
      'Tooth-Coloured Fillings for Milk Teeth',
      'Root Canal Treatment for Milk Teeth (Pulpectomy)',
      'Pulp Therapy (Pulpotomy)',
      'Stainless Steel Crowns (SSC) for Milk Teeth',
      'Extraction of Milk Teeth',
      'Space Maintainers',
      'Early Orthodontic Assessment',
      'Habit-Breaking Appliances (Thumb Sucking, Tongue Thrusting)',
      'Treatment of Dental Cavities',
      'Emergency Dental Care for Broken or Knocked-Out Teeth',
      'Management of Dental Trauma',
      'Treatment for Tooth Sensitivity',
      'Management of Gum Problems in Children',
      'Monitoring Tooth Eruption and Jaw Growth',
      'Preventive Orthodontics',
      'Mouth Guards for Sports',
      'Oral Hygiene Education for Children and Parents',
      'Diet & Nutrition Counselling for Healthy Teeth',
      'Regular Six-Month Preventive Visits'
    ],
    procedure: [
      { step: '01', title: 'Friendly Introduction & Orientation', desc: 'We introduce your child to the dental team, chair, and fun instruments using positive language like "tooth-tickler" and "water-squirt" to eliminate fear.' },
      { step: '02', title: 'Gentle Examination', desc: 'Our specialist gently examines your child\'s teeth, gums, jaw development, and bite alignment, tracking healthy growth.' },
      { step: '03', title: 'Professional Cleaning & Polishing', desc: 'We carefully remove plaque and tartar build-up from hard-to-reach areas, followed by a gentle polish to make their teeth shine.' },
      { step: '04', title: 'Protective Fluoride Application', desc: 'A quick-setting, delicious-tasting fluoride varnish is applied to strengthen the enamel and make teeth highly resistant to decay.' },
      { step: '05', title: 'Applying Dental Sealants (If needed)', desc: 'For deep grooves on chewing surfaces, we apply thin, protective resin sealants that prevent food particles and bacteria from settling in.' },
      { step: '06', title: 'Interactive Oral Hygiene Coaching', desc: 'We demonstrate proper brushing and flossing techniques using interactive models, empowering your child and providing diet advice to parents.' }
    ],
    faqs: [
      { q: 'When should my child have their first dental visit?', a: 'According to pediatric associations, a child should visit the dentist within 6 months of their first tooth erupting, or by their first birthday.' },
      { q: 'What are dental sealants and why are they helpful?', a: 'Sealants are thin, safe, protective coatings painted onto the chewing surfaces of the back molars. They bond into the grooves of the teeth, forming a shield that prevents food and bacteria from causing decay in highly vulnerable areas.' },
      { q: 'Why are baby teeth important if they just fall out anyway?', a: 'Baby teeth serve several essential functions: they allow proper chewing for healthy nutrition, help children develop clear speech, and critically, they act as natural space maintainers that guide permanent adult teeth into their correct positions.' }
    ]
  },
  'orthodontics': {
    title: 'Orthodontic Treatment (दात सरळ करण्याचा उपचार)',
    icon: <Activity className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      ot1Image.src,
      ot2Image.src,
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auhref=format&fit=crop&w=800&q=80'
    ],
    subtitle: 'Align Your Teeth and Transform Your Confidence',
    introduction: 'Orthodontic treatment uses advanced braces or clear, removable aligners to correct crooked teeth, close gaps, and fix bite misalignments. The goal is to give you a perfectly straight, aesthetically pleasing smile that also works in perfect harmony.',
    overview: 'Misaligned teeth are not just a cosmetic issue; they are harder to clean, putting you at higher risk for tooth decay, gum disease, and uneven tooth wear. Overbites, underbites, and crossbites can also cause speech issues, jaw joint (TMJ) strain, and chronic headaches. Modern orthodontics offers highly aesthetic, comfortable options like transparent clear aligners (Invisalign) and modern low-profile braces to comfortably align smiles of all ages.',
    timeRequired: 'Varies from 12 to 24 months depending on individual complexity. Periodic follow-ups are scheduled every 4 to 6 weeks.',
    clinicalFocus: 'Orthodontics & Dentofacial Orthopedics',
    bgColor: 'bg-purple-50/50',
    textColor: 'text-purple-600',
    illustrationClass: 'from-purple-500/20 to-pink-500/10',
    benefits: [
      'Achieves a perfectly straight, highly aesthetic, and beautiful smile.',
      'Significantly simplifies brushing and flossing, lowering decay and gum disease risk.',
      'Corrects bite misalignments to resolve chewing difficulties and speech issues.',
      'Reduces muscle strain in the jaw, alleviating TMJ pain and headaches.',
      'Boosts self-esteem and social confidence in both personal and professional life.'
    ],
    procedure: [
      { step: '01', title: 'Orthodontic Consultation & 3D Scanning', desc: 'We take high-definition panoramic X-rays, facial photographs, and direct 3D digital impressions of your teeth to analyze your exact bite and root alignment.' },
      { step: '02', title: 'Customized Treatment Planning', desc: 'Using state-of-the-art computer simulation, we map out the step-by-step movement of your teeth and design your personalized traditional braces or clear aligners.' },
      { step: '03', title: 'Fitting the Braces or Aligners', desc: 'For braces, brackets are meticulously bonded to your teeth and connected with a flexible archwire. For clear aligners, we deliver your first series of customized, invisible aligner trays.' },
      { step: '04', title: 'Periodic Adjustment Sessions', desc: 'You visit us every 4 to 6 weeks for wire adjustments, or to receive your next sets of aligner trays, tracking your gradual tooth movement.' },
      { step: '05', title: 'Debonding & Deep Cleaning', desc: 'Once your teeth are perfectly aligned, the braces are gently removed, followed by a thorough dental cleaning and polishing to reveal your new smile.' },
      { step: '06', title: 'Retention Phase', desc: 'To prevent teeth from slowly drifting back, we fabricate a custom, lightweight retainer (removable or fixed) to keep your beautiful teeth in place forever.' }
    ],
    faqs: [
      { q: 'Am I too old for orthodontic braces or aligners?', a: 'Absolutely not! Teeth can be safely moved at any age. Today, a huge percentage of orthodontic patients are adults, who love discreet options like clear invisible aligners and ceramic tooth-colored braces.' },
      { q: 'What is the difference between traditional braces and clear aligners?', a: 'Traditional braces consist of metal or ceramic brackets bonded to the teeth and are not removable. Clear aligners are virtually invisible, custom-made plastic trays that can be removed for eating, drinking, brushing, and flossing.' },
      { q: 'Does getting braces or aligners hurt?', a: 'The initial placement is completely painless. You will feel some mild pressure, tightness, or muscle soreness for 3-5 days after braces are fitted or when changing to a new set of aligner trays. This is a positive sign that your teeth are safely moving.' }
    ]
  },
  'wisdom-teeth': {
    title: 'Wisdom Teeth Removal (अक्कल दात काढणे)',
    icon: <AlertTriangle className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      wtr1Image.src,
      wtr2Image.src,
      'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixlib=rb-4.0.3&auhref=format&fit=crop&w=800&q=80'
    ],
    subtitle: 'Safe, Painless, and Proactive Removal of Third Molars',
    introduction: 'Wisdom tooth extraction is a specialized dental procedure to safely remove one or more third molars, which are the last set of permanent adult teeth to grow in. This is performed to relieve pain, eliminate infection, and protect your surrounding teeth from severe damage.',
    overview: 'Because modern human jaws are smaller than our ancestors\', wisdom teeth often lack the space to grow properly. This causes them to become "impacted" (trapped under the gums or bone) or grow at awkward angles. Impacted wisdom teeth can cause severe dental pain, painful swelling, decay in adjacent teeth, jaw bone infection, and the formation of destructive fluid-filled cysts. Removing them early prevents these issues from developing.',
    timeRequired: 'The actual extraction takes about 45 to 60 minutes. Soft tissues generally heal in 7 to 10 days.',
    clinicalFocus: 'Oral & Maxillofacial Surgery',
    bgColor: 'bg-rose-50/50',
    textColor: 'text-rose-600',
    illustrationClass: 'from-rose-500/20 to-red-500/10',
    benefits: [
      'Instantly relieves chronic pain, pressure, and swelling at the back of the mouth.',
      'Prevents wisdom teeth from pushing other teeth, maintaining straight orthodontic alignment.',
      'Eliminates the high risk of painful gum infections (pericoronitis) and jaw cysts.',
      'Protects adjacent second molars from decay and bone loss caused by hard-to-clean spaces.',
      'Safe, smooth surgical procedure performed with advanced numbing and sedation options.'
    ],
    procedure: [
      { step: '01', title: 'Panoramic X-Ray Assessment', desc: 'We capture detailed digital panoramic X-rays to assess the angle, root shape, depth of impaction, and proximity of the wisdom teeth to sensory nerves.' },
      { step: '02', title: 'Anesthesia & Deep Comfort', desc: 'Local anesthesia is administered to ensure the entire treatment area is completely numb. Optional conscious sedation is available for dental anxiety.' },
      { step: '03', title: 'Accessing the Impacted Tooth', desc: 'A tiny, precise incision is made in the gum tissue to expose the tooth and any thin layer of bone covering it, ensuring minimal tissue disturbance.' },
      { step: '04', title: 'Sectioning the Tooth', desc: 'The wisdom tooth is often carefully divided into smaller sections using microscopic instruments, allowing it to be removed smoothly and gently.' },
      { step: '05', title: 'Socket Cleaning & Sutures', desc: 'The empty socket is meticulously cleaned and disinfected. Gentle dissolvable sutures are placed to promote rapid, comfortable gum healing.' },
      { step: '06', title: 'Post-Operative Recovery Care', desc: 'We provide specialized healing packs, detailed care instructions, soft-food recipes, and prescription medicine to guarantee a comfortable recovery.' }
    ],
    faqs: [
      { q: 'How long does recovery take after wisdom teeth extraction?', a: 'Most patients experience a quick recovery, returning to school or work within 3 to 4 days. Soft foods should be eaten for the first few days, and complete soft-tissue healing occurs in about 2 weeks.' },
      { q: 'What is dry socket and how can I prevent it?', a: 'A dry socket is a temporary, painful condition that occurs if the protective blood clot in the socket is dislodged before healing. You can easily prevent it by avoiding smoking, drinking through straws, and intense spitting or rinsing for 48 hours.' },
      { q: 'Do all wisdom teeth need to be extracted?', a: 'No, if your wisdom teeth emerge fully straight, are functional, cleanable, and painless, they do not need to be removed. Extraction is only recommended if they are impacted or pose a risk to your other teeth.' }
    ]
  },
  'tooth-extraction': {
    title: 'Tooth Extraction (दात काढणे)',
    icon: <ShieldCheck className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      te1Image.src,
      te2Image.src
    ],
    subtitle: 'Safe, Gentle, and Stress-Free Tooth Removal',
    introduction: 'A dental extraction is the safe and comfortable removal of a tooth from its bone socket. It is performed as a last resort when a tooth is too severely damaged, fractured, or infected to be saved by a root canal or crown.',
    overview: 'While our primary objective is always to preserve your natural teeth, there are situations where leaving a severely damaged tooth can cause excruciating pain, massive swelling, and life-threatening bone infections. An extraction safely stops the spread of infection, prepares the area for a permanent replacement like a dental implant, and immediately restores your overall physical comfort and health.',
    timeRequired: 'Typically takes 20 to 45 minutes depending on the tooth structure and location.',
    clinicalFocus: 'Exodontia & Preventive Surgery',
    bgColor: 'bg-sky-50/50',
    textColor: 'text-sky-600',
    illustrationClass: 'from-sky-500/20 to-blue-500/10',
    benefits: [
      'Immediately stops chronic tooth pain, pressure, and localized infections.',
      'Prevents dangerous dental abscesses from spreading to other parts of your body.',
      'Maintains jawbone integrity when performed using gentle, bone-preserving techniques.',
      'Clears the way for a beautifully designed permanent replacement, like a dental implant.',
      'A completely painless experience under precise, modern local anesthesia.'
    ],
    procedure: [
      { step: '01', title: 'X-Ray & Root Structure Study', desc: 'We take focused digital X-rays to map the precise shape, length, and curvature of the tooth\'s roots and inspect the density of the surrounding bone.' },
      { step: '02', title: 'Targeted Local Anesthesia', desc: 'We apply a numbing gel, followed by local anesthesia, ensuring the entire tooth and surrounding gums are completely numb before we begin.' },
      { step: '03', title: 'Gently Loosening the Tooth', desc: 'Using specialized micro-instruments, the tooth is gently and gradually loosened in its socket, preserving maximum surrounding bone structure.' },
      { step: '04', title: 'Careful Removal', desc: 'Once fully loose, the tooth is lifted out smoothly. You will feel a sensation of pressure, but absolutely no sharp pain.' },
      { step: '05', title: 'Socket Cleaning & Gauze Placement', desc: 'The empty socket is sanitized, and a sterile gauze pad is placed. Biting on the gauze helps form a healthy blood clot to initiate natural healing.' },
      { step: '06', title: 'Preservation & Replacement Consultation', desc: 'We guide you through customized post-care instructions and discuss excellent replacement options like implants or bridges to prevent future bone loss.' }
    ],
    faqs: [
      { q: 'Will it hurt to have my tooth extracted?', a: 'No, you will not feel any pain. Local anesthesia is highly effective at blocking all pain receptors. You will feel a dull pressure sensation as the tooth is gently loosened, which is completely normal.' },
      { q: 'What is the immediate post-operative care?', a: 'Keep biting on the sterile gauze for 30-45 minutes. Avoid drinking through a straw, smoking, brushing near the site, or engaging in strenuous exercise for the first 24 hours. Stick to soft, cool foods.' },
      { q: 'How soon can I replace my extracted tooth?', a: 'In some cases, a dental implant can be placed immediately on the same day as the extraction. Otherwise, we usually wait 2 to 3 months for the bone to heal completely before placing an implant or dental bridge.' }
    ]
  },
  'dental-fillings': {
    title: 'Dental Fillings (दात भरणे)',
    icon: <ShieldCheck className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      df1Image.src,
      df2Image.src,
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    subtitle: 'Restore Strength, Shape, and Comfort to Damaged Teeth',
    introduction: 'Dental fillings restore teeth affected by decay, small fractures, or worn-out restorations. By replacing the damaged portion with tooth-colored or durable restorative materials, fillings help preserve your natural tooth and return it to comfortable daily function.',
    overview: 'When cavities, chipping, or structural wear weaken a tooth, leaving it untreated can allow bacteria to spread deeper and may eventually lead to pain or more invasive procedures. Fillings seal the affected area, rebuild the lost structure, and protect the tooth from further breakdown while maintaining a natural appearance.',
    timeRequired: 'Usually completed in a single visit in about 30 to 60 minutes, depending on the size and number of teeth involved.',
    clinicalFocus: 'Restorative Dentistry',
    bgColor: 'bg-cyan-50/50',
    textColor: 'text-cyan-600',
    illustrationClass: 'from-cyan-500/20 to-sky-500/10',
    benefits: [
      'Stops further decay by sealing vulnerable tooth surfaces.',
      'Restores biting comfort and chewing efficiency.',
      'Preserves natural tooth structure and avoids unnecessary extraction.',
      'Improves aesthetics with tooth-colored modern materials.',
      'Helps prevent deeper infection that may later require root canal therapy.'
    ],
    procedure: [
      { step: '01', title: 'Examination and Diagnosis', desc: 'We assess the affected tooth clinically and, when needed, with digital X-rays to confirm the depth of the cavity or fracture.' },
      { step: '02', title: 'Local Anesthesia', desc: 'If the area is sensitive or the cavity is deeper, local anesthesia is used to ensure the procedure remains comfortable.' },
      { step: '03', title: 'Decay Removal', desc: 'The damaged or decayed tooth structure is carefully removed using conservative techniques to preserve as much healthy enamel and dentin as possible.' },
      { step: '04', title: 'Tooth Preparation', desc: 'The cleaned cavity is shaped and conditioned so the restorative material can bond securely and fit properly.' },
      { step: '05', title: 'Filling Placement', desc: 'The selected filling material is placed in layers, shaped to match your natural bite, and cured or hardened for long-lasting support.' },
      { step: '06', title: 'Finishing and Polishing', desc: 'We fine-tune the bite, smooth the edges, and polish the restoration so it feels natural and blends with the surrounding tooth.' }
    ],
    faqs: [
      { q: 'Are tooth-colored fillings durable?', a: 'Yes. Modern composite restorations are strong, aesthetic, and suitable for many front and back teeth when planned properly.' },
      { q: 'Will I be able to eat after the filling?', a: 'In most cases, yes. Once numbness wears off, you can usually return to normal eating unless we advise temporary precautions.' },
      { q: 'How do I know if I need a filling?', a: 'Sensitivity, food getting stuck, visible dark spots, or a chipped tooth may indicate the need for a filling, but a proper dental exam is the best way to confirm it.' }
    ]
  },
  'scaling-polishing': {
    title: 'Scaling and Polishing (दात स्वच्छ करणे)',
    icon: <ShieldCheck className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      sp1Image.src,
      sp2Image.src,
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    subtitle: 'Deep Cleaning for Healthier Teeth and Gums',
    introduction: 'Scaling and polishing is a professional dental cleaning procedure that removes plaque, tartar, and surface stains from areas regular brushing cannot reach. It is one of the most important preventive treatments for maintaining healthy gums and fresh breath.',
    overview: 'Even with good home care, hardened deposits can accumulate around teeth and below the gumline. These deposits irritate the gums, contribute to bleeding, and can eventually cause gum disease. Professional scaling removes those irritants, while polishing smooths the tooth surfaces and improves cleanliness and appearance.',
    timeRequired: 'Usually 30 to 60 minutes depending on the amount of buildup and the condition of the gums.',
    clinicalFocus: 'Preventive and Periodontal Care',
    bgColor: 'bg-teal-50/50',
    textColor: 'text-teal-600',
    illustrationClass: 'from-teal-500/20 to-cyan-500/10',
    benefits: [
      'Removes tartar and plaque that cannot be eliminated with brushing alone.',
      'Helps control gum bleeding, swelling, and early gum disease.',
      'Freshens breath by reducing bacteria buildup.',
      'Reduces stains for a cleaner, brighter smile.',
      'Supports long-term oral hygiene and preventive dental care.'
    ],
    procedure: [
      { step: '01', title: 'Oral Assessment', desc: 'We examine your gums and teeth to identify plaque deposits, tartar buildup, staining, and areas of inflammation.' },
      { step: '02', title: 'Ultrasonic Scaling', desc: 'An ultrasonic scaler loosens and removes hardened tartar efficiently from above and around the gumline.' },
      { step: '03', title: 'Manual Fine Scaling', desc: 'Hand instruments are used where needed to clean smaller or more stubborn deposits in a controlled manner.' },
      { step: '04', title: 'Surface Polishing', desc: 'The teeth are polished to smooth the enamel surface and remove external staining and residual plaque film.' },
      { step: '05', title: 'Rinsing and Review', desc: 'We rinse the mouth thoroughly and check that the teeth and gum margins are clean and smooth.' },
      { step: '06', title: 'Home Care Guidance', desc: 'You receive brushing, flossing, and maintenance advice to help you preserve the results between visits.' }
    ],
    faqs: [
      { q: 'Does scaling damage the enamel?', a: 'No. When performed professionally, scaling removes deposits from the tooth surface without harming healthy enamel.' },
      { q: 'Why do my teeth feel cleaner after polishing?', a: 'Polishing smooths the surface, making it harder for plaque and stains to attach immediately again.' },
      { q: 'How often should I get scaling and polishing?', a: 'Most patients benefit from it every 6 months, but people with gum issues may need it more frequently.' }
    ]
  },
  'dentures': {
    title: 'Dentures (बनावटी दात)',
    icon: <Layers className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      d1Image.src,
      d2Image.src,
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    subtitle: 'Functional and Aesthetic Replacement for Missing Teeth',
    introduction: 'Dentures are removable prosthetic appliances used to replace multiple missing teeth or full arches. They are designed to restore appearance, support facial structure, and improve chewing and speech for patients who have experienced tooth loss.',
    overview: 'Missing teeth can affect confidence, nutrition, speech clarity, and the overall balance of the mouth. Dentures provide a practical restorative option for patients who are not suitable for fixed solutions or who need broader replacement support. Modern dentures are designed to fit more comfortably and look more natural than older generations.',
    timeRequired: 'Usually requires multiple appointments over 1 to 3 weeks, depending on the type of denture and adjustment needs.',
    clinicalFocus: 'Prosthodontic Rehabilitation',
    bgColor: 'bg-indigo-50/50',
    textColor: 'text-indigo-600',
    illustrationClass: 'from-indigo-500/20 to-blue-500/10',
    benefits: [
      'Restores facial support and improves smile appearance.',
      'Helps improve chewing, speaking, and day-to-day comfort.',
      'Offers an effective option for partial or complete tooth replacement.',
      'Can be customized for fit, shape, and natural tooth shade.',
      'Provides a non-surgical restorative option when implants are not preferred.'
    ],
    procedure: [
      { step: '01', title: 'Initial Consultation', desc: 'We assess missing teeth, jaw support, gum condition, and your treatment goals to determine the most suitable denture option.' },
      { step: '02', title: 'Impressions and Measurements', desc: 'Detailed impressions and bite records are taken to capture the shape of your mouth and create a stable, balanced design.' },
      { step: '03', title: 'Trial Setup', desc: 'A trial version may be checked to confirm tooth position, bite alignment, lip support, and appearance before final processing.' },
      { step: '04', title: 'Final Denture Delivery', desc: 'The finished denture is inserted and evaluated for comfort, retention, appearance, and functional balance.' },
      { step: '05', title: 'Adjustment Appointment', desc: 'Minor pressure points or bite issues are corrected after short-term use to improve comfort and adaptation.' },
      { step: '06', title: 'Maintenance and Review', desc: 'We explain cleaning, storage, and long-term maintenance so the denture continues to function well over time.' }
    ],
    faqs: [
      { q: 'Will dentures feel strange at first?', a: 'Yes, there is usually an adjustment period, but most patients adapt well with proper fit and follow-up adjustments.' },
      { q: 'Can I eat normally with dentures?', a: 'You can gradually return to a broader diet, though it may take some practice and adaptation in the beginning.' },
      { q: 'How do I care for dentures?', a: 'They should be cleaned daily, handled carefully, and reviewed periodically to maintain fit and hygiene.' }
    ]
  },
  'bridges-crowns-veneers': {
    title: 'Bridges, Crowns, and Veneers (ब्रिज, कॅप आणि व्हिनिअर्स)',
    icon: <Layers className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      db1Image.src,
      db2Image.src,
      dc1Image.src,
      dc2Image.src,
      dv1Image.src,
      dv2Image.src
    ],
    subtitle: 'Restore Strength, Function, and Smile Aesthetics',
    introduction: 'Crowns, bridges, and veneers are versatile restorative and cosmetic solutions used to strengthen damaged teeth, replace missing teeth, and improve smile appearance. Each option is selected based on the condition of your teeth and your functional and aesthetic goals.',
    overview: 'A crown protects and rebuilds a weak or root-treated tooth. A bridge replaces one or more missing teeth by anchoring to neighboring support teeth or implants. Veneers are thin cosmetic shells placed on front teeth to improve shape, shade, and symmetry. Together, these treatments help restore a balanced, durable, and natural-looking smile.',
    timeRequired: 'Generally completed over 2 to 3 visits depending on whether the treatment is a crown, bridge, or veneer case.',
    clinicalFocus: 'Restorative and Cosmetic Dentistry',
    bgColor: 'bg-violet-50/50',
    textColor: 'text-violet-600',
    illustrationClass: 'from-violet-500/20 to-fuchsia-500/10',
    benefits: [
      'Protects weakened or heavily restored teeth from fracture.',
      'Replaces missing teeth to improve bite and smile continuity.',
      'Enhances the color, shape, and appearance of visible teeth.',
      'Improves chewing stability and overall oral balance.',
      'Offers custom-made restorations that blend with natural teeth.'
    ],
    procedure: [
      { step: '01', title: 'Evaluation and Planning', desc: 'We assess the teeth involved, bite relationship, smile line, and structural needs to select the right restorative option.' },
      { step: '02', title: 'Tooth Preparation', desc: 'The tooth or teeth are prepared conservatively to create the right form and support for the final restoration.' },
      { step: '03', title: 'Impressions or Digital Scans', desc: 'Precise records are taken so the restoration can be fabricated to the correct fit, contour, and shade.' },
      { step: '04', title: 'Temporary Protection', desc: 'Temporary restorations may be placed to protect the prepared teeth while the final work is fabricated.' },
      { step: '05', title: 'Final Try-In and Fit Check', desc: 'The final crown, bridge, or veneer is checked for shade, margins, bite accuracy, and overall appearance.' },
      { step: '06', title: 'Bonding or Cementation', desc: 'The restoration is bonded or cemented securely, then refined for comfort, aesthetics, and long-term function.' }
    ],
    faqs: [
      { q: 'How long do crowns and bridges last?', a: 'With good oral hygiene and regular dental care, they can last many years, often well over a decade.' },
      { q: 'Are veneers only cosmetic?', a: 'They are primarily aesthetic, but they can also help improve minor shape and surface defects on front teeth.' },
      { q: 'Will these restorations look natural?', a: 'Yes. They are custom-designed to match your surrounding teeth in size, contour, and shade.' }
    ]
  },
  'smile-makeover-teeth-whitening': {
    title: 'Smile Makeover & Teeth Whitening (स्माईल मेकओव्हर आणि दात पांढरे करणे)',
    icon: <Smile className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      tw1Image.src,
      tw2Image.src
    ],
    subtitle: 'Enhance Brightness, Balance, and Smile Confidence',
    introduction: 'Smile makeover and teeth whitening treatments are designed to improve the appearance of your smile by addressing discoloration, minor irregularities, worn edges, and overall aesthetic harmony. These treatments are planned around your facial features and desired outcome.',
    overview: 'A smile makeover may combine whitening, reshaping, bonding, veneers, or restorative refinements depending on the case. Teeth whitening alone is a conservative option to lift stains and brighten natural enamel. Together, these treatments help create a fresher, more confident smile while keeping the plan as minimally invasive as possible.',
    timeRequired: 'Teeth whitening may take one appointment, while complete smile-makeover plans vary based on the number and type of procedures involved.',
    clinicalFocus: 'Cosmetic Smile Design',
    bgColor: 'bg-amber-50/50',
    textColor: 'text-amber-600',
    illustrationClass: 'from-amber-500/20 to-yellow-500/10',
    benefits: [
      'Brightens stained or dull teeth for a fresher appearance.',
      'Improves smile symmetry, proportion, and visual balance.',
      'Can address multiple cosmetic concerns in one coordinated plan.',
      'Boosts personal confidence in social and professional settings.',
      'Offers both conservative and comprehensive cosmetic options.'
    ],
    procedure: [
      { step: '01', title: 'Smile Assessment', desc: 'We evaluate tooth shade, tooth proportions, gum display, facial balance, and aesthetic concerns to define the best plan.' },
      { step: '02', title: 'Treatment Planning', desc: 'A customized cosmetic roadmap is created, whether you need whitening alone or a broader combination of aesthetic procedures.' },
      { step: '03', title: 'Pre-Treatment Preparation', desc: 'Teeth are cleaned and any existing issues such as decay or gum inflammation are addressed before cosmetic enhancement begins.' },
      { step: '04', title: 'Whitening or Aesthetic Procedure', desc: 'Whitening gel, bonding, veneers, or other planned cosmetic steps are carried out with attention to shade and natural appearance.' },
      { step: '05', title: 'Refinement and Review', desc: 'The smile is reviewed from both functional and aesthetic angles, with adjustments made where needed for harmony and comfort.' },
      { step: '06', title: 'Maintenance Guidance', desc: 'We provide aftercare instructions and stain-control advice to help maintain the brightness and quality of your result.' }
    ],
    faqs: [
      { q: 'Is teeth whitening safe?', a: 'Yes, when done professionally and under supervision, whitening is considered safe and predictable for suitable patients.' },
      { q: 'How long do whitening results last?', a: 'Results vary depending on diet, habits, and oral care, but they can last many months with proper maintenance.' },
      { q: 'Can every smile be improved with whitening alone?', a: 'Not always. Some smiles benefit more from a combination of whitening and other cosmetic or restorative treatments.' }
    ]
  },
  'preventive-dentistry': {
    title: 'Preventive Dentistry (प्रतिबंधक दंत उपचार)',
    icon: <ShieldCheck className="w-12 h-12 text-[#48b5c4]" />,
    images: [
      pd1Image.src,
      pd2Image.src
    ],
    subtitle: 'Protect Your Teeth Before Problems Become Bigger',
    introduction: 'Preventive dentistry focuses on maintaining healthy teeth and gums through regular checkups, professional cleaning, early diagnosis, and guided home care. It is the foundation of long-term oral health and helps reduce the need for complex treatment later.',
    overview: 'Many dental problems begin silently and progress before pain appears. Preventive care allows us to identify early cavities, gum inflammation, bite wear, and hygiene-related risks before they become more serious. This approach saves time, protects tooth structure, and helps you maintain a cleaner, healthier smile.',
    timeRequired: 'Routine preventive visits usually take 30 to 45 minutes, with recall frequency based on your risk profile.',
    clinicalFocus: 'Oral Health Maintenance and Risk Prevention',
    bgColor: 'bg-green-50/50',
    textColor: 'text-green-600',
    illustrationClass: 'from-green-500/20 to-emerald-500/10',
    benefits: [
      'Helps detect cavities and gum disease early.',
      'Reduces the likelihood of emergency dental problems.',
      'Protects natural teeth through consistent maintenance.',
      'Supports fresher breath and better daily oral hygiene.',
      'Often lowers the need for more extensive future treatment.'
    ],
    procedure: [
      { step: '01', title: 'Clinical Checkup', desc: 'We examine the teeth, gums, bite, and oral tissues for early signs of disease, wear, or structural problems.' },
      { step: '02', title: 'Diagnostic Records', desc: 'Digital X-rays and other records are taken when needed to detect hidden issues not visible during a routine exam.' },
      { step: '03', title: 'Professional Cleaning', desc: 'Plaque, tartar, and surface buildup are removed to support gum health and maintain a cleaner oral environment.' },
      { step: '04', title: 'Risk Assessment', desc: 'We evaluate factors such as diet, brushing technique, previous decay history, and gum condition to personalize your prevention plan.' },
      { step: '05', title: 'Protective Recommendations', desc: 'Fluoride, sealants, hygiene tools, and recall timing may be advised based on your individual needs.' },
      { step: '06', title: 'Follow-Up Schedule', desc: 'A suitable maintenance interval is planned so your oral health stays monitored and stable over time.' }
    ],
    faqs: [
      { q: 'Why do I need checkups if I have no pain?', a: 'Many problems start without symptoms. Preventive checkups help detect them early before they become painful or expensive to treat.' },
      { q: 'How often should I visit for preventive care?', a: 'Most patients should visit every 6 months, though some benefit from shorter intervals based on gum or decay risk.' },
      { q: 'What is included in preventive dentistry?', a: 'It typically includes exams, cleanings, X-rays when needed, fluoride guidance, hygiene advice, and early intervention planning.' }
    ]
  }
};

type TreatmentDetailPageProps = {
  treatmentId: string;
};

const treatmentVideos: Partial<
  Record<
    string,
    {
      src: string;
      title: string;
      description: string;
    }
  >
> = {
  implants: {
    src: 'https://www.youtube-nocookie.com/embed/vjhHnTCSy0U',
    title: 'Dental implant treatment video',
    description:
      'Watch a visual walkthrough related to dental implant treatment and understand the process more clearly.',
  },
  'root-canal': {
    src: 'https://www.youtube-nocookie.com/embed/0s35QCFg7p0',
    title: 'Root canal treatment video',
    description:
      'Watch a visual walkthrough related to root canal treatment and understand the procedure more clearly.',
  },
  orthodontics: {
    src: 'https://www.youtube-nocookie.com/embed/7KzDwDWTxLE',
    title: 'Open bite orthodontic treatment video',
    description:
      'Watch a visual example related to open bite correction and understand how orthodontic treatment can improve bite alignment.',
  },
};

export default function TreatmentDetailPage({ treatmentId }: TreatmentDetailPageProps) {
  const currentHref = `/services/${treatmentId}`;
  const treatment = treatmentDetails[treatmentId] ?? null;
  const treatmentVideo = treatmentVideos[treatmentId];

  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">The treatment page you are trying to access does not exist or has been moved.</p>
        <Link href="/services" className="bg-[#48b5c4] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3da3b1] transition-all">
          Back to Services
        </Link>
      </div>
    );
  }

  const treatmentUrl = toAbsoluteUrl(currentHref);
  const treatmentImageUrls = treatment.images.slice(0, 2).map((image) => toAbsoluteUrl(image));
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: toAbsoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: toAbsoluteUrl('/services'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: treatment.title,
        item: treatmentUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: treatment.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const videoSchema = treatmentVideo
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: treatmentVideo.title,
        description: treatmentVideo.description,
        embedUrl: treatmentVideo.src,
        url: treatmentUrl,
        thumbnailUrl: treatmentImageUrls[0],
        isFamilyFriendly: true,
        publisher: {
          '@type': 'Dentist',
          name: siteConfig.name,
          url: siteConfig.siteUrl,
        },
      }
    : null;

  return (
    <TreatmentDetailMotion treatmentId={treatmentId}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {videoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}
      {/* Top Banner & Header */}
      <div className="bg-gray-900 pb-16 md:pb-24 rounded-b-[3rem] relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#48b5c4]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl"></div>

        <Navbar />
        
        <div className="pt-32 pb-12 px-6 md:px-16 max-w-[1400px] mx-auto relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-xs sm:text-sm font-medium">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="anim-header-text text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 leading-[1.1]">
              {treatment.title}
            </h1>
            
            <p className="anim-header-text text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              {treatment.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-24">
        
        {/* Introduction & Overview Block */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 anim-fade-up">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-gray-900 border-l-4 border-[#48b5c4] pl-4">
              Introduction
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
              {renderLinkedTreatmentText(treatment.introduction, currentHref)}
            </p>
            
            <h3 className="text-xl md:text-2xl font-display font-medium text-gray-900 pt-4">
              Treatment Overview & Purpose
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              {renderLinkedTreatmentText(treatment.overview, currentHref)}
            </p>
          </div>
          
          {/* Quick Stats / Info Sidebar Card */}
          <div className="lg:col-span-5 bg-[#f9fafa] rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#48b5c4]/10 flex items-center justify-center">
                <Clock className="text-[#48b5c4]" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Time Required</h4>
                <p className="text-xs text-gray-500">Treatment Timeline</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              {renderLinkedTreatmentText(treatment.timeRequired, currentHref)}
            </p>

            <div className="border-t border-gray-100 pt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Patient Guidelines</h4>
              <ul className="space-y-3 text-xs text-gray-500">
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#48b5c4] mt-0.5 shrink-0" />
                  <span>Always bring previous dental records & digital X-rays (if any)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#48b5c4] mt-0.5 shrink-0" />
                  <span>Have a light meal prior to the scheduled appointments</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#48b5c4] mt-0.5 shrink-0" />
                  <span>Kindly notify our surgeon if you are taking blood-thinning medications</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {treatment.servicesIncluded && treatment.servicesIncluded.length > 0 && (
          <section className="mb-24 anim-fade-up">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gray-900 mb-4">
                  Treatments
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                  Our pediatric dental care covers preventive, restorative, growth-monitoring, and emergency support for children at every stage.
                </p>
              </div>
              <div className="flex-1 hidden md:block px-8 pb-3">
                <div className="w-full border-t border-gray-100"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {treatment.servicesIncluded.map((service, index) => (
                <div
                  key={`${treatment.title}-service-${index}`}
                  className="rounded-2xl border border-gray-100 bg-[#f9fafa] px-5 py-4 text-sm text-gray-700 font-medium leading-relaxed"
                >
                  {renderLinkedTreatmentText(service, currentHref)}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Treatment Image Showcase */}
        <section className="mb-24 anim-fade-up">
          {treatmentId === 'bridges-crowns-veneers' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatment.images.map((image, index) => (
                <div
                  key={`${treatment.title}-${index}`}
                  className="rounded-[2rem] overflow-hidden bg-gray-100 h-[260px] md:h-[320px] relative"
                >
                  <img
                    src={image}
                    alt={`${treatment.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[2rem] overflow-hidden bg-gray-100 h-[300px] md:h-[500px] relative group">
                <img
                  src={treatment.images[0]}
                  alt={`${treatment.title} main`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[2rem] overflow-hidden bg-gray-100 h-[300px] md:h-[500px] relative group">
                <img
                  src={treatment.images[1]}
                  alt={`${treatment.title} secondary`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </section>

        {treatmentVideo && (
          <section className="mb-24 anim-fade-up">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gray-900 mb-4">
                  Treatment Video
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                  {treatmentVideo.description}
                </p>
              </div>
              <div className="flex-1 hidden md:block px-8 pb-3">
                <div className="w-full border-t border-gray-100"></div>
              </div>
            </div>

            <div className="mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-gray-100 bg-gray-950 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={treatmentVideo.src}
                  title={treatmentVideo.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        {/* Treatment Procedure Step-by-Step Block */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gray-900 mb-4">
                Step-by-Step Procedure
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-light">
                What to expect during your {treatment.title} journey. We maintain full transparency at each medical milestone.
              </p>
            </div>
            <div className="flex-1 hidden md:block px-8 pb-3">
              <div className="w-full border-t border-gray-100"></div>
            </div>
          </div>
          
          <div className="procedure-steps-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatment.procedure.map((p, idx) => (
              <div key={idx} className="anim-procedure-step bg-[#f9fafa] hover:bg-white border border-transparent hover:border-gray-100 rounded-[2rem] p-8 md:p-10 transition-all hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col h-full group">
                <span className="text-3xl md:text-4xl font-display font-medium text-gray-300 group-hover:text-[#48b5c4] transition-colors mb-6 block">
                  {p.step}
                </span>
                <h3 className="text-[17px] font-display font-semibold text-gray-900 mb-3 group-hover:text-[#48b5c4] transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light mt-auto">
                  {renderLinkedTreatmentText(p.desc, currentHref)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Grid Block */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 py-12 border-t border-b border-gray-100 anim-fade-up">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#48b5c4] bg-[#48b5c4]/10 px-3 py-1.5 rounded-full">
              Why Choose This Treatment
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gray-900 leading-tight">
              Aesthetic & Healthy Benefits
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light">
              Restoring oral functionality is critical, but preserving your beautiful smile and visual facial alignment is just as important to us.
            </p>
          </div>
          
          <div className="lg:col-span-7 benefits-list-container space-y-4">
            {treatment.benefits.map((benefit, idx) => (
              <div key={idx} className="anim-benefit-item flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100/50 hover:bg-white hover:border-gray-100 hover:shadow-sm transition-all duration-300">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={2.5} />
                </div>
                <p className="text-gray-700 text-xs md:text-sm font-medium leading-relaxed">
                  {renderLinkedTreatmentText(benefit, currentHref)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Accordion Block */}
        <section className="max-w-3xl mx-auto mb-24 anim-fade-up">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm font-light">
              Clear up any doubts about your {treatment.title}. Knowledge is key to a comfortable dental experience.
            </p>
          </div>
          
          <TreatmentFaqAccordion faqs={treatment.faqs} currentHref={currentHref} />
        </section>

        {/* CTA: Book Appointment / Call Now Block */}
        <section className="anim-fade-up bg-gray-900 rounded-[2.5rem] py-12 md:py-20 px-8 md:px-16 text-center relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#48b5c4]/15 via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight">
              Ready to Restore <br/>Your Confident <span className="text-[#48b5c4]">Smile</span>?
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light max-w-md mx-auto">
              Schedule your {treatment.title} consultation today with our dental specialists. We ensure an absolutely painless, premium service.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <a 
                href="/#consultation" 
                className="w-full sm:w-auto bg-[#48b5c4] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#3da3b1] transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar size={18} /> Book Appointment
              </a>
              <a 
                href="tel:+917229832893" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Call Now: +91 72298 32893
              </a>
            </div>
          </div>
        </section>

      </div>
    </TreatmentDetailMotion>
  );
}






