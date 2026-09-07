import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TableOfContents from "../components/portfolio/TableOfContents";
import CaseStudySection from "../components/portfolio/CaseStudySection";
import Figure from "../components/portfolio/Figure";

const tocSections = [
  { id: "problem", num: "01", week: "Week 5", title: "The problem" },
  { id: "understand", num: "02", week: "Week 6", title: "What we needed to understand" },
  { id: "questionnaire", num: "03", week: "Week 7", title: "The questionnaire" },
  { id: "personas", num: "04", week: "Week 8", title: "From research to personas" },
  { id: "prototype", num: "05", week: "Weeks 8–9", title: "The prototype" },
  { id: "testing", num: "06", week: "Week 9", title: "Usability testing" },
  { id: "changed", num: "07", week: "Week 10", title: "What changed" },
  { id: "differently", num: "08", week: "Week 10", title: "What I'd do differently" },
];

const facts = [
  { label: "Role", value: "Research and testing. Problem statement, questionnaire analysis, personas and context scenarios, usability test plan, moderation of sessions." },
  { label: "Team", value: "Four. One teammate designed and built the prototype; the rest of us carried the research." },
  { label: "Timeline", value: "5 weeks" },
  { label: "Methods", value: "Online questionnaire (13 responses). Four personas with context scenarios. Moderated remote usability tests (10 participants, think-aloud). Heuristic issues table." },
  { label: "Tools", value: "Google Forms, Figma." },
  { label: "Outcome", value: "Six design changes in the second prototype iteration, each one traceable to a test finding." },
];

const logRows = [
  { task: "1", note: "Found the language option quickly, but couldn't pick out Chinese because she didn't recognise the flag.", route: "Homepage → Change language", time: "~15s" },
  { task: "2", note: "Scrolled slightly, clicked Read More Stories.", route: "Homepage → Scroll → Read More Stories", time: "~10s" },
  { task: "3", note: "Searched the homepage for a while before scrolling back up to the navigation bar and clicking Checker. Submitted a file and understood the feature.", route: "Homepage → Scroll → Checker → Upload file → View scam likelihood", time: "~30s", assisted: true },
  { task: "4", note: "Clicked the red Report button at the top of the page, thinking the information would be there. Looked around the homepage, then went to the Dashboard to see what was in it.", route: "Homepage → Report → Homepage → Scroll → Dashboard → Upcoming Events → Join Event", time: "~2m", assisted: true },
  { task: "5", note: "Remembered seeing Legal Clinic during the previous task and went straight back to it.", route: "Homepage → Dashboard → Legal Clinic", time: "~50s" },
];

const logQuotes = [
  "The checker is quite good. I never thought of using something like this before.",
  "None of the information is really popping out.",
  "Nothing is highlighted, so I don't know where to look.",
];

const logSummary = [
  { label: "Completed unassisted", value: "3 of 5" },
  { label: "Errors", value: "1 (Report button)" },
  { label: "Asked for help", value: "0" },
  { label: "Usefulness", value: "4 / 5" },
  { label: "Ease", value: "3 / 5" },
];

/**
 * @param {{ children: React.ReactNode }} props
 */
const Note = ({ children }) => (
  <p className="text-sm font-mono leading-relaxed text-amber-200/90 bg-amber-500/10 border border-dashed border-amber-500/40 rounded-lg px-4 py-3">
    {children}
  </p>
);

/**
 * @param {{ title: string, children: React.ReactNode }} props
 */
const Finding = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-white/70 mt-1 leading-relaxed">{children}</p>
  </div>
);

