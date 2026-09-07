import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TableOfContents from "../components/portfolio/TableOfContents";
import CaseStudySection from "../components/portfolio/CaseStudySection";
import CaseStudyNavigation from "../components/portfolio/CaseStudyNavigation";
import Figure from "../components/portfolio/Figure";

const tocSections = [
  { id: "problem", num: "01", week: "Week 5", title: "Problem" },
  { id: "research", num: "02", week: "Week 6-7", title: "Research" },
  { id: "insights", num: "03", week: "Week 8", title: "Insights" },
  { id: "iter1", num: "04", week: "Week 8-9", title: "Iteration 1" },
  { id: "testing", num: "05", week: "Weeks 9", title: "Testing" },
  { id: "iter2", num: "06", week: "Week 10", title: "Iteration 2" },
  { id: "reflections", num: "07", title: "Reflections" },
];

const facts = [
  // { label: "Role", value: "Research and testing. Problem statement, questionnaire analysis, personas and context scenarios, usability test plan, moderation of sessions." },
  { label: "Timeline", value: "5 weeks" },
  { label: "Team", value: "Conducted by a team of 4 UXRs." },
  { label: "Sample", value: "13 questionnaire responses · 10 usability tests participants" },
  { label: "Methods", value: "Questionnaire · Personas · Context Scenarios · Usability Testing · Heuristic Evaluation" },
  // { label: "Tools", value: "Google Forms, Figma." },
  // { label: "Outcome", value: "Six design changes in the second prototype iteration, each one traceable to a test finding." },
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
  { label: "Errors", value: "1 (Task 4)" },
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
  <div className="rounded-lg border border-white/10 border-l-2 border-l-purple-300/40 bg-white/[0.03] p-4 transition-colors hover:border-purple-300/50 hover:bg-purple-300/[0.06]">
    <h3 className="text-md font-semibold text-white">{title}</h3>
    <p className="mt-2 leading-relaxed text-white/70">{children}</p>
  </div>
);

