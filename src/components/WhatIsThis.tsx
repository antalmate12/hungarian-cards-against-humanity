import ts from "typescript";

const WhatIsThis = () => {
  const helloDemo = () => {
    // POST to "/api/create-github-issue" with a title and body
    fetch("/api/create-github-issue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello Demo",
        body: `# First line
        
        ## Second line
  
        `,
      }),
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <p>Ahogy azt a játék eredeti készítői írják:</p>

      <p>
        Az Emberiség Ellenes Kártyák egy partijáték borzalmas embereknek.
        Szemben minden más partijátékkal amit valaha játszottál, az Emberiség
        Ellenes Kártyák pontosan annyira aljas és kínos mint te és a barátaid.
      </p>

      <p>
        A játék egyszerű. Minden körben egy játékos feltesz egy kérdést egy
        fekete kártyáról, a többiek pedig a legviccesebb fehér kártyáikkal
        válaszolnak.
      </p>

      <button className="bg-red-500 px-12 py-4" onClick={helloDemo}>
        asd
      </button>
    </div>
  );
};

export default WhatIsThis;