export default function ProjectFraudFree() {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-24">
      {/* back link */}
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors pt-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      {/* page header */}
      <header className="pt-12 pb-10 border-b border-white/10">
        <p className="font-mono text-xs uppercase tracking-wider text-white/50 flex flex-wrap gap-x-8 gap-y-1">
          <span>Research-first case study</span>
          <span>UNSW · Human Computer Interaction</span>
          <span>July to August 2025</span>
        </p>
        <h1 className="mt-5 text-5xl sm:text-7xl font-bold tracking-tight leading-none">
          <span className="text-white/50">Fraud</span>Free
        </h1>
        <p className="mt-5 text-xl text-white/80 max-w-2xl leading-snug">
          Helping people recognise and respond to scams, designed around older adults with hearing loss. My first time taking a design problem past the interface.
        </p>
      </header>

      {/* project facts */}
      <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-5 py-8 border-b border-white/10">
        {facts.map((f) => (
          <div key={f.label} className="grid grid-cols-[80px_1fr] gap-3 items-baseline">
            <dt className="font-mono text-xs uppercase tracking-wider text-white/50">{f.label}</dt>
            <dd className="text-sm text-white/80 leading-relaxed">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="grid lg:grid-cols-[180px_1fr] gap-12 pt-4">
      {/* case study content */}
        <TableOfContents sections={tocSections} />
        {/* table of contents */}
        <div className="min-w-0">
          <CaseStudySection id="problem" num="01" week="Week 5" title="The problem" myPart="Wrote the problem statement and product description.">
          {/* the problem */}
            <p className="text-xl text-white/90 leading-relaxed">
              In Week 9, a woman who rates her own hearing two out of five sat down with our prototype and clicked the big red Report button, because she wanted help and that looked like where help would be. It wasn't. She spent two minutes looking for it somewhere else.
            </p>
            <p className="text-white/80 leading-relaxed">
              We had built the site for her. Weeks earlier I'd written the problem statement promising exactly that. Scamwatch, Action Fraud and the FTC's consumer site all bury help under small type, dense text and legal language, and almost none of it is captioned. For an older person with hearing loss, that is the gap between getting help and giving up. We were going to close it.
            </p>
            <p className="text-white/80 leading-relaxed">
              This was a five-week group project for Human Computer Interaction at UNSW: an interface in the legal-information space, taken from problem statement to tested prototype. The product description I wrote that week promised a case-management system for tracking your complaint, legal flowcharts, progress bars, expert articles and captioned videos. Much of it came straight from the assignment's list of suggested features. Reasonable on paper. We had not yet asked anyone.
            </p>
          </CaseStudySection>

          {/* what we needed to understand */}
          <CaseStudySection id="understand" num="02" week="Week 6" title="What we needed to understand" myPart="Contributed questions to the questionnaire. A teammate led its design.">
            <p className="text-white/80 leading-relaxed">
              We didn't want to assume that knowing scams exist means knowing what to do about one. Looking back, the questionnaire was really asking three things:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-white/80 leading-relaxed pl-2">
              <li>When someone is unsure whether a message is a scam, what do they actually do?</li>
              <li>What makes a website feel trustworthy, and what makes one feel overwhelming?</li>
              <li>Which formats and accessibility tools are already part of how people read online?</li>
            </ol>
          </CaseStudySection>

          {/* the questionnaire */}
          <CaseStudySection id="questionnaire" num="03" week="Week 7" title="The questionnaire" myPart="Co-wrote the analysis with a teammate.">
            <p className="text-white/80 leading-relaxed">
              Thirteen people answered, and the first thing they told us was that they don't feel ready. 69% had come across a suspicious message. When unsure, 77% search online and 46% ask family or friends. Several ignore it and hope it goes away. Only one person said they could tell a scam on sight.
            </p>
            <p className="text-white/80 leading-relaxed">
              Fourteen questions, piloted with our tutor, who cut one as vague and one as a duplicate. What else came back:
            </p>
            <Finding title="Format matters.">Reading text (8 of 13) and captioned video (7 of 13) led, diagrams next, email support last with one vote.</Finding>
            <Figure alt="Bar chart of preferred methods for getting information online: reading text 8, captioned videos 7, diagrams 4, live chat or phone 3, email 1." caption="Preferred ways to take in information, 13 responses. Text and captioned video first; nobody wanted audio alone." />
            <Finding title="Accessibility tools are for everyone.">Even a young, digitally confident sample was already using captions, magnifiers and screen readers.</Finding>
            <Finding title="Simplicity is trust.">Google, YouTube and Marketplace felt "clean" and "familiar". The sites people avoided had "too many dropdown menus", "too many links", "too many pop-ups", and felt like places you were "more likely to get scammed than find out what isn't a scam".</Finding>
            <Finding title="The biggest difficulty was volume, not hearing.">"Too much text or information" topped the list. Nobody chose "hard to hear videos".</Finding>
            <Figure alt="Pie chart of the biggest difficulty finding scam prevention information online: too much text 30.8%, font or layout hard to follow 23.1%, don't know which websites to trust 23.1%, too complicated 15.4%, jargon 7.7%." caption="Biggest difficulty finding scam information online, 13 responses. Volume and trust, not hearing." />
            <Finding title="And the feature they wanted most was reporting.">"A way to report a scam easily" rated highest, ahead of simple layout and a trusted government logo. We would go on to put a red button in the header for exactly that.</Finding>
          </CaseStudySection>

          {/* from research to personas */}
          <CaseStudySection id="personas" num="04" week="Week 8" title="From research to personas" myPart="Moved the personas into a Figma template and wrote all four context scenarios. A teammate finished the requirements list.">
            <blockquote className="border-l-2 border-white/30 pl-5 text-xl text-white/90 italic leading-relaxed">
              Grace came out of the questionnaire's blind spot. 11 of 13 respondents were under 50, and only two had any hearing difficulty. We had patterns, and almost none of them belonged to the person we were designing for.
            </blockquote>
            <p className="text-white/80 leading-relaxed">
              So we wrote her. <strong className="font-medium text-white">Grace Thompson, 74,</strong> partially deaf, a retired nurse in Wollongong, uses a tablet, finds unfamiliar websites hard, was nearly scammed once. In the scenario I wrote for her, she gets a strange email about her internet bill. On the homepage a bright red button catches her eye: Report. She hesitates, taps it, and a popup asks whether she'd rather call or type. She breathes out. No pressure to speak.
            </p>
            <p className="text-white/80 leading-relaxed">
              Three more personas widened the lens. Aisha, 20, a student who nearly sent her TFN to a fake job ad. Olivia, 35, a mother with no time to verify every delivery text. Yusuf, 42, a community lawyer who needs translated, captioned material for clients.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <Figure alt="Persona card for Grace Thompson, 74, retired nurse, Wollongong, low tech literacy, partially deaf." caption={`Grace, 74. "It's hard to know who to trust online these days."`} />
              <Figure alt="Persona card for Aisha Khan, 20, student and part-time retail assistant, Western Sydney, high tech literacy." caption={`Aisha, 20. "I almost gave my TFN to a fake job ad."`} />
              <Figure alt="Persona card for Olivia Martin, 35, stay-at-home mother, Brisbane, moderate tech literacy." caption={`Olivia, 35. "I'm too busy wrangling the kids to double-check every email or SMS."`} />
              <Figure alt="Persona card for Yusuf Ali, 42, community immigration lawyer, Melbourne, high tech literacy." caption="Yusuf, 42. Needs translated, captioned material for clients." />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">What this meant for the product</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 leading-relaxed pl-2">
                <li>Text and captioned video first. Never audio-only.</li>
                <li>A reporting path with no pressure to speak.</li>
                <li>Plain language, short articles, nothing that reads like a legal document.</li>
                <li>Language switching, and recordings people can watch in their own time, muted.</li>
              </ul>
            </div>
            <p className="text-white/80 leading-relaxed">
              Those became the requirements: homepage, scam checker, a dashboard for events, recordings and legal clinics, a reporting popup, WCAG 2.1 AA, multilingual readiness.
            </p>
          </CaseStudySection>

          {/* the prototype */}
          <CaseStudySection id="prototype" num="05" week="Weeks 8–9" title="The prototype" myPart="None of the screens. Our designer built the prototype in Figma; I was an editor on the file.">
            <p className="text-white/80 leading-relaxed">
              The prototype was not the site I'd described in Week 5. The case management, the flowcharts and the progress bars were gone. The questionnaire, and a tutor telling us the spec was only a guide, replaced them with what people had actually asked for: a way to check a message, a way to report one, and captioned things to watch.
            </p>
            <p className="text-white/80 leading-relaxed">
              Four features, built clean. A homepage with survivor stories and current scam news. A dashboard. An AI checker that gives a suspicious file a risk score and highlights common scam phrases. And top right of every page, beside EN and LOGIN, a red button that said Report.
            </p>
            <p className="text-white/80 leading-relaxed">
              The pieces that came straight from the research: recorded webinars with captions, and a sign-language interpreter in a draggable window so it never covers what you're trying to watch.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <Figure alt="FraudFree dashboard showing the Past Recordings tab with four webinar thumbnails." caption="Dashboard, Past Recordings. Webinars people can come back to in their own time." />
              <Figure alt="Webinar player with closed captions along the bottom and a sign-language interpreter in a small window at the top right." caption="Captions on by default, interpreter in a draggable window." />
            </div>
            <Note>Add: clean exports of the homepage and the scam checker from Figma. The only copies I have carry the presentation's red annotation boxes.</Note>
          </CaseStudySection>

          {/* usability testing */}
          <CaseStudySection id="testing" num="06" week="Week 9" title="Usability testing" myPart="Wrote the test plan and coordinator script, ran the pilot with our tutor, and moderated two of the ten sessions.">
            <p className="text-white/80 leading-relaxed">
              I wrote the script, so I was the voice in the room. We're testing the site, not you. Think out loud. There's no wrong way to do this.
            </p>
            <p className="text-white/80 leading-relaxed">Five tasks, each with a benchmark and an expected route:</p>
            <ol className="list-decimal list-inside space-y-2 text-white/80 leading-relaxed pl-2">
              <li>Change the site language to Chinese. <em className="text-white/50 not-italic font-mono text-sm">30 seconds.</em></li>
              <li>Find a story from someone who was scammed. <em className="text-white/50 not-italic font-mono text-sm">1 minute.</em></li>
              <li>Use the scam checker on a suspicious message. <em className="text-white/50 not-italic font-mono text-sm">2 minutes.</em></li>
              <li>Find a webinar about school scams, as a parent. <em className="text-white/50 not-italic font-mono text-sm">2 minutes.</em></li>
              <li>Find the nearest legal clinic. <em className="text-white/50 not-italic font-mono text-sm">2 minutes.</em></li>
            </ol>
            <p className="text-white/80 leading-relaxed">
              Sessions ran remotely, scripted end to end. Our tutor piloted it first: send the questionnaires in writing for anyone with hearing difficulty, and make every button clickable. Both fixed before the first real session.
            </p>
            <p className="text-white/80 leading-relaxed">
              Ten participants, aged 22 to 61. This time three were over 50, and the two who rated their own hearing 2 out of 5 were 54 and 57.
            </p>
            <p className="text-white/80 leading-relaxed">The pattern that mattered:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-white/50 border-b border-white/20">
                    <th className="py-2 pr-6 font-mono font-medium">Age</th>
                    <th className="py-2 pr-6 font-mono font-medium">Participants</th>
                    <th className="py-2 font-mono font-medium">Tasks completed, of 5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-2 pr-6 font-mono">22 to 47</td>
                    <td className="py-2 pr-6 font-mono">7</td>
                    <td className="py-2">4 or 5, every one</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 pr-6 font-mono">54, 57, 61</td>
                    <td className="py-2 pr-6 font-mono">3</td>
                    <td className="py-2">3, 3 and 3.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/80 leading-relaxed">
              Same prototype. Everyone under 50 finished nearly everything. Everyone over 50 got stuck on two tasks.
            </p>
            <p className="text-white/80 leading-relaxed">
              My session with the 57-year-old is the one I keep coming back to. Task 4 asked her to find a webinar for parents. She went straight to the red button.
            </p>
            {/* participant evaluation log */}
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 sm:p-5">
              <div className="space-y-2 pb-4 border-b border-white/10 font-mono">
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-[13px] uppercase tracking-wider text-white/50">
                  <span>Evaluation <b className="text-white font-medium">4</b></span>
                  <span>Moderator <b className="text-white font-medium">Huda</b></span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-[13px] uppercase tracking-wider text-white/50">
                  <span>Age <b className="text-white font-medium">57</b></span>
                  <span>Hearing <b className="text-white font-medium">2 / 5</b></span>
                  <span>Internet <b className="text-white font-medium">"all the time"</b></span>
                  <span>Has used <b className="text-white font-medium">Scamwatch</b></span>
                </div>
              </div>

              <div className="mt-4 space-y-3 font-mono text-[15px]">
                {logRows.map((r) => (
                  <div key={r.task} className="grid grid-cols-1 gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3 md:grid-cols-[52px_minmax(0,1fr)_120px] md:items-start md:gap-4">
                    <span className="text-white/80 font-medium">{r.task}</span>
                    <span className="min-w-0 break-words text-white/75">
                      {r.note}
                      <span className="mt-1 block text-[12px] text-white/50 break-words">{r.route}</span>
                    </span>
                    <span className={`md:text-right ${r.assisted ? "text-red-400" : "text-white/60"}`}>
                      <span className="block break-words">{r.time}</span>
                      {r.assisted && <span className="mt-1 block text-[11px] uppercase tracking-wider text-red-300/80">assisted</span>}
                    </span>
                  </div>
                ))}

                <div className="flex flex-wrap gap-x-5 gap-y-2 pt-3 text-[13px] text-white/50">
                  {logSummary.map((s) => (
                    <span key={s.label}>{s.label} <b className="text-white font-medium">{s.value}</b></span>
                  ))}
                </div>

                <div className="pt-3 space-y-2 italic text-white/80 text-sm font-sans">
                  {logQuotes.map((q, i) => (
                    <p key={i}>{`"${q}"`}</p>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              The 61-year-old, in a teammate's session, asked for help four times, rated it 3 out of 5, and said the thing nobody wants to hear about a scam-safety site: "I would struggle on my own."
            </p>
            <p className="text-white/80 leading-relaxed">
              A teammate compiled all ten sessions into an issues table, each finding rated for severity against Nielsen's heuristics. Six issues made the cut.
            </p>
          </CaseStudySection>

          {/* what changed */}
          <CaseStudySection id="changed" num="07" week="Week 10" title="What changed" myPart="Assembled the final presentation and presented the section on how designing for older users with hearing loss shaped the product.">
            <p className="text-white/80 leading-relaxed">Six changes, each traceable to a finding. The second is the one the project turns on.</p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/50">1</span>
                Legal clinics had no way to sort by distance.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                A postcode field and nothing else; Task 5 meant reading the whole list. Now: a sort dropdown with Distance as the default.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure label="Before" labelType="before" alt="Legal Clinics page with only a postcode search bar, highlighted." />
                <Figure label="After" labelType="after" alt="Legal Clinics page with a Sort by dropdown offering Distance, Availability and Popular, Distance selected." />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/50">2</span>
                "Report" was misunderstood.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                In the scenario I wrote, Grace taps it and feels safe. In the room, people read it as part of the header or skipped it, and the woman who most needed it pressed it and didn't find what she was looking for. The feature the questionnaire rated most important was the one nobody could find. Now: "Report a Scam", opening a plain-words form that asks the type of scam and what happened.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure label="Before" labelType="before" alt="FraudFree homepage header with EN, LOGIN and a red REPORT button side by side." caption="The red REPORT button, top right, beside EN and LOGIN." />
                <Figure label="After" labelType="after" alt="Header buttons EN, LOGIN and REPORT A SCAM." caption="Relabelled. A tooltip on hover reinforces it." />
              </div>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure alt="Report a Scam popup asking what type of scam you are facing, with Call centre, Workplace, Tenancy, Consumer and Other, and a description box." caption="The form behind it. Type of scam, what happened, Submit. No jargon, no pressure to call." />
                <Note>Add: a clean export of the first-iteration header from Figma for the Before shot. This one still carries a red box from the deck.</Note>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/50">3</span>
                The dashboard changed shape between tabs.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                Registered Events was a weekly calendar; Upcoming Events was a paginated list. Older participants had to relearn the page every time they switched. Now: one weekly format, the same arrows and week label in both.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure label="Before · Upcoming Events" labelType="before" alt="Upcoming Events shown as a grid of event cards with page 2 pagination controls highlighted." />
                <Figure label="Before · Registered Events" labelType="before" alt="Registered Events shown as a weekly calendar with a July 28 to August 3 date range highlighted." />
                <Figure label="After · Upcoming Events" labelType="after" alt="Upcoming Events now headed by the same July 28 to August 3 week selector." />
                <Figure label="After · Registered Events" labelType="after" alt="Registered Events weekly calendar with the same week selector." />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/50">4</span>
                The search bar had no button and no memory.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                People weren't sure Enter would do anything, and there were no recent searches to fall back on. Now: a visible Search button and a recent-searches dropdown.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure label="Before" labelType="before" alt="Homepage search bar with placeholder text and no button, highlighted." />
                <Figure label="After" labelType="after" alt="Homepage search bar with a yellow Search button and a dropdown of recent searches, and the language menu open showing English, Español, Français and Chinese." />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/50">5</span>
                The active dashboard tab was too faint to see.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                Light grey on white; participants weren't sure their click had registered. Now: a dark navy active state.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure label="Before" labelType="before" alt="Dashboard side menu with Upcoming Events selected in a pale grey, highlighted." />
                <Figure label="After" labelType="after" alt="Dashboard side menu with Upcoming Events selected in dark navy with white text." />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/50">6</span>
                "Submit File" had no confirmation.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                Files went straight to scanning, and people worried they'd uploaded the wrong thing. Now: a preview of what was uploaded, with Cancel and Proceed.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure label="Before" labelType="before" alt="Submit File panel already running tests and showing a Scanning status, highlighted." />
                <Figure label="After" labelType="after" alt="Submit File panel listing files uploaded, one PNG and one PDF, with Cancel and Proceed buttons and an Uploaded Files summary." />
              </div>
            </div>
          </CaseStudySection>

          {/* what i'd do differently */}
          <CaseStudySection id="differently" num="08" week="Week 10" title="What I'd do differently" myPart="Presented the reflections. These are mine.">
            <Finding title="The sample was too small and too young.">Thirteen responses, ten testers. The questionnaire barely reached the people we were designing for; the usability round did better only because we went looking. More input earlier would have meant fewer mid-project changes.</Finding>
            <Finding title="The sessions were rushed.">Course rules meant we couldn't send the pre-test questionnaire ahead of time, so it ran live and made sessions feel long. Some people were visibly uncomfortable answering in person and hurried the debrief.</Finding>
            <Finding title="We asked the same thing three ways.">"What did you like least?", "Was anything confusing?", "Any suggestions?" Three questions, one answer. Next time: fewer questions, open-ended, and fewer tasks that each target a distinct feature.</Finding>
            <Figure alt="Three consecutive post-test questions: what did you like least, was anything confusing, do you have suggestions for improvement." caption="Three questions, one answer." />
            <Finding title="Think-aloud earned its place. So did stepping in.">Most of what we learned came from listening to people narrate their confusion, not from the questionnaire. Intervening after two minutes stuck cost a little purity and bought the reason behind every wrong click.</Finding>
            <div className="pt-8 space-y-5">
              <p className="text-xl text-white/90 leading-relaxed">
                This was my first time taking a design problem past the interface. Our designer built a clean prototype in a few weeks; that was never the hard part. The hard part was a 57-year-old clicking the wrong button, and knowing we would only ever have found out by sitting there and watching.
              </p>
              <p className="text-xl text-white/90 leading-relaxed">
                I wrote Grace's scenario so that the Report button would be the moment she felt safe. The real woman pressed it and didn't find what she needed. That gap is the whole job. Good UX doesn't start with something that looks intuitive. It starts with finding out what people actually need, testing that, and changing the design when the evidence doesn't back your first idea.
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-white/50 pt-2">
                Huda Mahmood · COMP3511, UNSW · 2025
              </p>
            </div>
          </CaseStudySection>
        </div>
      </div>
    </div>
  );
}