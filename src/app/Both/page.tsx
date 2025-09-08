
"use client";

import React, { useState } from "react";

// Gainers Future - Scholarship Landing Page
// Single-file React component (Tailwind CSS assumed). Default export is the component.
// Features:
// - Hero with CTA
// - Scholarship cards (Chevening & Commonwealth) with quick facts
// - Interactive tabs for Eligibility / Benefits / Timeline / Apply
// - FAQ accordion
// - Modal application sample / contact form
// - Analytics-friendly data attributes and accessible markup

export default function GainersFutureScholarships() {
  const [openModal, setOpenModal] = useState(false);
  const [activeScholarship, setActiveScholarship] = useState("chevening");
  const [tab, setTab] = useState("overview");

  const scholarships = {
    chevening: {
      id: "chevening",
      title: "Chevening Scholarship",
      tagline: "Future leaders — One year Master's in the UK",
      hero: "Leadership · Professional Growth · UK Master’s",
      bullets: [
        "Fully-funded one-year Master’s degree",
        "Requires minimum 2 years' work experience",
        "Leadership potential and clear post-study plan",
        "Return-to-home-country commitment (usually 2 years)"
      ],
      links: {
        details: "https://www.chevening.org/scholarship/bangladesh/",
        guidance: "https://www.chevening.org/resource-hub/guidance/eligibility/"
      }
    },
    commonwealth: {
      id: "commonwealth",
      title: "Commonwealth Scholarship",
      tagline: "Master’s & PhD — Fully funded by UK government",
      hero: "Research · Development · Longer-term study",
      bullets: [
        "Covers tuition, living allowance and return airfare",
        "Master’s (usually 1 year) and PhD (3–4 years)",
        "Open to eligible citizens of Commonwealth countries",
        "Priority for development-related research/subjects"
      ],
      links: {
        details: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-masters-scholarships/",
        results: "https://cscuk.fcdo.gov.uk/scholarships-results/?wpv_view_count=13930&wpv-cscukscholarshipcountry=bangladesh&wpv_filter_submit=search",
        ldp: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-phd-scholarships-for-least-developed-countries-and-vulnerable-states/"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center font-bold">GF</div>
            <div>
              <a className="font-extrabold text-lg">Gainers <span className="text-indigo-600">Future</span></a>
              <div className="text-xs text-gray-500">Scholarship Guidance • Chevening & Commonwealth</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#scholarships" className="hover:text-indigo-600">Scholarships</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700">Get Help</a>
          </nav>
          <div className="md:hidden">
            <a href="#contact" className="bg-indigo-600 text-white px-3 py-2 rounded-full">Start</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative hero bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">

          <div className="w-full lg:w-6/12">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">আপনার স্বপ্নের স্কলারশিপ — Gainers Future নিয়ে আসছে রোডম্যাপ</h1>
            <p className="mt-4 text-indigo-100 max-w-2xl">Comprehensive, application-focused mentoring for Chevening & Commonwealth scholarships. From eligibility checks to interview coaching, we make your application stand out.</p>
            <div className="mt-6 flex gap-3">
              <a href="#scholarships" className="bg-white text-indigo-700 px-5 py-3 rounded-full font-semibold shadow">Explore Scholarships</a>
              <button onClick={() => { setOpenModal(true); setActiveScholarship('chevening'); }} className="bg-indigo-900/30 border border-white px-5 py-3 rounded-full">Free Consultation</button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-indigo-100">
              <div className="bg-white/10 p-3 rounded">Mock Interviews</div>
              <div className="bg-white/10 p-3 rounded">SOP & LOR Review</div>
              <div className="bg-white/10 p-3 rounded">University Shortlisting</div>
              <div className="bg-white/10 p-3 rounded">Visa Guidance</div>
            </div>
          </div>

          <div className="w-full lg:w-6/12">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden glass-card">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Quick Scholarship Finder</h3>
                    <p className="text-sm text-gray-500">Select to view eligibility & next steps</p>
                  </div>
                  <div className="text-xs text-gray-400">Trusted • Updated</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {Object.keys(scholarships).map((key) => (
                    <button
                      key={key}
                      onClick={() => { setActiveScholarship(key); setTab('overview'); }}
                      className={`text-left p-4 rounded-lg border ${activeScholarship === key ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 bg-white'} shadow-sm`}
                      aria-pressed={activeScholarship === key}
                    >
                      <div className="font-semibold">{scholarships[key].title}</div>
                      <div className="text-xs text-gray-500 mt-1">{scholarships[key].tagline}</div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">Selected</div>
                      <div className="font-bold">{scholarships[activeScholarship].title}</div>
                    </div>
                    <div className="flex gap-2">
                      <a href={scholarships[activeScholarship].links.details} target="_blank" rel="noreferrer" className="text-indigo-600 underline text-sm">Official</a>
                      <button onClick={() => setOpenModal(true)} className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">Get Help</button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex gap-2 text-sm">
                      <button onClick={() => setTab('overview')} className={`px-3 py-1 rounded ${tab==='overview' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>Overview</button>
                      <button onClick={() => setTab('eligibility')} className={`px-3 py-1 rounded ${tab==='eligibility' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>Eligibility</button>
                      <button onClick={() => setTab('timeline')} className={`px-3 py-1 rounded ${tab==='timeline' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>Timeline</button>
                      <button onClick={() => setTab('apply')} className={`px-3 py-1 rounded ${tab==='apply' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>How to Apply</button>
                    </div>

                    <div className="mt-4 text-sm text-gray-700">
                      {tab === 'overview' && (
                        <div>
                          <p className="font-medium">{scholarships[activeScholarship].hero}</p>
                          <ul className="mt-2 list-disc ml-5 space-y-1">
                            {scholarships[activeScholarship].bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {tab === 'eligibility' && (
                        <div>
                          <p className="font-medium">Eligibility — Quick checklist</p>
                          <ul className="mt-2 list-inside list-decimal ml-0 space-y-2 text-gray-700">
                            <li>Bangladeshi citizen (or as stated by the official guidance).</li>
                            <li>Strong academic record (e.g. 1st class / upper second where required).</li>
                            <li>{activeScholarship === 'chevening' ? 'Minimum 2 years work experience' : 'Academic/professional fit with development priorities.'}</li>
                            <li>English language requirement (as per scholarship/university).</li>
                          </ul>
                          <p className="mt-3 text-xs text-gray-500">Always check the official link for the latest eligibility rules.</p>
                        </div>
                      )}

                      {tab === 'timeline' && (
                        <div>
                          <p className="font-medium">Typical Application Timeline</p>
                          <ol className="mt-2 ml-5 space-y-2 list-decimal text-gray-700">
                            <li>Prepare documents & draft SOP/LORs — 3–6 weeks</li>
                            <li>Shortlist universities & finalize references — 1–2 weeks</li>
                            <li>Submit scholarship & uni applications — check official deadlines</li>
                            <li>Interview & selection — mock interview recommended</li>
                          </ol>
                          <p className="mt-2 text-xs text-gray-500">(Gainers Future offers timeline templates and 1:1 tracking.)</p>
                        </div>
                      )}

                      {tab === 'apply' && (
                        <div>
                          <p className="font-medium">How Gainers Future helps you apply</p>
                          <ul className="mt-2 list-disc ml-5 space-y-1 text-gray-700">
                            <li>Free initial eligibility assessment</li>
                            <li>Personalized SOP & LOR editing</li>
                            <li>Mock interviews with recorded feedback</li>
                            <li>Full application pack review before submission</li>
                          </ul>
                          <div className="mt-3 flex gap-2">
                            <a href={scholarships[activeScholarship].links.details} target="_blank" rel="noreferrer" className="px-3 py-2 bg-indigo-600 text-white rounded">Official Guidance</a>
                            <button onClick={() => setOpenModal(true)} className="px-3 py-2 border rounded">Request Consultation</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SCHOLARSHIPS GRID / DETAILS */}
      <section id="scholarships" className="container mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">Featured Scholarships</h2>
          <p className="text-gray-600 mt-2">Two flagship programs we focus on for Bangladeshi applicants.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Chevening Card */}
          <article className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <img src="https://www.chevening.org/wp-content/uploads/2023/07/Chevening-logo-e1688554271373.png" alt="Chevening" className="h-14" />
              <div>
                <h3 className="text-xl font-bold">Chevening Scholarship</h3>
                <p className="text-sm text-gray-600 mt-1">Leadership-focused, one-year Master’s programme for global professionals.</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-indigo-50 rounded">Work Exp: 2+ years</div>
                  <div className="p-2 bg-indigo-50 rounded">Study Duration: 1 year</div>
                </div>

                <ul className="mt-4 list-disc ml-5 text-gray-700 space-y-1">
                  <li>Strong emphasis on leadership & networking.</li>
                  <li>Highly competitive — tailor your narrative & impact.</li>
                </ul>

                <div className="mt-4 flex gap-3">
                  <a href={scholarships.chevening.links.details} target="_blank" rel="noreferrer" className="text-sm underline text-indigo-600">Official Bangladesh page</a>
                  <a href={scholarships.chevening.links.guidance} target="_blank" rel="noreferrer" className="text-sm underline text-gray-500">Eligibility guidance</a>
                </div>
              </div>
            </div>

          </article>

          {/* Commonwealth Card */}
          <article className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Commonwealth_of_Nations_Flag.svg/1200px-Commonwealth_of_Nations_Flag.svg.png" alt="Commonwealth" className="h-12" />
              <div>
                <h3 className="text-xl font-bold">Commonwealth Scholarships</h3>
                <p className="text-sm text-gray-600 mt-1">Master’s & PhD scholarships for development-focused study.</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-indigo-50 rounded">Funding: Full</div>
                  <div className="p-2 bg-indigo-50 rounded">Duration: 1–4 years</div>
                </div>

                <ul className="mt-4 list-disc ml-5 text-gray-700 space-y-1">
                  <li>Priority for research that supports development goals.</li>
                  <li>Application windows and priorities change annually — check official site.</li>
                </ul>

                <div className="mt-4 flex gap-3">
                  <a href={scholarships.commonwealth.links.details} target="_blank" rel="noreferrer" className="text-sm underline text-indigo-600">Commonwealth Masters</a>
                  <a href={scholarships.commonwealth.links.results} target="_blank" rel="noreferrer" className="text-sm underline text-gray-500">Past Results & country list</a>
                </div>
              </div>
            </div>

          </article>

        </div>
      </section>

      {/* SERVICES / WHY US */}
      <section id="services" className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-sm bg-indigo-50">
            <h4 className="font-bold">1:1 Mentoring</h4>
            <p className="text-sm text-gray-700 mt-2">Personal mentors (past scholars & admissions consultants) review your whole profile and create a bespoke plan.</p>
          </div>
          <div className="p-6 rounded-lg shadow-sm bg-white">
            <h4 className="font-bold">Application Crafting</h4>
            <p className="text-sm text-gray-700 mt-2">SOP, LOR framing, CV revamp and scholarship statements edited to industry standard.</p>
          </div>
          <div className="p-6 rounded-lg shadow-sm bg-white">
            <h4 className="font-bold">Mock Interviews & Webinars</h4>
            <p className="text-sm text-gray-700 mt-2">Recorded mock interviews with structured feedback and themed webinars (e.g. STEM applicants).</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-center">Frequently Asked Questions</h3>
        <div className="mt-6 max-w-3xl mx-auto">
          <details className="group p-4 border rounded mb-3" open>
            <summary className="font-semibold cursor-pointer">Can I apply for both Chevening and Commonwealth?</summary>
            <div className="mt-2 text-gray-700">Yes — provided you meet both programmes' eligibility rules. We recommend preparing separately for each application's specific requirements.</div>
          </details>
          <details className="group p-4 border rounded mb-3">
            <summary className="font-semibold cursor-pointer">What makes an application stand out?</summary>
            <div className="mt-2 text-gray-700">A clear impact narrative (why the UK, why this course), strong references, and evidence of leadership or development impact.</div>
          </details>
          <details className="group p-4 border rounded mb-3">
            <summary className="font-semibold cursor-pointer">Do you guarantee a scholarship?</summary>
            <div className="mt-2 text-gray-700">No credible consultant can guarantee an award — but we maximize your chances by improving fit, narrative and readiness.</div>
          </details>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="bg-indigo-700 text-white py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="text-2xl font-bold">Ready to get started?</h4>
            <p className="mt-2 text-indigo-100">Request a free eligibility check and 20-minute consultation.</p>
            <div className="mt-4 flex gap-3">
              <a href="#" onClick={(e)=>{e.preventDefault(); setOpenModal(true); setActiveScholarship('chevening');}} className="bg-white text-indigo-700 px-4 py-2 rounded">Request Consultation</a>
              <a href="mailto:hello@gainersfuture.org" className="border border-white px-4 py-2 rounded">Email Us</a>
            </div>
          </div>

          <div>
            <div className="bg-white text-indigo-900 rounded-lg p-4 shadow">
              <form onSubmit={(e) => { e.preventDefault(); alert('Thanks — we will reach out shortly. (this is a demo)'); }}>
                <div className="grid grid-cols-1 gap-3">
                  <input required className="px-3 py-2 rounded border" placeholder="Your name" />
                  <input required type="email" className="px-3 py-2 rounded border" placeholder="Email address" />
                  <select className="px-3 py-2 rounded border" defaultValue={activeScholarship} onChange={(e)=>setActiveScholarship(e.target.value)}>
                    <option value="chevening">Chevening</option>
                    <option value="commonwealth">Commonwealth</option>
                  </select>
                  <textarea className="px-3 py-2 rounded border" placeholder="A short note (optional)" />
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Request Free Check</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-indigo-100 text-sm">© {new Date().getFullYear()} Gainers Future — Trusted Scholarship Support</div>
      </footer>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full overflow-auto">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-bold">Free Consultation — {scholarships[activeScholarship].title}</h4>
                  <p className="text-sm text-gray-600 mt-1">Share a few details and our team will reach out to schedule a call.</p>
                </div>
                <button onClick={() => setOpenModal(false)} className="text-gray-400">✕</button>
              </div>

              <form onSubmit={(e)=>{ e.preventDefault(); alert('Thanks — demo submission received.'); setOpenModal(false); }} className="mt-4 grid grid-cols-1 gap-3">
                <input required placeholder="Full name" className="px-3 py-2 rounded border" />
                <input required type="email" placeholder="Email" className="px-3 py-2 rounded border" />
                <select className="px-3 py-2 rounded border" defaultValue={activeScholarship}>
                  <option value="chevening">Chevening</option>
                  <option value="commonwealth">Commonwealth</option>
                </select>
                <textarea placeholder="Brief message (why you want this scholarship)" className="px-3 py-2 rounded border" />
                <div className="flex gap-2 justify-end">
                  <button type="button" onClick={() => setOpenModal(false)} className="px-4 py-2 rounded border">Cancel</button>
                  <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white">Send Request</button>
                </div>
              </form>

              <div className="mt-6 text-xs text-gray-400">We use the official sources you provided (Chevening & CSC UK) and keep guidance concise. Always verify deadlines on the official pages linked above.</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
