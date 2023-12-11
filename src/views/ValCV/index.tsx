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
      </section>
      <section>
        <h2>Spectrum Prototyping</h2>
      </section>
      <section>
        <h2>MassRoots</h2>
      </section>
    </div>
  );
}

export default ValCV;
