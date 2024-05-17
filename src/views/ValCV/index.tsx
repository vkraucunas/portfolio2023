import { Link } from "react-router-dom";
import bvr1 from "../../assets/bvr-diag-spread.png";
import bvr2 from "../../assets/bvr-builderSpread.png";
import dst1 from "../../assets/dst-documentation.png";
import dst2 from "../../assets/proto6.png";
import proto1 from "../../assets/proto0.png";
import proto2 from "../../assets/proto4.png";
import massroots from "../../assets/mr.png";
import galvanize from "../../assets/galvanize.jpeg";
import resume from "../../assets/VKraucunas_2024_Resume_web.pdf";
import "./styles.scss";

function ValCV() {
  return (
    <div className="cvpage">
      <div className="top">
        <h1>Work Log</h1>
        <a download href={resume}>
          <h2>Resume</h2>
        </a>
      </div>

      <section>
        <h2>Borderless VR</h2>
        <img src={bvr1} alt="Screenshot of Borderless builder" />
        <p>
          I first worked on the Borderless proof of concept with{" "}
          <Link
            to="https://oddcommon.com/work/borderless"
            target="_blank"
            rel="noopener noreferrer"
          >
            OddCommon.
          </Link>
          There I built the frontend of a no-code VR experience building
          software, a teacher virtual field trip control application, and a
          component library. This work was done in React and Electron.
        </p>

        <p>
          After the proof of concept was successful, we took learnings from the
          first year of operation to build an improved system. The
          experience-builder was moved to the browser, and instead of
          tightly-coupled chapters and experiences, we made it a
          SCORM-conformant system with modules that could be plugged into any
          experience.
        </p>
        <p>
          While working on the second version, I became a full time employee and
          contributed in a full stack manner. I lead frontend development on the
          experience builder and component library, and I established and
          maintained the linting rules and quality standards for both JS and
          SCSS.
        </p>
        <img
          src={bvr2}
          alt="Spread of Borderless no-code VR experience builder"
        />
        <p>
          I also built our API's authentication and authorization flows with AWS
          Cognito. In addition to this, I reviewed, tested and integrated
          freelancer deliverables, and handled our staging and production
          release processes, including data migrations and Github Actions for
          testing, automated PR creation, and releasing.
        </p>
        <p>
          This product was a finalist in the VR Awards Outstanding VR Company of
          the Year in 2023.
        </p>
      </section>
      <section>
        <h2>Spectrum: Kite Design System</h2>
        <div className="row break">
          <div className="left">
            <p>
              I spent a year-plus on a cross-functional, enterprise design
              system team, where I independently established standards for and
              built out a multi-platform design token library using Style
              Dictionary. This was a great learning experience, as I discerned
              the right balance of codifying design decisions and allowing
              comopnent developers to still build the components using best
              practices for their work.
            </p>
            <p>
              After delivery of the web platform tokens, I participated in a
              swarm effort to write vanilla components that consumed those
              tokens. Discovery and corrections from the implementation effort
              helped me increment the token library from zero to beta;
              ultimately delivering a complete, documented set of tokens for
              web, most tokens for TV, and core tokens for Android SDK use.
            </p>
          </div>
          <img src={dst1} alt="" className="image-half" />
        </div>
        <p>
          While on this team, I also co-authored the design system
          intake-to-delivery process and defined consumer relation standards,
          managed releases of the design system documentation site, and
          supported non-developers in Git flow.
        </p>
        <img src={dst2} alt="" />
      </section>
      <section>
        <h2>Spectrum: UX Prototyping</h2>
        <img src={proto1} alt="" />
        <p>
          For over two years, I was a member of a multidisciplinary design group
          building high-fidelity code prototypes for rapid proofs of concept and
          user testing. This group's work was heavily focused on advanced
          settings screens in user portals.
        </p>
        <img src={proto2} alt="" />
        <p>
          Acting as the "dev in the room," I was able to engage the designers'
          hypotheticals and answer questions early in the process, saving time
          for the business. I built prototypes for user settings, white-labeled
          wifi captive portals, phone service account management, and service
          bundle building. I enjoy design + dev pairing sessions to work through
          the details. This work was done in Vue.
        </p>
      </section>
      <section>
        <h2>MassRoots</h2>
        <img src={massroots} alt="Massroots homepage" />
        <p>
          I worked on a team that delivered a company site rebrand and rewrote a
          social media application. I also participated in the integration and
          refactoring a Node + Express API after an acquisition.
        </p>
      </section>
      <section>
        <h2>Galvanize Web Development Immersive Resident</h2>
        <div className="row break">
          <div className="left">
            <p>
              After graduating from code school, I was hired as a resident for
              another cohort of students entering the program. Working on a team
              of senior instructors, my purpose was to teach and support the
              students as a recent grad and friendly face.
            </p>
            <p>
              I developed and taught 2-4 classroom-based lessons a week and
              provided one-on-one mentoring support to struggling students. I
              also administered assessments of student progress, established a
              peer code review process for the students.
            </p>
          </div>
          <img src={galvanize} alt="" />
        </div>
      </section>
      <section>
        <h2>Before software</h2>
        <p>
          Prior to my transition to software, I worked as an administrative
          assistant in the nonprofit and higher education spaces. It was here
          that I learned that the user experience of back office software of was
          atrocious and I was motivated to deliver something better. This work
          also built up my customer service skills.
        </p>
      </section>
      <section>
        <h2>Education</h2>
        <p>
          I attended Galvanize Full Stack code bootcamp in 2016. I learned HTML,
          CSS, JavaScript, Node, Express, PostgreSQL, AngularJS and more.
        </p>
        <p>I also hold a BA in Political Science from Creighton University.</p>
      </section>
    </div>
  );
}

export default ValCV;
