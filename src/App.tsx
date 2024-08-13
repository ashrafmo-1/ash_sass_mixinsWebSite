import "./App.scss";

function App() {
  return (
    <div className="web-app">
      <div className="navgationBar">
        <h2 className="title">ash_sass_mixins</h2>
        <div className="btns" style={{ display: "flex", gap: "20px" }}>
          <button>home</button>
          <button>features</button>
          <button>contact up</button>
          <button>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://github.com/ashrafmo-1/ash_sass_mixins"
              target="blank"
            >
              GIT HUB
            </a>
          </button>
        </div>
      </div>
      <div className="hero">
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
          {/* Header Section */}
          <header style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1 style={{ fontSize: "3em", margin: 0 }}>ash_sass_mixins</h1>
            <p style={{ fontSize: "1.5em", color: "#555" }}>
              Simplify your SCSS with powerful mixins.
            </p>
            <p style={{ fontSize: "1.2em", color: "#777" }}>
              v1.0.4 • Published a day ago
            </p>
          </header>

          {/* Installation Section */}
          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "2em",
                borderBottom: "2px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              Installation
            </h2>
            <p style={{ fontSize: "1.2em" }}>
              To start using <strong>ash_sass_mixins</strong>, simply install it
              via npm:
            </p>
            <pre
              style={{
                backgroundColor: "#f4f4f4",
                padding: "15px",
                borderRadius: "5px",
                fontSize: "1.1em",
                color: "#000",
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              npm i ash_sass_mixins
              <button onClick={() => { navigator.clipboard.writeText('npm i ash_sass_mixins'); alert('Copied to clipboard!'); }}>copy</button>
            </pre>
          </section>

          {/* Usage Section */}
          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "2em",
                borderBottom: "2px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              Usage
            </h2>
            <p style={{ fontSize: "1.2em" }}>
              Import the mixins you need. For example, to import the Flex
              mixins:
            </p>
            <pre
              style={{
                backgroundColor: "#f4f4f4",
                padding: "15px",
                borderRadius: "5px",
                fontSize: "1.1em",
                color: "#000",
              }}
            >
              @use '../node_modules/ash_sass_mixins/src/flex' as *;
            </pre>
            <p style={{ fontSize: "1.2em" }}>
              Now you can start using the mixins in your SCSS files to control
              layout and more:
            </p>
            <pre
              style={{
                backgroundColor: "#f4f4f4",
                padding: "15px",
                borderRadius: "5px",
                fontSize: "1.1em",
                color: "#000",
              }}
            >
              {`.container {
            @include flex-center;
            @include flex-gap(20px);
          }`}
            </pre>
          </section>

          {/* Features Section */}
          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "2em",
                borderBottom: "2px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              Features
            </h2>
            <ul
              style={{
                fontSize: "1.2em",
                listStyleType: "circle",
                paddingLeft: "20px",
              }}
            >
              <li>Sass mixins for Flexbox layouts</li>
              <li>Grid control utilities</li>
              <li>Saves lines of code by simplifying common patterns</li>
              <li>Responsive and easy to integrate</li>
            </ul>
          </section>

        </div>
      </div>
      {/* Additional Information Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2em', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Additional Information</h2>
        <p style={{ fontSize: '1.2em' }}>This project is licensed under the MIT License - see the <a href="LICENSE" target="_blank" style={{ color: '#0070f3', textDecoration: 'none' }}>LICENSE</a> file for details.</p>
        <p style={{ fontSize: '1.2em' }}>Author: <strong>Ashraf Mohaemd</strong></p>
        <p style={{ fontSize: '1.2em' }}>For any inquiries, please contact the author at <a href="https://ashraf-1.vercel.app" target="_blank" style={{ color: '#0070f3', textDecoration: 'none' }}>ashraf-1.vercel.app</a>.</p>
        <p style={{ fontSize: '1.2em' }}>Repository: View the source code on <a href="https://github.com/your-repo" target="_blank" style={{ color: '#0070f3', textDecoration: 'none' }}>GitHub</a>.</p>
        <p style={{ fontSize: '1.2em' }}>© 2024 Ashraf Mohaemd. All rights reserved.</p>
      </section>

      {/* Footer Section */}
      <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '1.2em', color: '#777' }}>
        <p>Check out the <a href="https://www.npmjs.com/package/ash_sass_mixins" target="_blank" style={{ color: '#0070f3', textDecoration: 'none' }}>NPM package</a></p>
        <p>Contribute or view the code on <a href="https://github.com/your-repo" target="_blank" style={{ color: '#0070f3', textDecoration: 'none' }}>GitHub</a></p>
      </footer>
    </div>
  );
}

export default App;
