import { Link } from "react-router-dom";
function ValCV() {
  return (
    <div>
      <h1>Work Log</h1>
      <section>
        <h2>Borderless VR</h2>
        <p>
          I first worked on the Borderless proof of concept with{" "}
          <Link
            to="https://oddcommon.com/work/borderless"
            target="_blank"
            rel="noopener noreferrer"
          >
            OddCommon.
          </Link>
          There I built the frontend of a VR experience-building software, a
          teacher virtual field-trip control application, and a component
          library. Work was done in React and Electron.
        </p>
        <p>
          After the proof of concept was successful, we took learnings from the
          first year of operation to build a{" "}
        </p>
      </section>
      <section>
        <h2>Kite Design System</h2>
        <p>
          A year-plus spent on a cross-functional, enterprise design system
          team, where I independently established standards for and built out a
          multi-platform design token library and participated in a swarm effort
          to write components that consumed those tokens. Discovery and
          corrections from the implementation effort helped me increment the
          token library from alpha to beta; ultimately delivering a complete,
          documented set of tokens for web, most tokens for TV, and core tokens
          for Android SDK use.
        </p>
      </section>
      <section>
        <h2>Spectrum Prototyping</h2>
        <p>
          Over two years embedded in a multidisciplinary design group building
          high-fidelity code prototypes for rapid proofs of concept and user
          testing. Heavily focused into advanced settings screens in user
          portals, I acted as a "front-end dev in the room," able to engage the
          hypotheticals and answer questions early in the process. I enjoy
          design + dev pairing sessions to work through the details.
        </p>
      </section>
      <section>
        <h2>MassRoots</h2>
      </section>
    </div>
  );
}

export default ValCV;