export default function ProjectFraudFree() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <span className="text-white/70">Fraud</span>Free
        </h1>
        <p className="mt-5 text-xl text-white/80 max-w-2xl leading-snug">
          A website prototype designed to help people recognise and respond to scams, made for older adults with hearing loss.
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
          <CaseStudySection id="problem" num="01" week="Week 5" title="Problem" myPart="Wrote the problem statement and product description.">
          {/* the problem */}
            <p className="text-xl text-white/90 leading-relaxed">
              FraudFree was a five-week group project for Human Computer Interaction at UNSW. We were tasked with designing a legal information interface for older adults with hearing loss, from initial research through to a tested Figma prototype.
            </p>
            <p className="text-white/80 leading-relaxed">
              Existing scam-prevention sites, like Scamwatch, Action Fraud, and the FTC's consumer site, explain things two ways: in videos that are rarely captioned, and in long pages of small type and legal language. For an older person with hearing loss, the first is unusable and the second is hard work. That is often the difference between getting help and giving up.
            </p>
            <p className="text-white/80 leading-relaxed">
              In Week 5, I crafted the product description. It promised a case-management system, legal flowcharts, progress bars, expert articles, and captioned videos.
            </p>
            <p className="text-white/80 leading-relaxed">
              At that point, though, our ideas came from the assignment brief, <em>not from users</em>.
            </p>
          </CaseStudySection>

          {/* research */}
          <CaseStudySection id="research" num="02" week="Week 6 and 7" title="Research" myPart="Contributed questions to, and designed, the questionnaire. Co-wrote the analysis with a teammate.">
            <p className="text-white/80 leading-relaxed">
              Knowing scams exist isn't the same as knowing what to do about one. The questionnaire set out to learn three things: what people do when they're unsure about a message, what makes a site feel trustworthy or overwhelming, and which formats and accessibility tools users are already familiar with.
            </p>

            <p className="text-white/80 leading-relaxed">
              We piloted the fourteen questions with our tutor. Thirteen people responded.               
            </p>

            <p className="text-xl text-white/90 leading-relaxed">
              Here's what they told us:
            </p>

            <Finding title="Experience didn't mean confidence.">69% had seen a suspicious message. When unsure, 77% searched online and 46% asked family or friends. Only one participant said they could identify a scam on sight.</Finding>

            <Finding title="Format matters.">Regarding the format of information, text and captioned video won. 8 of 13 participants chose reading, 7 captioned video, diagrams next, email last. Nobody wanted audio alone.</Finding>

            <Figure alt="Bar chart of preferred methods for getting information online: reading text 8, captioned videos 7, diagrams 4, live chat or phone 3, email 1." caption="Preferred ways to take in information, 13 responses. Text and captioned video first; nobody wanted audio alone." />
            
            <Finding title="Accessibility tools are for everyone.">Even young, confident participants preferred to use captions, magnifiers, and screen readers.</Finding>

            <Finding title="Simplicity builds trust.">Google, YouTube and Facebook Marketplace felt “clean” and “familiar”. Participants were wary of sites with “too many links” or “too many pop-ups” — interfaces that looked more like scams than protection against them.</Finding>

            <Finding title="The biggest difficulty was volume, not hearing.">"Too much text or information" topped the list. Nobody chose "hard to hear videos"..</Finding>

            <Figure alt="Pie chart of the biggest difficulty finding scam prevention information online: too much text 30.8%, font or layout hard to follow 23.1%, don't know which websites to trust 23.1%, too complicated 15.4%, jargon 7.7%." caption="Biggest difficulty finding scam information online, 13 responses. Volume and trust, not hearing." />

            <Finding title="The feature people wanted most was “a way to report a scam easily.”">We took that literally, putting a prominent red 'Report' button in the header so help was always within reach.</Finding>
          </CaseStudySection>

          {/* insights */}
          <CaseStudySection id="insights" num="04" week="Week 8" title="Insight" myPart="Crafted all four personas and wrote their respective context scenarios.">
            <blockquote className="border-l-2 border-white/30 pl-5 text-xl text-white/90 italic leading-relaxed">
              The questionnaire had a blind spot: 11 of 13 respondents were under 50, and only two reported any hearing difficulty, so most of the patterns we observed belonged to people other than our target users. Personas were how we kept them in view.
            </blockquote>
            <p className="text-white/80 leading-relaxed">
              Grace Thompson, 74, is partially deaf. She’s a retired nurse in Wollongong, comfortable with a tablet but not on unfamiliar websites, and was nearly scammed once. In her context scenario, she receives a suspicious email about her internet bill, notices the red 'Report' button on the homepage, and taps it. A popup offers her the choice to type rather than call.
            </p>
            <p className="text-white/80 leading-relaxed">
              Three more personas widened the lens: Aisha, 20, a student who nearly sent her TFN to a fake job ad. Olivia, 35, a mother with no time to verify every delivery text; and Yusuf, 42, a community lawyer who needs translated, captioned material for clients.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <Figure alt="Persona card for Grace Thompson, 74, retired nurse, Wollongong, low tech literacy, partially deaf." caption={`Grace, 74. "It's hard to know who to trust online these days."`} />
              <Figure alt="Persona card for Aisha Khan, 20, student and part-time retail assistant, Western Sydney, high tech literacy." caption={`Aisha, 20. "I almost gave my TFN to a fake job ad."`} />
              <Figure alt="Persona card for Olivia Martin, 35, stay-at-home mother, Brisbane, moderate tech literacy." caption={`Olivia, 35. "I'm too busy wrangling the kids to double-check every email or SMS."`} />
              <Figure alt="Persona card for Yusuf Ali, 42, community immigration lawyer, Melbourne, high tech literacy." caption="Yusuf, 42. Needs translated, captioned material for clients." />
            </div>
            
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-white mb-3">What did this mean for the product?</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 leading-relaxed pl-2">
                <li>Text and captioned video first. Never audio-only.</li>
                <li>A reporting path with no pressure to speak.</li>
                <li>Plain language and short articles.</li>
                <li>Language switching, and recordings that can be watched later, muted.</li>
              </ul>
            </div>
            <p className="text-white/80 leading-relaxed">
              Those became the requirements: homepage, scam checker, a dashboard for events, recordings and legal clinics, a reporting popup, WCAG 2.1 AA, and multilingual readiness.
            </p>
          </CaseStudySection>

          {/* iteration 1 */}
          <CaseStudySection id="iter1" num="05" week="Weeks 8–9" title="Prototype: Iteration 1" myPart="Contributed to the prototype in Figma.">
            <p className="text-white/80 leading-relaxed">
              The first prototype was not the site I'd described in Week 5. Case management, legal flowcharts, and progress bars were dropped after the questionnaire results. We replaced them with what respondents had actually asked for: a way to check and report a suspicious message, and captioned videos.
            </p>

            <div className="grid gap-2 pl-4">
              <article className="border-t border-white/20 pt-3 transition-colors hover:border-purple-300/70">
                <h3 className="text-base font-medium text-white">Stories and scam news</h3>
                <p className="mt-1 text-white/80 leading-relaxed">A homepage with survivor stories and current scam news.</p>
              </article>
              <article className="border-t border-white/20 pt-3 transition-colors hover:border-purple-300/70">
                <h3 className="text-base font-medium text-white">A dashboard</h3>
                <p className="mt-1 text-white/80 leading-relaxed">One place for events, recordings, and legal clinics.</p>
              </article>
              <article className="border-t border-white/20 pt-3 transition-colors hover:border-purple-300/70">
                <h3 className="text-base font-medium text-white">An AI scam checker</h3>
                <p className="mt-1 text-white/80 leading-relaxed">It gives a suspicious file a risk score and highlights common scam phrases.</p>
              </article>
              <article className="border-t border-white/20 pt-3 transition-colors hover:border-purple-300/70">
                <h3 className="text-base font-medium text-white">A prominent 'Report' button</h3>
                <p className="mt-1 text-white/80 leading-relaxed">A red button in the header of every page, beside the language and login controls.</p>
              </article>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              <Figure alt="FraudFree dashboard showing the Past Recordings tab with four webinar thumbnails." caption="Dashboard, Past Recordings. Webinars people can come back to in their own time." />
              <Figure alt="Webinar player with closed captions along the bottom and a sign-language interpreter in a small window at the top right." caption="Captions on by default, interpreter in a draggable window." />
            </div>
            <Note>Add: clean exports of the homepage and the scam checker from Figma. The only copies I have carry the presentation's red annotation boxes.</Note>
            
            <p className="text-white/80 leading-relaxed">
              Two elements came directly from the research: recorded webinars with captions, and a sign-language interpreter in a draggable window, so the content is never obscured.            
            </p>
          </CaseStudySection>

          {/* usability testing */}
          <CaseStudySection id="testing" num="06" week="Week 9" title="Usability Testing" myPart="Wrote the test plan and coordinator script, ran the pilot with our tutor, and moderated two of the ten sessions.">
            <p className="text-white/80 leading-relaxed">
              I planned moderated remote sessions using the think-aloud method, with the moderator stepping in if a participant was stuck for more than two minutes. 
            </p>
            <p className="text-white/80 leading-relaxed">We created five tasks, each with a time benchmark:</p>
            <ol className="!mt-3 list-decimal list-outside space-y-1 text-white/80 leading-relaxed pl-8">
              <li>Change the site language to Chinese. <em className="text-white/50 not-italic font-mono text-sm">30 seconds.</em></li>
              <li>Find a story from someone who was scammed. <em className="text-white/50 not-italic font-mono text-sm">1 minute.</em></li>
              <li>Use the scam checker on a suspicious message. <em className="text-white/50 not-italic font-mono text-sm">2 minutes.</em></li>
              <li>Find a webinar about school scams, as a parent. <em className="text-white/50 not-italic font-mono text-sm">2 minutes.</em></li>
              <li>Find the nearest legal clinic. <em className="text-white/50 not-italic font-mono text-sm">2 minutes.</em></li>
            </ol>
            <p className="text-white/80 leading-relaxed">
              After piloting the test with our tutor, we made two changes before testing with participants: written instructions were prepared for participants with hearing difficulties, and every button in the prototype was made clickable so we wouldn’t run into any hurdles during the test.
            </p>
            <p className="text-white/80 leading-relaxed">
              We then ran sessions with 10 participants, aged 22 to 61. Three were over 50, including two who rated their hearing 2 out of 5.
            </p>
            <p className="text-white/80 leading-relaxed">
              The age disparity was striking. On the same prototype, every participant under 50 completed at least four of the five tasks. No participant over 50 completed more than three.
            </p>
            
            <p className="text-white/80 leading-relaxed">
              Same prototype. Everyone under 50 finished nearly everything. Everyone over 50 got stuck on two tasks.
            </p>
            <p className="text-white/80 leading-relaxed">
              One session in particular stayed with me. During the session with a 57-year-old participant, Task 4 asked her to find a webinar for parents. She went straight to the 'Report' button.
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
                  <span>Internet use <b className="text-white font-medium">"all the time"</b></span>
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
              In another session, a 61-year-old participant asked for help four times, rated the prototype’s ease of use 3 out of 5, and told us: "I would struggle on my own."
            </p>
            <p className="text-white/80 leading-relaxed">
              We compiled the findings from all ten sessions into an issues table and rated each against Nielsen's heuristics. Six issues made the cut.
            </p>
          </CaseStudySection>

          {/* iteration 2 */}
          <CaseStudySection id="iter2" num="07" week="Week 10" title="Prototype: Improvements" myPart="Created and presented the final presentation.">
            <p className="text-white/80 leading-relaxed">We made six changes to the initial prototype, each traceable to a finding.</p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/50">1</span>
                Legal clinics could not be sorted by distance.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                Task 5 meant reading a whole list. Now: a sort dropdown, with Distance as the default.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure label="Before" labelType="before" alt="Legal Clinics page with only a postcode search bar, highlighted." />
                <Figure label="After" labelType="after" alt="Legal Clinics page with a Sort by dropdown offering Distance, Availability and Popular, Distance selected." />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/50">2</span>
                'Report' was misunderstood.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                In the context scenario I wrote, Grace clicks the 'Report' button and feels safe. During testing In the room, participants read it as part of the header or skipped it; the 57-year-old pressed it looking for information. The feature respondents rated most important was the one nobody could find. Now: "Report a Scam", opening a plain-language form.
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
                The dashboard layout changed between tabs.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                'Registered Events' was a weekly calendar, while 'Upcoming Events' was a paginated list. This meant older participants had to relearn the page on every switch. Now: one weekly format for both.
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
                The search bar had no button and no history.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                Participants were unsure Enter would do anything. Now: a visible Search button and a recent-searches dropdown.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure label="Before" labelType="before" alt="Homepage search bar with placeholder text and no button, highlighted." />
                <Figure label="After" labelType="after" alt="Homepage search bar with a yellow Search button and a dropdown of recent searches, and the language menu open showing English, Español, Français and Chinese." />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/50">5</span>
                The active dashboard tab was too faint.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                Light grey on white left participants unsure their click had registered. Now: a dark navy active state.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure label="Before" labelType="before" alt="Dashboard side menu with Upcoming Events selected in a pale grey, highlighted." />
                <Figure label="After" labelType="after" alt="Dashboard side menu with Upcoming Events selected in dark navy with white text." />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/50">6</span>
                'Submit File' had no confirmation.
              </h3>
              <p className="text-white/80 leading-relaxed mt-2 max-w-2xl">
                Files went straight to scanning, worrying users. Now: a preview of what was uploaded, with 'Cancel' and 'Proceed' buttons.
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Figure label="Before" labelType="before" alt="Submit File panel already running tests and showing a Scanning status, highlighted." />
                <Figure label="After" labelType="after" alt="Submit File panel listing files uploaded, one PNG and one PDF, with Cancel and Proceed buttons and an Uploaded Files summary." />
              </div>
            </div>
          </CaseStudySection>

          {/* reflections */}
          <CaseStudySection id="reflections" num="07" title="Reflections" className="border-t-2 border-purple-300/35" showDivider={false}>
            <Finding title="The sample was too small and too young.">Thirteen responses, ten testers. The questionnaire barely reached our target users, and the usability round only did better because we went recruited for it. More input earlier would have meant fewer mid-project changes.</Finding>
            <Finding title="The sessions were rushed.">Course rules meant the pre-test questionnaire could not be sent ahead of time, so it ran live and made sessions feel long. Some participants were uncomfortable answering in person and hurried the debrief.</Finding>
            <Finding title="Repetition in the questionnaire.">
              
              <Figure alt="Three consecutive post-test questions: what did you like least, was anything confusing, do you have suggestions for improvement." caption="Three questions, one answer." />
              
              <span className="mt-3 block">Three questions, one answer. Next time: more meaningful questions, with no overlap between them.</span></Finding>
            
            <Finding title="Think-aloud and intervention earned their place.">Most of what we learned came from participants explaining their confusion, not the questionnaire. Intervening after two minutes meant we couldn't always see how long someone would struggle alone, but it helped us understand why they got stuck.
            </Finding>
            
            <div className="pt-4">
              <div className="rounded-lg border border-dashed border-purple-300/40 bg-black/20 p-4 sm:p-5">
                <p className="text-xl text-white/90 leading-relaxed">
                This was my first time taking a design problem past the interface. We thought building the prototype would be the hard part. It turned out the real work was watching a 57-year-old click the wrong button and realising we never would have caught it without watching someone actually use what we'd built.
                </p>
                <p className="mt-5 text-xl text-white/90 leading-relaxed">
                I wrote Grace's context scenario so that the 'Report' button would grant her a moment of safety. Then a real participant clicked it and didn't find what she needed. This gap between our intentions and someone's eventual experience became one of my first lessons in UX research. It seems that good UX doesn't start with intuition, but rather with empathy, challenging personal assumptions, and a willingness to change.

                </p>
              </div>
            </div>
            <p className="pt-5 font-mono text-xs uppercase tracking-wider text-white/50">
              Huda Mahmood · COMP3511, UNSW · 2025
            </p>
          </CaseStudySection>

          <CaseStudyNavigation nextLabel="Eventsia" nextTo="/#work" />
        </div>
      </div>
    </div>
  );
}